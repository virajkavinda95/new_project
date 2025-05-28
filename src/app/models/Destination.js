import mongoose from "mongoose";

const DestinationScheam = new mongoose.Schema(
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
    short_description: {
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
    location: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Destination ||
  mongoose.model("Destination", DestinationScheam);
