// contact form with message

// const msgDone = document.querySelector(".w-form-done");
// const msgFail = document.querySelector(".w-form-fail");

$("#form-submit-contact").on("click", function (e) {
  let x = document.forms["wf-form-Styleguide-Form"]["email"].value;
  var $formContact = $("#wf-form-Styleguide-Form"),
      url = "https://script.google.com/macros/s/AKfycbw9I8FeCPWQw0aoLUipiU7ZGO4p4VG5ypEx6KcCwg3MjFLGX00cdWeU4NhR_QctpUPE/exec";

  if (x == "") {
    alert("Email must be filled out");
  } else {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: 'json',
      data: $formContact.serializeArray(),
      success: function success(data) {
        console.log("data :", data);
        console.log("success");
        // msgDone.classList.remove("hide");

        setTimeout(function () {
        //   msgDone.classList.add("hide");
          location.reload();
        }, 3500);
      },
      error: function error() {
        console.log("error");
        // msgFail.classList.remove("hide");

        setTimeout(function () {
        //   msgFail.classList.add("hide");
          location.reload();
        }, 3500);
      },
    });
  }
});
