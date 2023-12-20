const navIcons = document.querySelectorAll(".header-main-bottom i");
const aList = document.querySelectorAll(".header-main-bottom a");

navIcons[0].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.remove("header-main-bottom-right");
  });
});
navIcons[1].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.add("header-main-bottom-right");
  });
});

// main
const mainImg = document.querySelectorAll("main > img");
// 첫번째 이미지에 main-img-active 클래스가 추가되어 있어요!
setInterval(() => {
  for (let i = 0; i < mainImg.length; i++) {
    // 마지막 이미지에서는 클래스 제거, 첫번째 이미지에 클래스 추가

    if (
      i === mainImg.length - 1 &&
      mainImg[i].classList.contains("main-imng-active")
    ) {
      mainImg[i].classList.remove("main-img-active");
      mainImg[0].classList.add("margin-img-active");
      break;
    }

    // 첫번째 이미지에서는 클래스 제거, 두번째 이미지에 클래스 추가
    // 두번째 이미지에서는 클래스 제거, 세번째 이미지에 클래스 추가

    if (mainImg[i].classList.contains("main-img-active")) {
      mainImg[i].classList.remove("main-img-active");
      mainImg[i + 1].classList.add("main-img-active");
      break;
    }
  }
});
