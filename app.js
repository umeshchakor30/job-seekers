// For express
var express = require("express");
var app = express();

// Load path
var path = require("path");
var bodyParser = require("body-parser");

// set dynamic port
app.set("port", process.env.PORT || 3400);
var port = app.get("port");

app.set("view engine", "ejs");

// user body parsar for get data in body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(path.resolve(__dirname, "public")));

// default index page
app.get("/", (req, res) => {
  res.render("pages/index", { load_view: "middle-home" });
});

// Show signup page
app.get("/signup", (req, res) => {
  res.render("pages/index", { load_view: "signup" });
});

// Signup process
app.post("/signupProcess", (req, res) => {
  var obj = {
    users: [],
  };
});

app.listen(port, () => {
  console.log("Profile Management Connecting..3400");
});
