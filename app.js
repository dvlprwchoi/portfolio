window.scroll = function () {
    getStickyNavBar ();
}
// console.log("Hello");
const navBar = document.querySelector (".navBar");
console.log(navBar);
const stickyNavBarOffset = navBar.offsetTop;
console.log(stickyNavBarOffset);

const getStickyNavBar = () => {
    if (window.pageYOffset >= stickyNavBarOffset) {
        navBar.classList.add ("sticky");
    } else {
        navBar.classList.remove ("sticky");
    }
}
