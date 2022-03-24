// For login
const login = () => {
  var login_email = document.getElementById("login_user").value;
  var login_password = document.getElementById("login_password").value;

  document.getElementById("err_login_user").innerHTML = "";
  document.getElementById("err_login_password").innerHTML = "";
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
  } else {
    fetch("/loginProcess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login_email: login_email,
        login_password: login_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "ERROR") {
          //document.getElementById("message").innerHTML=data.msgtype;
        }

        if (data.message == "SUCCESS") {
          location.href = "/thankyou";
        }
      });
  }
};
