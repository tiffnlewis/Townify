$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    newLeaflet = {
      titleInput: $("#inputTitle")
        .val()
        .trim(),
      category: $("#Select1")
        .val()
        .trim(),
      leaflet: $("#Textarea").val(),
      authToken: localStorage.getItem("authToken")
    };
    $.post("/api/post", newLeaflet).then(function() {
      console.log("test");
    });
  });
});
