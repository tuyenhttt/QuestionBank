const mongoose = require("mongoose");
const Question = require("../../models/question.model");

exports.homepage = async (req, res) => {
  const locals = {
    title: "Home",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("index", locals);
};

exports.addQuestion = async (req, res) => {
  const locals = {
    title: "Add Question",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("questions/addQuestion", locals);
};

exports.postQuestion = async (req, res) => {
  console.log(req.body);

  const newQuestion = new Question({
    text: req.body.text,
    option: req.body.option,
    correctAnswer: req.body.correctAnswer,
  });

  try {
    await Question.create(newQuestion);
    res.redirect("/questions");
  } catch (error) {
    console.log(error);
  }
};

exports.getByIdQuestion = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID từ tham số URL
    console.log(id); // In ID ra console để kiểm tra
    const question = await Question.findById(id); // Tìm câu hỏi theo ID

    if (!question) {
      return res.status(404).send("Question not found"); // Trả về lỗi 404 nếu không tìm thấy câu hỏi
    }

    const locals = {
      title: "View Detail",
      description: "Detail of question",
      question, // Thông tin câu hỏi
    };

    res.render("questions/detail", locals);
  } catch (error) {
    console.error(error); // In lỗi ra console để kiểm tra
    res.status(500).send("Server error"); // Trả về lỗi 500 nếu có lỗi
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, option, correctAnswer } = req.body;
    const question = await Question.findById(id);
    console.log(req.body);

    if (!question) {
      return res.status(404).send("Question not found");
    }
    if (text) question.text = text;
    if (option) question.option = option.split(",").map((opt) => opt.trim());
    if (correctAnswer)
      question.correctAnswer = correctAnswer
        .split(",")
        .map((ans) => ans.trim()); //
    await question.save();
    const locals = {
      title: "View Detail",
      description: "Detail of question",
      question, // Thông tin câu hỏi
    };
    res.render("questions/detail", locals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findByIdAndDelete(id);

    if (!question) {
      return res.status(404).send("Question not found");
    }

    // Optionally, you can send a response message
    res.status(200).send("Question deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
