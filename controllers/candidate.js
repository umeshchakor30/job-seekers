// Mongo DB
var MongoClient = require("mongodb").MongoClient;
var dbhost = "mongodb+srv://joobseekersnew.kngut.mongodb.net/";

// Show signup page
const signup = (req, res) => {
  res.render("pages/index", { load_view: "signup" });
};

// Show signup process
const signupProcess = (req, res) => {
  const newCandidate = {
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
      db.collection("candidate").insertOne(newCandidate, function (err, data) {
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
  signupProcess,
};
