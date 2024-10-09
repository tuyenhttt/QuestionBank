const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    option: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: [String],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
