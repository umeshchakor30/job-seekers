// For express
const express = require("express");
const router = express.Router();

const {
  signup,
  signupProcess,
  thankyou,
} = require("../controllers/candidate.js");

// Show signup page
router.get("/signup", signup);

// Sign up process
router.post("/signupProcess", signupProcess);

// For thank you page
router.get("/thankyou", thankyou);

module.exports = router;
