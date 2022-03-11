import express from "express";
const router = express.Router();
import { getJobs, getJobById, newJob } from "../controllers/jobController.js";

router.route("/").get(getJobs).post(newJob);
router.route("/:id").get(getJobById);

export default router;
