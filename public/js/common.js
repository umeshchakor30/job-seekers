// For login
const login = () => {
  var login_email = document.getElementById("login_user").value;
  var login_password = document.getElementById("login_password").value;
  var option = document.getElementsByName("login_type");

  document.getElementById("err_login_user").innerHTML = "";
  document.getElementById("err_login_password").innerHTML = "";
  document.getElementById("err_login_type").innerHTML = "";
  document.getElementById("err_msg").style.display = "none";
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

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
