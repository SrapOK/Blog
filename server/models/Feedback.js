import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  like: {
    type: String,
    enum: ["like", "dislike"],
    required: true
  }
});

export default mongoose.model("Feedback", FeedbackSchema);
