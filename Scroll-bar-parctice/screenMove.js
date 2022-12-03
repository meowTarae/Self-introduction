// querySelectorAll은 선택자의 모든 것들을 배열[] 에 담아준다.
const spans = document.querySelectorAll("span");
const contents = document.querySelectorAll(".content");
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;
const forthTop = contents[3].offsetTop;

const handleFirstScreen = (event) => {
  window.scroll({
    top: firstTop,
    behavior: "smooth",
  });
};
const handleSecondScreen = (event) => {
  window.scroll({
    top: secondTop,
    behavior: "smooth",
  });
};
const handleThirdScreen = (event) => {
  window.scroll({
    top: thirdTop,
    behavior: "smooth",
  });
};
const handleForthScreen = (event) => {
  window.scroll({
    top: forthTop,
    behavior: "smooth",
  });
};

spans[0].addEventListener("click", handleFirstScreen);
spans[1].addEventListener("click", handleSecondScreen);
spans[2].addEventListener("click", handleThirdScreen);
spans[3].addEventListener("click", handleForthScreen);
