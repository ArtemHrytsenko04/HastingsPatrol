// Code for sponsors carousel.
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".sponsors-track");
  const items = track.children;
  const copy = [...items].map((item) => item.cloneNode(true));
  copy.forEach((item) => track.appendChild(item));
});
