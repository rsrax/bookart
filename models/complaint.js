const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },

    description: {
      type: String,
      trim: true
    },

    transaction_id: {
      type: String,
      required: true
    },

    status: {
      type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
