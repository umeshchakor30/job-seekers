// Mongo DB
var MongoClient = require("mongodb").MongoClient;
var dbhost =
  "mongodb+srv://joobseekersnew:joobseekersnew@joobseekersnew.kngut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const { decode } = require("jsonwebtoken");

// Show signup page
const signup = (req, res) => {
  res.render("pages/index", { load_view: "signup" });
};

// Show signup process
const signupProcess = (req, res) => {
  console.log(req);
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
          res.json({ message: "ERROR" });
        } else {
          res.json({ message: "SUCCESS" });
        }
      });
    }
  });
};

// For login page
const login = (req, res) => {
  res.render("pages/index", { load_view: "login" });
};

const loginProcess = (req, res) => {
  MongoClient.connect(dbhost, function (err, connection) {
    if (err) {
      console.log("Error in connection" + err);
    } else {
      var db = connection.db("joobseekersnew");

      let login_email = req.body.login_email;
      let login_password = req.body.login_password;

      let collection_type = "";
      if (req.body.option === "candidate") {
        collection_type = db.collection("candidate");
      }
      if (req.body.option === "company") {
        collection_type = db.collection("company");
      }
      const valid_users = collection_type
        .find({
          $and: [{ user_email: login_email }, { password: login_password }],
        })
        .toArray(function (error, result) {
          if (error) throw error;
          console.log(result);
          if (result.length > 0) {
            var token = jwt.sign({ user: result }, "love-node-js");
            res.json({ message: "SUCCESS", type: req.body.option });
          } else {
            res.json({ message: "ERROR" });
          }
          connection.close(); // close connection here
        });
    }
  });
};

// For Thank you page
const thankyou = (req, res) => {
  res.render("pages/index", { load_view: "thankyou" });
};

module.exports = {
  signup,
  signupProcess,
  thankyou,
  login,
  loginProcess,
};
