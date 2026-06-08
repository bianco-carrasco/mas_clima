// Mostrar WhatsApp flotante después del hero
const hero = document.getElementById("hero");
const whatsapp = document.getElementById("whatsappFloat");

window.addEventListener("scroll", () => {
  const heroBottom = hero.offsetHeight - 120;

  if (window.scrollY > heroBottom) {
    whatsapp.classList.add("visible");
  } else {
    whatsapp.classList.remove("visible");
  }
});


// Carrusel servicios realizados
let currentSlide = 0;

function moveSlide(direction) {
  const track = document.getElementById("carouselTrack");
  const slides = track.querySelectorAll("img");

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}