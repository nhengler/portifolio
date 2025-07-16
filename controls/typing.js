const text = "Web Developer";
const element = document.querySelector(".role");
let index = 0;

function type() {
  if (index < text.length) {
    element.textContent += text[index];
    index++;
    setTimeout(type, 100);
  }
}

window.addEventListener("load", type);