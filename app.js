// console.log("Hello");

document.addEventListener("DOMContentLoaded", function (event) {
    document.documentElement.setAttribute("theme", "light");    
    // console.log(document.documentElement.getAttribute("theme"));
    const themeSwitcher = document.getElementById("switch");
    
    themeSwitcher.onclick = function () {
        let currentTheme = document.documentElement.getAttribute("theme");
        // console.log(currentTheme);
        let switchToTheme = currentTheme === "dark" ? "light" : "dark"
        // console.log(switchToTheme);
        document.documentElement.setAttribute("theme", switchToTheme);
    }
});
