// gallery.js
const images = document.querySelectorAll(".gallery-img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    overlay.style.display = "flex";
  });
});

function showImage() {
  overlayImg.src = images[currentIndex].src;
}

prevBtn.onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

nextBtn.onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

overlay.onclick = () => {
  overlay.style.display = "none";
};