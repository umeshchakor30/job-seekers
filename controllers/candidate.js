// Show signup page
const signup = (req, res) => {
  console.log("In candidate .js");
  res.send("Signup");
};

// Show signup process
const signupProcess = (req, res) => {
  console.log("In Sign up process" + req.body.first_name);
};

module.exports = {
  signup,
  signupProcess,
};
