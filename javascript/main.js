document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (openMenu && closeMenu && mobileMenu) {
    openMenu.addEventListener("click", function () {
      mobileMenu.classList.add("open");
      // Optionally, you can also add a class to the body to prevent scrolling
      document.body.classList.add("no-scroll");
    });
    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
    });
  }
});

function scrollBetweenpages() {
  //
}
// Function to scroll between pages
const HomeSection = document.querySelector(".team-header-1");
const AboutSection = document.querySelector(".reg-container");
const ServiceSection = document.querySelector(".project-header");
const MemberSection = document.querySelector(".team-header-1");
const ContactSection = document.querySelector(".footer");

// funtion to scroll to the home section
document.querySelector(".home").addEventListener("click", function (event) {
  event.preventDefault();
  const HomeSection = document.querySelector(".hero-section");
  if (HomeSection) {
    HomeSection.scrollIntoView({ behavior: "smooth" });
  }
});

// funtion to scroll to the member section
// This function is used to scroll to the member section when the profile link is clicked

document.querySelectorAll(".profile").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const MemberSection = document.querySelector(".team-header-1");
    if (MemberSection) {
      MemberSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// funtion to scroll to the about section
document.querySelector(".about").addEventListener("click", function (event) {
  event.preventDefault();
  const AboutSection = document.querySelector(".reg-container");
  if (AboutSection) {
    AboutSection.scrollIntoView({ behavior: "smooth" });
  }
});
// funtion to scroll to the service section
document.querySelector(".service").addEventListener("click", function (event) {
  event.preventDefault();
  const ServiceSection = document.querySelector(".project-header");
  if (ServiceSection) {
    ServiceSection.scrollIntoView({ behavior: "smooth" });
  }
});
// funtion to scroll to the contact section
document.querySelector(".contact").addEventListener("click", function (event) {
  event.preventDefault();
  const ContactSection = document.querySelector(".footer");
  if (ContactSection) {
    ContactSection.scrollIntoView({ behavior: "smooth" });
  }
});
