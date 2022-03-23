// For express
const express = require("express");
const router = express.Router();

const { signupCompanyProcess } = require("../controllers/company.js");

  // Sign up process
  router.post("/companyregistration",signupCompanyProcess);


  
  
  module.exports = router;
  

