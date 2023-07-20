import { ObjectId } from "mongodb";
import PostModel from "../models/Post.js";
import { isValidObjectId } from "mongoose";

export const create = async (req, res) => {
  const { title, text, imageUrl, tags } = req.body;
  try {
    const doc = new PostModel({
      title,
      text,
      imageUrl,
      tags,
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
  const posts = await PostModel.find();
  return res.status(200).json(posts);
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  if (isValidObjectId(id)) {
    const post = await PostModel.findById(id);
    return res.status(200).json(post);
  } else {
    return res.status(400).json({ message: "Не удалось получить статью" });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const post = PostModel.deleteOne({ id });
      return res.status(200).json(post);
    } else
      return res.status(400).json({ message: "Не удалось удалить статью" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось удалить статью"
    });
  }
};
