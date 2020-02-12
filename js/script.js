var menuButton = document.getElementById("viewreg");
var topNav = document.getElementsByClassName("topnav")[0];
var sideNav = document.getElementsByClassName("sidenav")[0];
var content = document.getElementsByClassName("content")[0];
var cued;

window.addEventListener("resize", function() {

    if (!cued) {
        this.setTimeout(updateCss, 500);
        cued = true;
    }

});

window.addEventListener("load", function() {
    updateCss();
});

menuButton.addEventListener('click', function() {
    if (sideNav.style.display === "none" || sideNav.style.display === "") {
        sideNav.style.display = "block";
        sideNav.style.marginTop = topNav.offsetHeight + "px";
    } else {
        sideNav.style.display = "";
        sideNav.style.marginTop = "";
    }
});

function updateCss() {
    let topHeight = document.getElementById("current").offsetHeight;
    menuButton.style.width = topHeight + "px";
    menuButton.style.height = topHeight + "px";
    content.style.marginLeft = (sideNav.offsetWidth - 2) + "px";
    content.style.marginTop = topNav.offsetHeight + "px";
    topNav.style.marginLeft = (sideNav.offsetWidth - 2) + "px";
    topNav.style.width = window.width - sideNav.offsetWidth;
    cued = false;
}