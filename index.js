let fadeinElements = document.querySelectorAll("#transition");

window.addEventListener("scroll", () => {
    fadeinElements.forEach(element => {
        if (element.getBoundingClientRect().top < (window.innerHeight - 150)) {
            element.classList.add("transition");
        };
    });
});
