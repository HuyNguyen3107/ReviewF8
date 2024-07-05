var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel .next");
var prevBtn = document.querySelector(".carousel .prev");
var carouselDots = document.querySelector(".carousel-dots");
var carouselItems = carouselInner.querySelectorAll(".item");
var carousel = document.querySelector(".carousel");

var itemWidth = carouselInner.clientWidth;
var totalWidth = carouselInner.children.length * itemWidth;
var position = 0;

carouselItems.forEach((item, index) => {
  var dot = document.createElement("span");
  dot.setAttribute("data-index", index);
  if (index === 0) dot.classList.add("active");
  carouselDots.appendChild(dot);
});

var dots = carouselDots.querySelectorAll("span");

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[Math.abs(position / itemWidth)].classList.add("active");
}

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth >= totalWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.transform = `translateX(${position}px)`;
  updateDots();
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.transform = `translateX(${position}px)`;
  updateDots();
});

dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    var index = parseInt(this.getAttribute("data-index"));
    position = -index * itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    updateDots();
  });
});

var isDragging = false;
var startX = 0;
var currentTranslate = 0;
var prevTranslate = 0;

carousel.addEventListener("mousedown", function (e) {
  e.preventDefault();
  isDragging = true;
  startX = e.clientX;
  prevTranslate = position;
  carouselInner.style.transition = "none";
});

carousel.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  const currentX = e.clientX;
  const deltaX = currentX - startX;
  currentTranslate = prevTranslate + deltaX;
  carouselInner.style.transform = `translateX(${currentTranslate}px)`;
});

carousel.addEventListener("mouseup", function (e) {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.clientX;
  const deltaX = endX - startX;
  carouselInner.style.transition = "";

  if (deltaX < -50 && Math.abs(position) + itemWidth < totalWidth) {
    position -= itemWidth;
  } else if (deltaX > 50 && Math.abs(position) > 0) {
    position += itemWidth;
  }

  carouselInner.style.transform = `translateX(${position}px)`;
  updateDots();
});

carousel.addEventListener("mouseleave", function () {
  if (isDragging) {
    console.log("leave");
    isDragging = false;
    carouselInner.style.transition = "";
    carouselInner.style.transform = `translateX(${position}px)`;
    updateDots();
  }
});

document.addEventListener("mouseup", function () {
  if (isDragging) {
    isDragging = false;
    carouselInner.style.transition = "";
    carouselInner.style.transform = `translateX(${position}px)`;
    updateDots();
  }
});
