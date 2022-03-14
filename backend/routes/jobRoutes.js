import express from "express";
const router = express.Router();
import {
  getJobs,
  getJobById,
  newJob,
  updateJob,
} from "../controllers/jobController.js";

router.route("/").get(getJobs).post(newJob).put(updateJob);
router.route("/:id").get(getJobById).put(updateJob);

export default router;
