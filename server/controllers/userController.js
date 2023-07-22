import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { validationResult } from "express-validator";

import UserModel from "../models/User.js";

const generateJwt = (id) =>
  jwt.sign(
    {
      _id: id
    },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );

export const register = async (req, res) => {
  try {
    const { email, fullName, avatarUrl } = req.body;

    const passwordHash = await bcrypt.hash(req.body.password, 4);

    const doc = new UserModel({
      email,
      fullName,
      avatarUrl,
      password: passwordHash
    });

    const user = await doc.save();

    const token = generateJwt(user._id);

    const { password, ...userData } = user._doc;

    return res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось зарегистрироваться"
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "Неверный логин или пароль "
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.password
    );

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неверный логин или пароль"
      });
    }

    const token = generateJwt(user._id);

    const { password, ...userData } = user._doc;

    return res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Что-то пошло не так"
    });
  }
};

export const check = async (req, res) => {
  try {
    const user = await UserModel.findById(new ObjectId(req.userId));

    const { password, ...userData } = user._doc;

    return res.json(userData);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Что-то пошло не так"
    });
  }
};
