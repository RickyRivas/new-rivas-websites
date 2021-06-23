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
/* Body */
const body = document.querySelector("body");
const stripeBg = document.querySelector("#gradient-canvas");
// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode-button");
const darkModeToggleFooter = document.querySelector("footer .dark-mode-button");

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  stripeBg.classList.add("stripe-dark-mode");
  localStorage.setItem("darkMode", "enabled");
};

// Disable Dark Mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  stripeBg.classList.remove("stripe-dark-mode");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "enabled") {
  enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Footer button, optional. This is for if you have a second dark mode toggle button
//in the footer, just make sure the button is inside the footer tag, and it will be
//linked to this function.

darkModeToggleFooter.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
All;
