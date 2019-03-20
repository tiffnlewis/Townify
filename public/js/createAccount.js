$(document).ready(() => {
  $("form").on("submit", function(event) {
    event.preventDefault();
    newUserDetails = $(this)
      .serialize()
      .split("&");
    var newUser = {};
    $.each(newUserDetails, function(k, v) {
      k;
      j = v.split("=");
      j[1] = j[1].replace(/%20/g, " ").trim();
      j[1] = j[1].replace(/%40/g, "@").trim();
      newUser[j[0].trim()] = j[1];
    });
    $.ajax("/api/createUser", {
      type: "POST",
      data: newUser
    }).then(function(response) {
      userInfo = {
        username: response.username,
        password: response.password
      };
      $.post("/api/login", userInfo).then(results => {
        localStorage.setItem("username", results.username);
        localStorage.setItem("authToken", results.authToken);
        $(location).attr("href", "/");
      });
    });
  });
});
