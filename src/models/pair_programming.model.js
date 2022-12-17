const mongoose = require("mongoose");

const ppSchema = new mongoose.Schema(
  {
    student: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    IA: { type: mongoose.Schema.Types.ObjectId, ref: "IA" },
    date: { type: String },
    conducted: {
      type: String,
      enum: ["Yes", "No", "Pending"],
      default: "Pending",
    },
    student_limit: { type: Number, default: 5 },
    start_time: { type: String },
    end_time: { type: String },
    courses: { type: mongoose.Schema.Types.ObjectId, ref: "course" },
    units: { type: mongoose.Schema.Types.ObjectId, ref: "unit" },
    block: { type: String },
    no_show: { type: String, enum: ["Yes", "No"] },
    ratings: [{ type: Number, min: 1, max: 5 }],
    type: { type: String, enum: ["Regular", "Ad-Hoc"] },
    feedback: [{ type: String }],
    isBooked : {type: Boolean, default: false},
    details: {
      title: {
        type: String,
      },
      description : {
        type: String
      },
      tags : [{
        type: String
      }],
      problem_link : [{ type: String}]
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Pair_Programming = mongoose.model("Pair_Programming", ppSchema);

module.exports = Pair_Programming;
