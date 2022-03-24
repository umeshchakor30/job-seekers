// For express
const express = require("express");
const router = express.Router();

const {
  signup,
  signupProcess,
  thankyou,
  login,
} = require("../controllers/candidate.js");

// Show signup page
router.get("/signup", signup);

// Sign up process
router.post("/signupProcess", signupProcess);

// For thank you page
router.get("/thankyou", thankyou);

//For login page
router.get("/login", login);

module.exports = router;
