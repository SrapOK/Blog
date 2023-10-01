import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      unique: true,
      required: true
    },
    pupolarity: {
      type: Number,
      default: 1,
      required: false
    }
  },
  {
    timestamps: false
  }
);

export default mongoose.model("Tags", TagSchema);
