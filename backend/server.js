import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import wrap from "express-async-wrap";
import Job from "./models/job.js";
import Invoice from "./models/invoice.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get(
  "/api/jobs",
  wrap(async (req, res, next) => {
    const jobs = await Job.find({}).populate("invoices");
    res.json(jobs);
  })
);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
