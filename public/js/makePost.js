$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    newLeaflet = {
      title: $("#inputTitle")
        .val()
        .trim(),
      category: $("#Select1")
        .val()
        .trim(),
      summary: $("#Textarea").val(),
      authToken: localStorage.getItem("authToken")
    };
    $.post("/api/post", newLeaflet).then(function() {
      $(location).attr("href", "/");
    });
  });
});
