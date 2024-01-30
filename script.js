document.body.style.cursor = 'url("custom-cursor.png"), auto';

document.addEventListener("mousemove", function (event) {
    var mouseTrail = document.getElementById("mouse-trail");
    mouseTrail.style.left = event.clientX + "px";
    mouseTrail.style.top = event.clientY + "px";
});

document.addEventListener("scroll", function () {
    var fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
        }
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
