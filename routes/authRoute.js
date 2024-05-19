const controller = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.get("/signup", controller.signup);

module.exports = router;
 