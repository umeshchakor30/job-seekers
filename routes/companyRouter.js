// For express
const express = require("express");
const router = express.Router();

const { signupCompanyProcess,companyEditprocess,companyUpdateprocess } = require("../controllers/company.js");

var path = require("path");

const multer  = require('multer'); // include multer for file upload
var Storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
  });
var upload= multer({
storage:Storage
}).single('company_profile_img');

  router.post("/companyregistration",signupCompanyProcess); // Sign up process
  router.get("/companyedit",companyEditprocess);//Company Edit profile HTML load
  router.post("/companyupdate",upload,companyUpdateprocess);// Company Profile update
  
  module.exports = router;
  

