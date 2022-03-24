// For login
const login = () => {
  var login_email = document.getElementById("login_email").value;
  var login_password = document.getElementById("login_password").value;

  fetch("/login", {
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
};
