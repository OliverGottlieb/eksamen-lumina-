"use strict";

const mainImage = document.querySelector(".main-img");

const smallImages = document.querySelectorAll(".small");

smallImages.forEach((small) => {
    small.addEventListener("click", () => {
        mainImage.src = small.src;
    });

});