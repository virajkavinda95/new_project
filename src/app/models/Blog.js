import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    meta_title: {
      type: String,
      required: true,
    },
    meta_description: {
      type: Text,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: false,
    },
    destination: {
      type: Schema.Types.ObjectId,
      ref: "Destination",
      required: false,
      default: null,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      default: null,
    },
    tags: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
