import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    feedback: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Feedback"
    },
    rating: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
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
