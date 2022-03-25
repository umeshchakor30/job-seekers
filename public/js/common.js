// For login
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const login = () => {
  var login_email = document.getElementById("login_user").value;
  var login_password = document.getElementById("login_password").value;
  var option = document.getElementsByName("login_type");

  document.getElementById("err_login_user").innerHTML = "";
  document.getElementById("err_login_password").innerHTML = "";
  document.getElementById("err_login_type").innerHTML = "";
  document.getElementById("err_msg").style.display = "none";

  if (login_email.length == 0) {
    document.getElementById("err_login_user").innerHTML =
      "Please enter a email id";
    document.getElementById("login_user").focus();
    return false;
  } else if (reg.test(login_email) == false) {
    document.getElementById("err_login_user").innerHTML =
      "Please enter a valid email id";
    return false;
  } else if (login_password.length == 0) {
    document.getElementById("err_login_password").innerHTML =
      "Please enter a password";
    document.getElementById("login_password").focus();
    return false;
  } else if (!(option[0].checked || option[1].checked)) {
    document.getElementById("err_login_type").innerHTML =
      "Please select a login type";
    return false;
  } else {
    var selected_option = document.querySelector(
      'input[name="login_type"]:checked'
    ).value;
    fetch("/loginProcess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login_email: login_email,
        login_password: login_password,
        option: selected_option,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ERROR") {
          document.getElementById("err_msg").style.display = "block";
          document.getElementById("err_msg").innerHTML =
            "Email id and password not matched";
          document.getElementById("login_user").value = "";
          document.getElementById("login_password").value = "";
        }

        if (data.message === "SUCCESS") {
          if (data.type === "candidate") {
            location.href = "/candidate-dashboard";
          }
        }
      });
  }
};

// Sign up
const signUp = () => {
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var user_email = document.getElementById("user_email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  document.getElementById("err_first_name").innerHTML = "";
  document.getElementById("err_last_name").innerHTML = "";
  document.getElementById("err_user_email").innerHTML = "";
  document.getElementById("err_username").innerHTML = "";
  document.getElementById("err_password").innerHTML = "";

  if (first_name.length == 0) {
    document.getElementById("err_first_name").innerHTML =
      "Please enter a first name";
    document.getElementById("first_name").focus();
    return false;
  } else if (last_name.length == 0) {
    document.getElementById("err_last_name").innerHTML =
      "Please enter a last name";
    document.getElementById("last_name").focus();
    return false;
  } else if (user_email.length == 0) {
    document.getElementById("err_user_email").innerHTML =
      "Please enter a email id";
    document.getElementById("user_email").focus();
    return false;
  } else if (reg.test(user_email) == false) {
    document.getElementById("err_user_email").innerHTML =
      "Please enter a valid email id";
    return false;
  } else if (username.length == 0) {
    document.getElementById("err_username").innerHTML =
      "Please enter a username";
    document.getElementById("username").focus();
    return false;
  } else if (password.length == 0) {
    document.getElementById("err_password").innerHTML =
      "Please enter a password";
    document.getElementById("password").focus();
    return false;
  } else {
    $(".mj_preloaded").show();
    $(".mj_preloader").show();

    fetch("/signupProcess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        user_email: user_email,
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "ERROR") {
          $(".mj_preloaded").hide();
          $(".mj_preloader").hide();
          //document.getElementById("message").innerHTML=data.msgtype;
        }

        if (data.message == "SUCCESS") {
          location.href = "/thankyou";
        }
      });
  }
};
