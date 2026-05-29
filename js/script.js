"use strict";

const mainImage = document.querySelector(".main-img");

const smallImages = document.querySelectorAll(".small");

smallImages.forEach((small) => {
    small.addEventListener("click", () => {
        mainImage.src = small.src;
    });

});

const heroRead = document.querySelector(".hero-read");
const infoSection=document.querySelector(".info-section1");

heroRead.addEventListener("click", () => {
    infoSection.scrollIntoView({behavior:"smooth"});
    });
