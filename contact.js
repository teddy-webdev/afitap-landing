  
// script.js
const msgDone = document.querySelector(".w-form-done");
const msgFail = document.querySelector(".w-form-fail");

const sendButton = document.querySelector("#contact_button");
sendButton.addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.forms["wf-form-Styleguide-Form"]["email"].value;
  var formContact = document.getElementById("wf-form-Styleguide-Form");
  var url = "https://script.google.com/macros/s/AKfycbxNS5CZ-Jf7Kh9u3gm2Rv2rI5U1dqYRZakbWGJtYPe6k-1J-F2shnzdFsNBd_RRh2t1/exec";

  if (email === "") {
    alert("Email must be filled out");
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?" + serializeForm(formContact), true);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("data :", JSON.parse(xhr.responseText));
      console.log("success");
      msgDone.classList.remove("hide");

      setTimeout(function () {
        msgDone.classList.add("hide");
        location.reload();
      }, 3500);
    } else {
      console.log("error");
      msgFail.classList.remove("hide");

      setTimeout(function () {
        msgFail.classList.add("hide");
        location.reload();
      }, 3500);
    }
  };
  
  xhr.send();
});

function serializeForm(form) {
  var formData = new FormData(form);
  var params = [];

  for (var pair of formData.entries()) {
    params.push(encodeURIComponent(pair[0]) + "=" + encodeURIComponent(pair[1]));
  }

  return params.join("&");
}

