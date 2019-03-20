$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    newLeaflet = {
      titleInput: $("#inputTitle")
        .val()
        .trim(),
      category: $("#category")
        .val()
        .trim(),
      leaflet: $("#leaflet")
        .val()
        .trim(),
      authToken: localStorage.getItem("authToken")
    };
    $.post("/api/post", newLeaflet).then(function() {});
  });
});
