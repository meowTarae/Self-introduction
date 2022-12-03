const screen = document.getElementById("screen");
const greetSpan = document.querySelector("#greet div");
const spans = document.querySelectorAll(".menu .btn");
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

greetSpan.addEventListener("click", handleScreenIndex);
spans[0].addEventListener("click", handleScreenIndex);
spans[1].addEventListener("click", handleScreenFirst);
spans[2].addEventListener("click", handleScreenSecond);
spans[3].addEventListener("click", handleScreenThird);

/**
    첫번째 화면은, 두번째 화면으로만 이동 가능
    다시 첫번째 화면으로 올 수 없다!!!!

    2번째부터 5번째 화면만 왔다갔다 할 수 있다.
    2: index
    3: screen1
    4: screen2
    5: screen3
 */
