var MongoClient = require("mongodb").MongoClient;
var dbhost = "mongodb+srv://joobseekersnew:joobseekersnew@joobseekersnew.kngut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Show signup page
const signup = (req, res) => {
    console.log("In candidate .js");
    res.send("Signup");
  };
  
  // Show signup process
  const signupCompanyProcess = (req, res) => {
    
    const newCompany = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_email: req.body.user_email,
        username: req.body.username,
        password: req.body.password,
      };
      MongoClient.connect(dbhost, function (err, connection) {
        if (err) {
          console.log("Error in connection" + err);
        } else {
          var db = connection.db("joobseekersnew");
          db.collection("company").insertOne(newCompany, function (err, data) {
            connection.close(); // close connection here
            if (err) {
              console.log("Error in insert" + err);
            } else {
              res.redirect("/thankyou");
            }
          });
        }
      });

  };
  
  module.exports = {
    signup,
    signupCompanyProcess,
  };
  