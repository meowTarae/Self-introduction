// querySelectorAll은 선택자의 모든 것들을 배열[] 에 담아준다.
const menuSpans = document.querySelectorAll("span");
const contents = document.querySelectorAll(".content");
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;
const forthTop = contents[3].offsetTop;

const handleFirstScreen = () => {
  window.scroll({
    top: firstTop,
    behavior: "smooth",
  });
};
const handleSecondScreen = () => {
  window.scroll({
    top: secondTop,
    behavior: "smooth",
  });
};
const handleThirdScreen = () => {
  window.scroll({
    top: thirdTop,
    behavior: "smooth",
  });
};
const handleForthScreen = () => {
  window.scroll({
    top: forthTop,
    behavior: "smooth",
  });
};

menuSpans[0].addEventListener("click", handleFirstScreen);
menuSpans[1].addEventListener("click", handleSecondScreen);
menuSpans[2].addEventListener("click", handleThirdScreen);
menuSpans[3].addEventListener("click", handleForthScreen);
