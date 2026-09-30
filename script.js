const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("close");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;


// Open image
images.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentIndex = index;

        lightboxImage.src = image.src;

        lightbox.style.display = "flex";

    });

});


// Next button
nextButton.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;

});


// Previous button
prevButton.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;

});


// Close button
closeButton.addEventListener("click", function() {

    lightbox.style.display = "none";

});

function filterImages(category) {

    images.forEach(function(image) {

        if (category === "all" || image.classList.contains(category)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });

}