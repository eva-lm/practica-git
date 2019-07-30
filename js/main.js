"use strict";

const seriousFace = document.querySelector(".face");

function handleFaceOnClick(event) {
  seriousFace.innerHTML = ";)";
}

seriousFace.addEventListener("click", handleFaceOnClick);

function handleFaceMouseOut(event) {
  seriousFace.innerHTML = ":|";
}

seriousFace.addEventListener("mouseout", handleFaceMouseOut);
