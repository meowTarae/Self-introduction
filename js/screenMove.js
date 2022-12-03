const screen = document.getElementById("screen");
const arrowBtn = document.querySelector("#greet div");
const menuBtn = document.querySelectorAll(".menu .btn");
const indexBtn = document.querySelectorAll("#index span");
const contents = document.querySelectorAll(".page");
const offsetGap = contents[0].offsetTop;
const firstScreenTop = contents[1].offsetTop - offsetGap;
const secondScreenTop = contents[2].offsetTop - offsetGap;
const thirdScreenTop = contents[3].offsetTop - offsetGap;
const forthScreenTop = contents[4].offsetTop - offsetGap;

const handleScreenIndex = () => {
  screen.scroll({
    top: firstScreenTop,
    behavior: "smooth",
  });
};
const handleScreenFirst = () => {
  screen.scroll({
    top: secondScreenTop,
    behavior: "smooth",
  });
};
const handleScreenSecond = () => {
  screen.scroll({
    top: thirdScreenTop,
    behavior: "smooth",
  });
};
const handleScreenThird = () => {
  screen.scroll({
    top: forthScreenTop,
    behavior: "smooth",
  });
};

arrowBtn.addEventListener("click", handleScreenIndex);
menuBtn[0].addEventListener("click", handleScreenIndex);
menuBtn[1].addEventListener("click", handleScreenFirst);
menuBtn[2].addEventListener("click", handleScreenSecond);
menuBtn[3].addEventListener("click", handleScreenThird);
indexBtn[0].addEventListener("click", handleScreenFirst);
indexBtn[1].addEventListener("click", handleScreenSecond);
indexBtn[2].addEventListener("click", handleScreenThird);
