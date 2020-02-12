var menuButton = document.getElementById("viewreg");
var topNav = document.getElementsByClassName("topnav")[0];
var sideNav = document.getElementsByClassName("sidenav")[0];
var content = document.getElementsByClassName("content")[0];
var cued = false;

//Button query
var btQuery = window.matchMedia("screen and (max-aspect-ratio: 1/1)");

window.addEventListener("resize", function() {
    if (!cued) {
        setTimeout(fixCss, 500);
        cued = true;
    }
});

window.addEventListener("load", function() {
    fixCss();
});

menuButton.addEventListener('click', function() {
    if (sideNav.style.display == "none" || sideNav.style.display == "") {
        sideNav.style.display = "block";
    } else {
        sideNav.style.display = "none";
    }
});

function fixCss() {
    //Menu button
    let current = document.getElementById("current");
    menuButton.style.width = current.offsetHeight + "px";
    menuButton.style.height = current.offsetHeight + "px";

    //Fix sideNav for mobile
    if (btQuery.matches) {
        sideNav.style.marginTop = topNav.offsetHeight + "px";
        sideNav.style.display = "none";
        content.style.marginLeft = "";
        topNav.style.marginLeft = "";
        content.style.width = "100%";
    } else {
        sideNav.style.marginTop = "";
        sideNav.style.display = "block";
        content.style.marginLeft = sideNav.offsetWidth + "px";
        topNav.style.marginLeft = sideNav.offsetWidth + "px";
        content.style.width = "calc(100% - " + (sideNav.offsetWidth + "px)");
    }
    
    content.style.marginTop = topNav.offsetHeight + "px";

    cued = false;
}