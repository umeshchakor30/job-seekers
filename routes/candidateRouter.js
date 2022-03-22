// For express
const express = require("express");
const router = express.Router();

const { signup, signupProcess } = require("../controllers/candidate.js");

// Show signup page
router.get("/signup", function (req, res) {
  res.render("pages/index", { load_view: "signup" });
});

// Sign up process
router.post("/signupProcess", signupProcess);

module.exports = router;
