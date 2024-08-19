var dropdownButton = document.querySelector(".dropdown-toggle");
var dropdownMenu = document.querySelector(".dropdown-menu");
var pdfEl = document.getElementById("pdf-btn");
var txtEl = document.getElementById("txt-btn");
var boldBtn = document.getElementById("bold-btn");
var content = document.getElementById("content");
console.log(pdfEl, txtEl);
var contentEl = document.getElementById("content");
var charCountEl = document.getElementById("char-count");
var wordCountEl = document.getElementById("word-count");
function updateCounts() {
  var contentVal = contentEl.innerText.trim();
  charCountEl.innerText = `Số ký tự: ${contentVal.length}`;

  var wordsArray = contentVal.split(/\s+/).filter(function (item) {
    return item.trim() !== "";
  });

  var countWords = wordsArray.length;
  wordCountEl.innerText = `Số từ: ${countWords}`;
}

contentEl.addEventListener("input", updateCounts);
contentEl.addEventListener("keydown", function (e) {
  updateCounts();
});

updateCounts();

dropdownButton.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("show");
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});

txtEl.addEventListener("click", function () {
  var content = document.getElementById("content").innerText;
  var filename = document.getElementById("filename-input").value + ".txt";
  var blob = new Blob([content], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

pdfEl.addEventListener("click", function () {
  var element = document.getElementById("content");
  var opt = {
    margin: 1,
    filename: document.getElementById("filename-input").value + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  if (typeof html2pdf !== "undefined") {
    html2pdf().from(element).set(opt).save();
  } else {
    console.error("html2pdf is not defined");
  }
});
// bold

var boldBtn = document.getElementById("bold-btn");
var underlineBtn = document.getElementById("underline-btn");
var italicBtn = document.getElementById("italic-btn");
var content = document.getElementById("content");

boldBtn.addEventListener("click", function () {
  content.classList.toggle("bold");
});

underlineBtn.addEventListener("click", function () {
  content.classList.toggle("underline");
});

italicBtn.addEventListener("click", function () {
  content.classList.toggle("italic");
});
