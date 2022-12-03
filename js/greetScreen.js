const page = document.getElementById("greet");
const firstText = page.querySelector("span:first-child");
const secondText = page.querySelector("span:nth-child(2)");
const remoteBtn = page.querySelector("div");

firstText.innerText = `Hello ${localStorage.getItem("username")} 👋`;

const toggleHidden = () => {
  firstText.classList.toggle("hidden");
  secondText.classList.toggle("hidden");
  remoteBtn.classList.toggle("hidden");
};

setTimeout(toggleHidden, 2000);
