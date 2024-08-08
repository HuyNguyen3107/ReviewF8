var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector(".progress-bar .progress span");
var progressBarWidth = progressBar.clientWidth;
var rate = 0;
var drag = false;
var initalRate = 0;
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    drag = true;
    var offsetX = e.offsetX;
    rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
    clientXSpan = e.clientX;
    offsetLeft = offsetX;
    document.addEventListener("mousemove", handleDrag);
  }

  if (!drag) {
    var currentTime = (audio.duration * rate) / 100;
    currentTimeEl.innerText = getTimeFormat(currentTime);
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    drag = true;
    clientXSpan = e.clientX;
    offsetLeft = e.target.offsetLeft;
    document.addEventListener("mousemove", handleDrag);
  }
});
document.addEventListener("mouseup", function () {
  drag = false;
  document.removeEventListener("mousemove", handleDrag);

  var currentTime = (audio.duration * rate) / 100;
  currentTimeEl.innerText = getTimeFormat(currentTime);

  audio.currentTime = currentTime;
});
var clientXSpan = 0;
var offsetLeft = 0;
function handleDrag(e) {
  if (drag) {
    var spaceMove = e.clientX - clientXSpan;
    rate = ((spaceMove + offsetLeft) / progressBarWidth) * 100;
    if (rate < 0) {
      rate = 0;
    }
    if (rate > 100) {
      rate = 100;
    }
    progress.style.width = `${rate}%`;

    var currentTime = (audio.duration * rate) / 100;
    currentTimeEl.innerText = getTimeFormat(currentTime);
  }
}

//xây dựng player
//audio.paused : true/false  co dang chay khong
//audio.play(): chay
//audio.pause(): dung
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;

function getTimeFormat(seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

audio.addEventListener("canplay", function (e) {
  durationTimeEl.innerText = getTimeFormat(audio.duration);
});
audio.addEventListener("canplay", function (e) {
  currentTimeEl.innerText = getTimeFormat(audio.currentTime);
});

playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", function () {
  playAction.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
  playAction.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("timeupdate", function () {
  if (drag === false) {
    currentTimeEl.innerText = getTimeFormat(audio.currentTime);

    rate = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${rate}%`;
  }
});

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  progress.style.width = 0;
  playAction.classList.replace("fa-pause", "fa-play");
});

var hoverCurrentTime = document.querySelector(".hover-current-time");

progressBar.addEventListener("mousemove", function (e) {
  hoverCurrentTime.style.display = "inline-block";
  hoverCurrentTime.style.left = `${e.offsetX}px`;

  var rate1 = (e.offsetX / progressBarWidth) * 100;
  hoverCurrentTime.innerText = getTimeFormat((audio.duration * rate1) / 100);
});

progressBar.addEventListener("mouseout", function (e) {
  hoverCurrentTime.style.display = "none";
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
