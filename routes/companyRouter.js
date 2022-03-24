// For express
const express = require("express");
const router = express.Router();

const { signupCompanyProcess,companyEditprocess } = require("../controllers/company.js");

  // Sign up process
  router.post("/companyregistration",signupCompanyProcess);
  
  //Company Edit profile HTML load
  router.get("/companyedit",companyEditprocess);
                             
  
  module.exports = router;
  

