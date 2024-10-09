const express = require("express");
const router = express.Router();
const quizController = require("../../controllers/mvc/quizController");

/**
 * GET /
 * HomePage
 *
 */

router.get("/addQuizz", quizController.addQuiz);
router.post("/addQuizz", quizController.postQuiz);
router.get("/quiz/:id", quizController.getByIdQuiz);
router.post("/quiz/:id", quizController.updateQuiz);
router.delete("/:id", quizController.deleteQuiz);

module.exports = router;
