document.addEventListener("DOMContentLoaded", function () {
    var slides = document.getElementsByClassName("slide");
    var currentSlide = 0;

    function showSlide(n) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n].style.display = "block";
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);

    setInterval(nextSlide, 3000);
});




