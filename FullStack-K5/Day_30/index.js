var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var offsetX = 0;
var progressBarWidth = progressBar.clientWidth;
//
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    offsetX = e.offsetX;
    progressBarWidth = this.clientWidth;
    var rate = (offsetX * 100) / progressBarWidth;
    audio.currentTime = (offsetX / progressBarWidth) * audio.duration;
    progress.style.width = `${rate}%`;
    positionSpace = offsetX;
    offsetWidth = offsetX;
    initialClientX = e.clientX;
    document.addEventListener("mousemove", handleDrag);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    progressBar.addEventListener("mousemove", playerTime);
  }
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  offsetWidth = positionSpace;
});
var initialClientX = 0;
var offsetWidth = 0; //Khoảng cách ban đầu button so với progressBar
var positionSpace = 0; //Khoảng cách kéo thêm tại vị trí ban đầu tới vị trí mới
//
var handleDrag = function (e) {
  var clientX = e.clientX;
  positionSpace = offsetWidth + (clientX - initialClientX);
  var progressBarWidth = progressBar.clientWidth;
  var rate = (positionSpace * 100) / progressBarWidth;
  // audio.currentTime = (positionSpace / progressBarWidth) * audio.duration;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
};

//Xây dựng trình phát nhạc
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playBtn = document.querySelector(".player .player-action i");
//
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

//Lắng nghe sự kiện khi file mp3 được tải xong và trình duyệt lấy được thông tin
durationEl.innerText = getTime(audio.duration);
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

//Khi người dùng click vào nút play
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.classList.remove("fa-play");
    this.classList.add("fa-pause");
  } else {
    audio.pause();
    this.classList.remove("fa-pause");
    this.classList.add("fa-play");
  }
});
//
var updateTime = function () {
  currentTimeEl.innerText = getTime(audio.currentTime);
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
};
audio.addEventListener("timeupdate", updateTime);
// timeline
var time = document.querySelector(".time");
var playerTime = function (e) {
  time.style.display = "flex";
  time.style.left = `${e.offsetX}px`;
  var perTime = (e.offsetX / progressBarWidth) * 100;
  var timer = (perTime * audio.duration) / 100;
  time.innerText = getTime(timer);
};
progressBar.addEventListener("mousemove", playerTime);
progressBar.addEventListener("mouseout", function () {
  time.style.display = "none";
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
// replay
audio.addEventListener("ended", function () {
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  progress.style.width = `0%`;
  currentTimeEl.innerText = `00:00`;
  currentTime = 0;
});
