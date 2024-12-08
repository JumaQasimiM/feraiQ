const swiper = new Swiper(".slider", {
  // Optional parameters

  loop: true,
  grabCursor: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // REsposice
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// text writer style

const texts = ["DEVELOPER", "DESIGNER"];
let speed = 100;
const textElement = document.querySelector(".type-writer-text");

let text = 0;
let charterindex = 0;
let textindex = 0;

function typeWriter() {
  if (charterindex < texts[textindex].length) {
    textElement.innerHTML += texts[textindex].charAt(charterindex);
    charterindex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textindex = (textindex + 1) % texts.length;
    charterindex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload=typeWriter()