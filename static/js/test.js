document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".carousel-dot");
  
    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        item.style.display = i === index ? "block" : "none";
      });
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });
  
    // Show the first slide initially
    showSlide(0);
  });
  