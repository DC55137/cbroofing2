import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gallerySchema = new mongoose.Schema(
  {
    cover: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
    },
    duration: {
      type: Number,
    },
    description: {
      type: String,
    },
    recap: {
      type: String,
    },
    review: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
