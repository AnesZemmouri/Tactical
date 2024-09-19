var carousel = document.querySelector("#hero-carousel");
var carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 3000, // Change slide every 3 seconds
  ride: "carousel",
});

function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
