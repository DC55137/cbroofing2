import express from "express";
const router = express.Router();
import {
  getGalleries,
  getGalleryById,
} from "../controllers/galleryController.js";

router.route("/").get(getGalleries);
router.route("/:id").get(getGalleryById);

export default router;
