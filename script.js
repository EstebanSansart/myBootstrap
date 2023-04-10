const radioToggle = document.getElementById("radio-toggle");
const lightBtn = document.getElementById("lightBtn");
const body = document.body;

function changeBackground() {
  if (radioToggle.querySelector(':checked').id === "btnradio2") {
    body.style.backgroundImage = "url('imgs/back7.png')";
    body.style.color = "white";
  } else {
    body.style.backgroundImage = "url('imgs/back.png')";
    body.style.color = "black";
  }
}

radioToggle.addEventListener("change", changeBackground);
