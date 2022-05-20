//btn sticky
const body = document.querySelector("body");

body.onscroll = () => {
  setTimeout(() => {
    btn.style.top = scrollY + 30 + "px";
  }, 50);
};
//

const btn = document.querySelector(".previous");
btn.addEventListener("click", toProjectHandler);
const link = document.querySelector(".redirect");
link.addEventListener("click", toProjectHandler);

let boolean;
let timeId1;
let timeId2;
let positionY = 0;
const height = 20;
function toProjectHandler(event) {
  event.preventDefault();
  if (event.target.id == "redirectProject") {
    boolean = true;
  } else {
    boolean = false;
  }
  positionY = scrollY;
  scrollToTop();
}

function scrollToTop() {
  if (positionY > 0) {
    scrollTo(0, positionY);
    positionY -= height;
    timeId1 = setTimeout(scrollToTop, 10);
  }
  if (positionY < height) {
    clearTimeout(timeId1);
    scrollTo(0, 0);
    timeId1 = setTimeout(slide, 0);
    timeId2 = setTimeout(displayBack, 0);
  }
}
function slide() {
  const front = document.querySelector(".front");
  const wrap = document.querySelector(".back");

  if (boolean) {
    front.style.cssText =
      "transform:rotateY(180deg);" + "transition: 1s linear 0.5s;";
    wrap.style.cssText =
      "transform: rotateY(0deg);" +
      "transition: 1s linear 0.5s;" +
      "height:auto;" +
      "";
    wrap.classList.add("shadows");
    btn.style.cssText = "transition:2.5s";
    setTimeout(() => {
      btn.style.cssText = "transition:0.5s;opacity:1;";
    }, 1500);
    btn.classList.toggle("space-left");
  } else {
    wrap.style.cssText =
      "transform:rotateY(-180deg);" +
      "transition: linear 0.8s;" +
      "height:auto;";

    front.style.cssText =
      "transform: rotateY(0deg);" + "transition: linear 0.8s;";
    btn.style.cssText = "opacity:0;transition:0.8s";
    btn.classList.toggle("space-left");
    wrap.classList.remove("shadows");
  }
  clearTimeout(timeId1);
}

function displayBack() {
  if (boolean) {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((element) => {
      element.style.cssText = "display:block;";
    });
    window.addEventListener("scroll", scrollHandle);
    setInterval(scrollHandle,500);
  } else {
    window.removeEventListener("scroll", scrollHandle);
    setTimeout(() => {
      const boxes = document.querySelectorAll(".box");

      boxes.forEach((element)=> {
        element.style.cssText = "display:none;";
      });
    }, 1000);
  }
}

function scrollHandle() {
  const arrBox = document.querySelectorAll(".box");
  const windowHeight = window.innerHeight;

  arrBox.forEach((element)=> {
    if (element.getBoundingClientRect().top + 100 < windowHeight) {
      element.style.cssText = "margin-top: 0px;display:block;" + "opacity:1";
    } else if (element.getBoundingClientRect().top > windowHeight + 100) {
      element.style.cssText = "margin-top:200px;" + "opacity:0;display:block;";
    }
  });
  clearTimeout(timeId2);
}
