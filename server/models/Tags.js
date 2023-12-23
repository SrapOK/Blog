import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max: 8,
      min: 2
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
