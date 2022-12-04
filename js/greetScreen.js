const page = document.getElementById("greet");
const text = page.querySelector("span:first-child");
const remoteBtn = page.querySelector("div");
const myName = "My name is Tarae";
let i = 0,
  check;

text.innerText = `Hello ${localStorage.getItem("username")}!`;

function typing() {
  if (i < myName.length + 1) {
    text.innerText = myName.substring(0, i);
    i++;
    setTimeout(typing, 150);
  }
  return text.innerText;
}

function delText() {
  if (i >= 0) {
    text.innerText = text.innerText.slice(0, i);
    i--;
    setTimeout(delText, 120);
  }
}

const animateElements = () => {
  i = text.innerText.length;
  delText();
  setTimeout(typing, 3000);
  setTimeout(() => {
    remoteBtn.classList.toggle("hidden"),
      remoteBtn.classList.toggle("showText");
  }, 7000);
};

setTimeout(animateElements, 3000);
