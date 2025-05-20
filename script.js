// Jetzt Anfragen pop-up fenster
document.querySelector('.btn-navbar').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
});

// Schließen beim Klicken außerhalb
window.addEventListener('click', function (e) {
  const popup = document.getElementById('popup');
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Lightbox-Funktionalität
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".img-projekte");
  const lightboxOverlay = document.createElement("div");
  const lightboxImage = document.createElement("img");
  const closeButton = document.createElement("span");

  // Lightbox-Overlay erstellen
  lightboxOverlay.classList.add("lightbox-overlay");
  lightboxImage.classList.add("lightbox-image");
  closeButton.classList.add("lightbox-close");
  closeButton.innerHTML = "&times;";

  lightboxOverlay.appendChild(lightboxImage);
  lightboxOverlay.appendChild(closeButton);
  document.body.appendChild(lightboxOverlay);

  // Bild anklicken
  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.getAttribute("data-src");
      lightboxOverlay.style.display = "flex";
    });
  });

  // Lightbox schließen
  closeButton.addEventListener("click", () => {
    lightboxOverlay.style.display = "none";
  });

  // Schließen bei Klick außerhalb des Bildes
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.style.display = "none";
    }
  });
});