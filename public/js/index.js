$(document).ready(() => {
  if (localStorage.getItem("username") !== null) {
    var lsUserName = localStorage.getItem("username");
    var lsAuthToken = localStorage.getItem("authToken");
    $("#userPostLinks").css("display", "block");
    console.log("/user/" + lsUserName + "/" + lsAuthToken);
    $("#userNameLink").attr("href", "/user/" + lsUserName + "/" + lsAuthToken);
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
