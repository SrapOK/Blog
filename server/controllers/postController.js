import PostModel from "../models/Post.js";
import TagsModel from "../models/Tags.js";
import { isValidObjectId } from "mongoose";

export const create = async (req, res) => {
  const { title, text, imageUrl, tags } = req.body;
  try {
    const doc = new PostModel({
      title,
      text,
      imageUrl,
      tags: tags.split(/[\s,]/).filter((item) => item !== ""),
      user: req.userId
    });

    const post = await doc.save();
    return res.json(post._doc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось создать статью"
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const { tag, sort, search, limit, page } = req.query;

    let posts;
    let sortType;
    const totalCount = await PostModel.countDocuments({}).exec();

    if (sort === "popular") {
      sortType = "views";
    } else if (sort === "new") {
      sortType = "createdAt";
    }

    if (tag) {
      posts = PostModel.find({ tags: { $in: [tag] } });
    } else posts = PostModel.find();
    if (search) {
      posts.find({ title: { $regex: search, $options: "i" } });
    }
    if (limit) {
      posts.limit(limit);
      if (page) {
        posts.skip(limit * (page - 1));
      }
    }

    if (sort) posts.sort({ [sortType]: "desc" });
    else posts.sort({ createdAt: "desc" });
    posts.populate("user", ["avatarUrl", "fullName"]);

    posts = await posts.exec();

    return res.json({ posts, totalCount });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось получить статьи"
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id))
      return res.status(400).json({ message: "Не удалось получить статью" });

    const post = await PostModel.findOneAndUpdate(
      {
        _id: id
      },
      {
        $inc: { views: 1 }
      },
      {
        returnDocument: "after"
      }
    );
    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось получить статью"
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (isValidObjectId(id)) {
      await PostModel.findByIdAndDelete({ _id: id });
      return res.json({ success: true });
    } else
      return res.status(400).json({ message: "Не удалось удалить статью" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось удалить статью"
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, imageUrl, tags } = req.body;

    if (isValidObjectId(id)) {
      await PostModel.findByIdAndUpdate(
        { _id: id },
        {
          title,
          text,
          imageUrl,
          tags: tags.split(/[\s,]/).filter((item) => item !== ""),
          user: req.userId
        }
      );
      res.json({ success: true });
    } else
      return res.status(400).json({ message: "Не удалось обновить статью" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось обновить статью"
    });
  }
};

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(5).exec();

    const tags = posts
      .map((item) => item.tags)
      .flat()
      .slice(0, 5);

    return res.json(tags);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось получить статьи"
    });
  }
};
