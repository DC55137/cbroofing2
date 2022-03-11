import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";

// @desc    Fetch all Jobs
// @route   GET /api/job
// @access  Public
const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ forChris: true });

  res.json({ jobs });
});

// @desc    Fetch single Job
// @route   GET /api/job/:id
// @access  Public
const getJobById = asyncHandler(async (req, res) => {
  const id = req.query.id;

  const job = await Job.findById(id);

  if (job) {
    res.json(job);
  } else {
    res.status(404);
    console.log("job not found");
    throw new Error("job not found");
  }
});
// @desc    Create single Job
// @route   Post /api/job/
// @access  Public
const newJob = asyncHandler(async (req, res) => {
  var job = await Job.find().sort({ number: -1 });
  var highNumber = Number(job[0].number) + 1;
  console.log(highNumber);

  req.body.number = highNumber;
  console.log(req.body);
  const newJob = new Job(req.body);
  await newJob.save();
  newJob.name = newJob.name.replace(/\s+/g, "");
  res.status(201).json(newJob);
});

export { getJobs, getJobById, newJob };
