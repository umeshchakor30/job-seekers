// For express
const express = require("express");
const router = express.Router();

const {
  signup,
  signupProcess,
  thankyou,
  login,
  loginProcess,
} = require("../controllers/candidate.js");

// Show signup page
router.get("/signup", signup);
router.post("/signupProcess", signupProcess);

// For thank you page
router.get("/thankyou", thankyou);

//For login page
router.get("/login", login);
router.post("/loginProcess", loginProcess);

module.exports = router;
