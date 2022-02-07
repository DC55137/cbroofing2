import mongoose from "mongoose";
import Invoice from "./invoice.js";
const Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
  },
  name: String,
  price: Number,
  mobile: String,
  address: String,
  email: String,
  notes: String,
  date: {
    type: Date,
    default: Date.now,
  },
  stage: {
    type: String,
    required: true,
    enum: [
      "lead",
      "inspect",
      "schedule",
      "commence",
      "completed",
      "followup",
      "missed",
    ],
    default: "lead",
  },
  quote: String,
  roof: Number,
  fg: Number,
  invoices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Invoice",
    },
  ],
  recordDate: {
    type: Array,
    default: [],
  },
  recordStage: {
    type: Array,
    default: [],
  },
});

jobSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Invoice.deleteMany({
      _id: {
        $in: doc.invoices,
      },
    });
  }
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
