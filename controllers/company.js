var MongoClient = require("mongodb").MongoClient;
var dbhost =
  "mongodb+srv://joobseekersnew:joobseekersnew@joobseekersnew.kngut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
    company_name: req.body.company_name,
    // username: req.body.username,
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
          res.json({ message: "ERROR", err: err });
        } else {
          res.json({ message: "SUCCESS" });
        }
      });
    }
  });
};

//Edit company profile view
const companyEditprocess = (req, res) => {
  res.render("pages/index", { load_view: "edit-company", message: "" });
};

const companyUpdateprocess = (req, res) => {
  var myquery = { first_name: "sachin" };

  var newvalues = {
    $set: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_email: req.body.user_email,
      company_name: req.body.company_name,
      password: req.body.password,
      profile_img: req.file.filename,
    },
  };
  MongoClient.connect(dbhost, function (err, connection) {
    if (err) {
      console.log("Error in connection" + err);
    } else {
      var db = connection.db("joobseekersnew");
      db.collection("company").updateOne(
        myquery,
        newvalues,
        function (err, data) {
          connection.close(); // close connection here
          if (err) {
            // res.json({message:"ERROR",err:err});
            res.render("pages/index", {
              load_view: "edit-company",
              message: "ERROR",
              err: err,
            });
          } else {
            // res.json({message:"SUCCESS"});
            res.render("pages/index", {
              load_view: "edit-company",
              message: "SUCCESS",
            });
            console.log("updated");
          }
        }
      );
    }
  });
};

module.exports = {
  signup,
  signupCompanyProcess,
  companyEditprocess,
  companyUpdateprocess,
};
