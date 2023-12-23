import { isValidObjectId } from "mongoose";
import CommentModel from "../models/Comment.js";
import FeedbackModel from "../models/Feedback.js";

export const create = async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  try {
    const doc = new CommentModel({
      text,
      post: id,
      user: req.userId
    });

    const comment = await doc.save();
    return res.json(comment._doc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось создать комментарий" });
  }
};

export const getCommentsByPostId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Не удалось получить пост" });
    }
    const comments = await CommentModel.find({ post: id }).populate("user", [
      "fullName",
      "avatarUrl"
    ]);
    return res.json(comments);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось получить комментарии" });
  }
};

export const getCommentsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ message: "Не удалось получить пользователя" });
    }
    const comments = await CommentModel.find({ user: id }).populate("user", [
      "fullName",
      "avatarUrl"
    ]);
    return res.json(comments);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось получить комментарии" });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ message: "Не удалось получить комментарий" });
    }
    const comment = await CommentModel.findById(id).populate("user", [
      "fullName",
      "avatarUrl"
    ]);
    return res.json(comment);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось получить комментарий" });
  }
};

export const getAll = async (req, res) => {
  try {
    const comments = await CommentModel.find().populate("user", [
      "fullName",
      "avatarUrl"
    ]);
    return res.json(comments);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось получить комментарии" });
  }
};

export const removeOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ message: "Не удалось удалить комментарий" });
    }

    await CommentModel.deleteOne({ _id: id, user: req.userId });
    return res.json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось удалить комментарий" });
  }
};

export const patch = async (req, res) => {
  try {
    const { id } = req.params;
    const { payload } = req.body;
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось обновить комментарий" });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ message: "Не удалось обновить комментарий" });
    }

    await CommentModel.findByIdAndUpdate(
      { _id: id, user: req.userId },
      { text }
    );
    return res.json({ messsage: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Не удалось обновить комментарий" });
  }
};
