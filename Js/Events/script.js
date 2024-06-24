
var text = document.querySelector(".btn");
text.addEventListener("mouseover", first);
text.addEventListener("click", second);
text.addEventListener("mouseout", third);

function first() {
  document.querySelector(".content").innerText+"Mouse is over";
}

function second() {
  document.querySelector(".content").innerText+"Mouse was clicked";
}

function third() {
  document.querySelector(".content").innerText+"Mouse has left ";
}