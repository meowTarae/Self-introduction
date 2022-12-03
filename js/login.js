const loginForm = document.getElementById("login");
const loginInput = loginForm.querySelector("input");

const handleLoginSubmit = (event) => {
  const username = loginInput.value;
  localStorage.setItem("username", username);
};

loginForm.addEventListener("submit", handleLoginSubmit);
