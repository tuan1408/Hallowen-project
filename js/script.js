let menuBtn = document.querySelector("#menu-btn");
let searchBtn = document.querySelector("#search-btn");

menuBtn.onclick = () => {
  document.querySelector(".header .search-form").classList.remove("active");
  document.querySelector(".header .navbar").classList.toggle("active");
};

searchBtn.onclick = () => {
  document.querySelector(".header .navbar").classList.remove("active");
  document.querySelector(".header .search-form").classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
  document.querySelector(".header .search-form").classList.remove("active");
  document.querySelector(".header .navbar").classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < height + offset) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".products-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
