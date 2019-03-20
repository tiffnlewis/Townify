$(document).ready(() => {
  if (localStorage.getItem("username") !== null) {
    var lsUserName = localStorage.getItem("username");
    $("#userPostLinks").css("display", "block");
    $("#userNameLink").text(lsUserName);
  } else {
    $("#createAccountLoginLinks").css("display", "block");
  }
  $("#loginBtn").click(event => {
    event.preventDefault();
    userInfo = {
      username: $("#userName")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };
    $.post("/api/login", userInfo).then(results => {
      localStorage.setItem("username", results.username);
      localStorage.setItem("authToken", results.authToken);
      $(location).attr("href", "/");
    });
  });
});
