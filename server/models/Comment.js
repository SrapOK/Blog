import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: "",
      required: true
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
