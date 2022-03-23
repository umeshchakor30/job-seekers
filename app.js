// For express
var express = require("express");
var app = express();

var path = require("path");

// import router file here
var canditateRouter = require("./routes/candidateRouter.js");
var companyRouter = require("./routes/companyRouter.js");

// Load path
var path = require("path");
var bodyParser = require("body-parser");

// set dynamic port
app.set("port", process.env.PORT || 3400);
var port = app.get("port");

//Called Ejs
app.set("view engine", "ejs");

// user body parsar for get data in body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Delecr the static folder
app.use("/public", express.static(path.resolve(__dirname, "public")));

//Company registration
app.post("/companyregistration", companyRouter);

app.get("/thanks", (req,res)=>{
 res.send("DOne");
});
// default index page
app.get("/", (req, res) => {
  res.render("pages/index", { load_view: "middle-home" });
});

// candidate Signup router
app.get("/signup", canditateRouter);
app.post("/signupProcess", canditateRouter);


app.listen(port, () => {
  console.log("Profile Management Connecting..3400");
});
