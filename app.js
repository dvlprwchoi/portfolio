// console.log("Hello");

////////////////////////////////////////
// Dark mode
////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function (event) {
  document.documentElement.setAttribute('theme', 'light');
  // console.log(document.documentElement.getAttribute("theme"));
  const themeSwitcher = document.getElementById('switch');

  themeSwitcher.onclick = function () {
    let currentTheme = document.documentElement.getAttribute('theme');
    // console.log(currentTheme);
    let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // console.log(switchToTheme);
    document.documentElement.setAttribute('theme', switchToTheme);
  };
});

//////////////////////////////////////////
// JS Smooth Scroll 1
//////////////////////////////////////////

const links = document.querySelectorAll('.navBarLinks a');

for (const link of links) {
  link.addEventListener('click', _scrollToSection);
}

function _scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

// ////////////////////////////////////////
// // JS Smooth Scroll Method 2
// ////////////////////////////////////////

// function smoothScroll(targetId, duration) {
//   let target = document.querySelector(targetId);
//   let targetPosition = target.getBoundingClientRect().top;
//   let startPosition = window.pageYOffset;
//   let distance = targetPosition - startPosition;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) {
//       startTime = currentTime;
//     }
//     let timeElapsed = currentTime - startTime;
//     let run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) {
//       requestAnimationFrame(animation);
//     }
//   }

//   // function ease(t, b, c, d) {
//   //   t /= d / 2;
//   //   if (t < 1) return (c / 2) * t * t + b;
//   //   t--;
//   //   return (-c / 2) * (t * (t - 2) - 1) + b;
//   // }

//   function ease(t, b, c, d) {
//     t /= d;
//     t--;
//     return c * (t * t * t + 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// const homeLink = document.querySelector('.homeLink');
// const aboutLink = document.querySelector('.aboutLink');
// const projectsLink = document.querySelector('.projectsLink');
// const resumeLink = document.querySelector('.resumeLink');
// const contactLink = document.querySelector('.contactLink');

// homeLink.addEventListener('click', function () {
//   smoothScroll('#home', 500);
// });
// aboutLink.addEventListener('click', function () {
//   smoothScroll('#about', 500);
// });
// projectsLink.addEventListener('click', function () {
//   smoothScroll('#projects', 500);
// });
// resumeLink.addEventListener('click', function () {
//   smoothScroll('#resume', 500);
// });
// contactLink.addEventListener('click', function () {
//   smoothScroll('#contact', 500);
// });
