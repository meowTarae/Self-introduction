/**
 * 만약 localStorage에 값이 있다면, greeting page를 보여주지 않을 것.
 */

const getUsername = localStorage.getItem("username");
const currentUrl = window.location.pathname;
const index = currentUrl.indexOf("Self-introduction/");
const slice = currentUrl.slice(0, index + 17);
const greetingUrl = slice + "/greeting.html";
const mainUrl = slice + "/main.html";

if (currentUrl.includes("greeting")) {
  if (getUsername) {
    window.location.href = mainUrl;
  }
} else {
  if (!getUsername) {
    window.location.href = greetingUrl;
  }
}
