var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
var carouselDot = document.querySelector(".carousel .carousel-dot");

var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * carouselInner.children.length;
var position = 0;
var currentIndex = 0;

function goToNextSlide() {
  if (Math.abs(position) + carouselWidth < totalWidth) {
    position -= carouselWidth;
    currentIndex++;
    updateCarousel();
  }
}

function goToPrevSlide() {
  if (Math.abs(position) > 0) {
    position += carouselWidth;
    currentIndex--;
    updateCarousel();
  }
}

function updateCarousel() {
  carouselInner.style.transition = "transform 0.4s ease";
  carouselInner.style.transform = `translateX(${position}px)`;
  updateDots();
}

function createDots() {
  carouselDot.innerHTML = "";
  const slides = Array.from(carouselInner.children);
  slides.forEach(function (slide, index) {
    carouselDot.innerHTML += `<span class="dot" data-index="${index}"></span>`;
  });
  updateDots();
}

function updateDots() {
  var dots = document.querySelectorAll(".carousel-dot .dot");
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  dots[currentIndex].classList.add("active");
}

carouselDot.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    var index = parseInt(e.target.getAttribute("data-index"));
    currentIndex = index;
    position = -carouselWidth * currentIndex;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", function (e) {
  goToNextSlide();
});

prevBtn.addEventListener("click", function (e) {
  goToPrevSlide();
});

// Drag Functionality
var isDragging = false;
var startPos = 0;
var currentPos = 0;

carouselInner.addEventListener("mousedown", startDrag);
carouselInner.addEventListener("mousemove", drag);
carouselInner.addEventListener("mouseup", endDrag);
carouselInner.addEventListener("mouseleave", endDrag);

function startDrag(e) {
  e.preventDefault();
  isDragging = true;
  startPos = e.clientX;
  currentPos = startPos;
  carouselInner.style.cursor = "grabbing";
  carouselInner.style.transition = "none"; // Tắt transition khi kéo
}

function drag(e) {
  if (isDragging) {
    currentPos = e.clientX;
    var dragSpace = currentPos - startPos;
    var newPosition = position + dragSpace;
    carouselInner.style.transform = `translateX(${newPosition}px)`;

    if (Math.abs(dragSpace) > carouselWidth * 0.2) {
      if (dragSpace < 0) {
        nextBtn.click();
      } else {
        prevBtn.click();
      }
      endDrag();
    }
  }
}

function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;
  carouselInner.style.cursor = "grab";
  updateCarousel();
}

createDots();
