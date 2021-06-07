const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("is-active");
    //Animate Links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .1s ease-in forwards`;
      }
    });
    //burger animation
    burger.classList.toggle("is-active");
  });
};
navSlide();
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".myTestSwiper", {
  spaceBetween: 0,
  centeredSlides: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let openClose = document.querySelector(".time");

function startTime() {
  let now = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let today = weekday[now.getDay()];

  let dayOfWeek = now.getDay();

  let hour = now.getHours();

  let minutes = now.getMinutes();

  let seconds = now.getSeconds();

  let suffix = hour >= 12 ? "pm" : "am";

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if ((dayOfWeek === 1, 2, 3, 4, 5, 6 && hour >= 7 && hour <= 20)) {
    hour = ((hour + 11) % 12) + 1;

    openClose.classList.add(".open");

    showMessage(`We're open today til' 8:00pm`, "open");
  } else if ((dayOfWeek === 1, 2, 3, 4, 5, 6 && hour <= 7 && hour <= 25)) {
    showMessage(`We open at 7am. Book ahead!`, "open");
  } else if ((dayOfWeek === 1, 2, 3, 4, 5, 6 && hour >= 19 && hour <= 25)) {
    showMessage(`We closed at 8pm. Book ahead!`, "closed");
  } else if (dayOfWeek === 0) {
    showMessage(`We're closed today. Book ahead!`, "closed");
  }

  setTimeout(() => {
    startTime();
  }, 500);
  function showMessage(message, className) {
    openClose.innerHTML = message;
    openClose.classList.add(className);
  }
}
window.addEventListener("load", startTime());
/* fixed button Script */
// Set a variable for our button element.
const scrollToTopButton = document.getElementById("js-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
