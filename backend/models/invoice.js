import mongoose from "mongoose";
const Schema = mongoose.Schema;

const invoiceSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  jobNumber: {
    type: Array,
    default: [],
  },
  invoiceNumber: String,
  name: String,
  amount: Number,
  notes: String,
  location: {
    type: String,
    trim: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  job: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
