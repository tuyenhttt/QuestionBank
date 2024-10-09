const express = require("express");
const router = express.Router();
const questionController = require("../../controllers/mvc/questionController");

/**
 * GET /
 * HomePage
 *
 */
router.get("/addQuestion", questionController.addQuestion);
router.post("/addQuestion", questionController.postQuestion);
router.get("/question/:id", questionController.getByIdQuestion);
router.post("/question/:id", questionController.updateQuestion);
router.delete("/question/delete/:id", questionController.deleteQuestion);

module.exports = router;
