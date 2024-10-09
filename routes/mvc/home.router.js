const express = require("express");
const router = express.Router();
const mainController = require("../../controllers/mvc/homeController");

/**
 * GET /
 * HomePage
 *
 */

router.get("/", mainController.homepage);

module.exports = router;
