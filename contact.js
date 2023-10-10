$(document).ready(function() {
  const msgDone = $(".w-form-done");
  const msgFail = $(".w-form-fail");

  $("#contact_button").click(function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var formContact = $("#wf-form-Styleguide-Form");
    var url = "https://script.google.com/macros/s/AKfycbz6j4Is9weaBxC40-swpZLcoD-y96e71GN5tgcdLsOkMc89bCeU9yXPIIaIKTTTp5v8/exec";

    if (email === "") {
      alert("Email must be filled out");
      return;
    }

    $.ajax({
      url: url,
      type: "GET",
      data: formContact.serialize(),
      contentType: "application/json",
      success: function(data) {
        console.log("data :", data);
        console.log("success");
        msgDone.removeClass("hide");

        setTimeout(function() {
          msgDone.addClass("hide");
          location.reload();
        }, 3500);
      },
      error: function() {
        console.log("error");
        msgFail.removeClass("hide");

        setTimeout(function() {
          msgFail.addClass("hide");
          location.reload();
        }, 3500);
      }
    });
  });
});