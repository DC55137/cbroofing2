import asyncHandler from "express-async-handler";
import Gallery from "../models/galleryModel.js";

// @desc    Fetch all Galleries
// @route   GET /api/gallery
// @access  Public
const getGalleries = asyncHandler(async (req, res) => {
  const galleries = await Gallery.find({});

  res.json({ galleries });
});

// @desc    Fetch single gallery
// @route   GET /api/gallery/:id
// @access  Public
const getGalleryById = asyncHandler(async (req, res) => {
  const id = req.query.id;

  const gallery = await Gallery.findById(id);

  if (gallery) {
    res.json(gallery);
  } else {
    res.status(404);
    console.log("gallery not found");
    throw new Error("gallery not found");
  }
});

export { getGalleries, getGalleryById };
