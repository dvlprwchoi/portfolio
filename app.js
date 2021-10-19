// console.log("Hello");

// Dark mode
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

// JS smooth scroll
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
