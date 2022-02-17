import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import gallery from "./data/gallery.js";
import Gallery from "./models/galleryModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Gallery.deleteMany();

    const createdGallery = await Gallery.insertMany(gallery);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Gallery.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
