const express = require("express");
const router = express.Router();
const headerController = require("../../controllers/mvc/headerController");
const questionController = require("../../controllers/mvc/questionController");
/**
 * GET /
 *
 */

router.get("/questions", headerController.questionpage);
router.get("/quizzes", headerController.quizzpage);

module.exports = router;
