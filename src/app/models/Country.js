import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema(
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
    region: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Country ||
  mongoose.model("Country", CountrySchema);
