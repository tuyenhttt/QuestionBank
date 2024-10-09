const mongoose = require("mongoose");
const Quiz = require("../../models/quiz.model");

exports.homepage = async (req, res) => {
  const locals = {
    title: "Home",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("index", locals);
};

exports.quizzpage = async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes from the database
    const locals = {
      title: "Quiz List",
      description: "List of available quizzes",
      quizzes, // Pass the quizzes to the view
    };
    res.render("quizzes/showQuizzes", locals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error"); // Handle any errors
  }
};

exports.addQuiz = async (req, res) => {
  const locals = {
    title: "Add Quiz",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("quizzes/addQuizz", locals);
};

// Post Quiz (Submit new quiz)

exports.postQuiz = async (req, res) => {
  console.log(req.body);

  const newQuiz = new Quiz({
    name: req.body.name, // Assuming 'name' is a field for quiz
    description: req.body.description, // Assuming 'description' field for quiz
  });

  try {
    await Quiz.create(newQuiz);
    res.redirect("/quizzes");
  } catch (error) {
    console.log(error);
  }
};

// Get Quiz by ID (View Quiz Detail)
exports.getByIdQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const quiz = await Quiz.findById(id).populate("questions"); // Assuming Quiz has related questions

    if (!quiz) {
      return res.status(404).send("Quiz not found");
    }

    const locals = {
      title: "Quiz Details",
      description: "Detail of quiz",
      quiz, // Passing the quiz object to view
    };

    res.render("quizzes/detailQuizzes", locals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Update Quiz
exports.updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const quiz = await Quiz.findById(id);
    console.log(req.body);

    if (!quiz) {
      return res.status(404).send("Quiz not found");
    }

    if (title) quiz.title = title;
    if (description) quiz.description = description;

    await quiz.save();

    const locals = {
      title: "Quiz Details",
      description: "Detail of quiz",
      quiz,
    };
    res.render("quizzes/detailQuizzes", locals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete Quiz
exports.deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndDelete(id);

    if (!quiz) {
      return res.status(404).send("Quiz not found");
    }

    // Optionally, you can send a response message
    res.status(200).send("Quiz deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
