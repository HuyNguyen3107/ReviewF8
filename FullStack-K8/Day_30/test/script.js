var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var offsetX = 0;
var initialClientX = 0;
var lastMoveSpace = 0;
var moveSpace = 0;
var progressBarWidth = progressBar.clientWidth;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
  // console.log("Ok chưa?");
  if (e.which !== 1) {
    return;
  }
  offsetX = e.offsetX;
  isDragging = true;
  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = `${rate}%`;
  lastMoveSpace = offsetX;
  moveSpace = offsetX;
  var newTime = (moveSpace / progressBarWidth) * duration;
  audio.currentTime = newTime;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", handleMouseUp);
});
// console.log(progressSpan.innerText);

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDragging = true;
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", handleMouseUp);
  initialClientX = e.clientX;
  lastMoveSpace = progress.clientWidth;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastMoveSpace = moveSpace;
});

var handleDrag = function (e) {
  var clientX = e.clientX;
  moveSpace = clientX - initialClientX + lastMoveSpace;
  var rate = (moveSpace / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
};

var handleMouseUp = function () {
  document.removeEventListener("mousemove", handleDrag);
  document.removeEventListener("mouseup", handleMouseUp);
  lastMoveSpace = moveSpace;
  var newTime = (moveSpace / progressBarWidth) * duration;
  audio.currentTime = newTime;
  isDragging = false;
};

var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");
// console.log(durationEl);
var duration = 0;
var setDuration = function () {
  duration = audio.duration;
};
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTimeFormat(audio.duration);
});

playActionEl.addEventListener("click", function () {
  // console.log("Ok chưa?");
  // audio.paused: Kiểm tra xem nhạc có đang dừng hay không
  // audio.play(): Phát nhạc
  // audio.pause(): Dừng nhạc
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", function () {
  console.log("Đang phát");
  playActionEl.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  console.log("Đang dừng");
  playActionEl.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  currentTimeEl.innerText = getTimeFormat(currentTime);
  if (isDragging === false) {
    var rate = (currentTime / duration) * 100;
    progress.style.width = `${rate}%`;
  }
});

if (audio) {
  window.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;
    if (key === 32) {
      event.preventDefault();
      audio.paused ? audio.play() : audio.pause();
    } else if (key === 37) {
      audio.currentTime = audio.currentTime - 10;
    } else if (key === 39) {
      event.preventDefault();
      audio.currentTime = audio.currentTime + 10;
    }
  });
}

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  progress.style.width = `0%`;
  currentTimeEl.innerText = getTimeFormat(0);
  playActionEl.classList.replace("fa-pause", "fa-play");
});

var hoverTimeEl = document.createElement("div");
hoverTimeEl.classList.add("hover-time");
progressBar.appendChild(hoverTimeEl);
hoverTimeEl.style.display = "none";

progressBar.addEventListener("mousemove", function (e) {
  hoverTimeEl.style.display = "block";
  var hoverRate = (e.offsetX / progressBarWidth) * duration;
  hoverTimeEl.innerText = getTimeFormat(hoverRate);
  hoverTimeEl.style.left = `${e.offsetX}px`;
  //   console.log(hoverRate);
});

progressBar.addEventListener("mouseleave", function () {
  hoverTimeEl.style.display = "none";
});
