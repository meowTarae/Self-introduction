/**
 * 만약 localStorage에 값이 있다면, greeting page를 보여주지 않을 것.
 */

const username = localStorage.getItem("username");
const currentUrl = window.location.href;
const greetingUrl =
  "file:///C:/Documents/GitHub/Self-introduction/greeting.html";
const mainUrl = "file:///C:/Documents/GitHub/Self-introduction/main.html";

if (currentUrl.includes("greeting")) {
  if (username) {
    window.location.href = mainUrl;
  }
} else {
  if (!username) {
    window.location.href = greetingUrl;
  }
}

// if (
//   currentUrl === "file:///C:/Documents/GitHub/Self-introduction/greeting.html"
// ) {
//   if (username) {
//     window.location.href =
//       "file:///C:/Documents/GitHub/Self-introduction/main.html";
//   }
// } else {
//   if (!username) {
//     window.location.href =
//       "file:///C:/Documents/GitHub/Self-introduction/greeting.html";
//   }
// }
