document.addEventListener("DOMContentLoaded", function () {
  var animatedElement = document.querySelector(".fadeinright");

  function fadeinrightElement() {
    var elementTop = animatedElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      animatedElement.classList.add("fadeinright");
    }
  }
  window.addEventListener("scroll", fadeinrightElement);
  fadeinrightElement();
});

const elements = document.querySelectorAll(".fadeinleft");
const elements1 = document.querySelectorAll(".fadeinright");
const elements2 = document.querySelectorAll(".fadeintop");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

lightbox.option({
  resizeDuration: 200,
  wrapAround: false,
  clickOutsideToClose: true,
});
