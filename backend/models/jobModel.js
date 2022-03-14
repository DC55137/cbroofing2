import mongoose from "mongoose";
import Invoice from "./invoiceModel.js";

const Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
  },
  name: String,
  forChris: {
    type: Boolean,
    default: false,
  },
  good: {
    type: Boolean,
    default: false,
  },
  discuss: {
    type: Boolean,
    default: false,
  },
  images: Array,
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
      "subcontractors",
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
