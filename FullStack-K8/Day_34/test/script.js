var fileBtn = document.querySelector(".file-btn");
var menu = document.querySelector(".menu");
var optionsBtn = document.querySelectorAll(".option-button");
var colorBtn = document.querySelector("#color");
var writingArea = document.querySelector("#content");
var characterCount = document.querySelector(".character");
var wordCount = document.querySelector(".word");
var title = document.querySelector(".input-title");
var newBtn = document.querySelector(".new-btn");
var txtBtn = document.querySelector(".txt-btn");
var pdfBtn = document.querySelector(".pdf-btn");

// Dropdown
fileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("show");
});
document.addEventListener("click", function () {
  menu.classList.remove("show");
});

// Controls
const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};
optionsBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    modifyText(button.id, false, null);
  });
});
colorBtn.addEventListener("input", function () {
  modifyText("foreColor", false, this.value);
});

// New file
newBtn.addEventListener("click", function () {
  writingArea.innerText = "";
  characterCount.innerText = "0";
  wordCount.innerText = "0";
  title.value = `Untitled`;
});

// Save as TXT
txtBtn.addEventListener("click", function () {
  const blob = new Blob([writingArea.innerText], {
    type: txtBtn.getAttribute("data-type"),
  });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = title.value;
  link.href = fileUrl;
  link.click();
});

// Save as PDF
var generatePDF = () => {
  var opt = {
    margin: 0.5,
    filename: `${title.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(writingArea).save();
};
pdfBtn.addEventListener("click", function () {
  generatePDF();
});

// Update character & word count
writingArea.addEventListener("input", function () {
  var total = writingArea.innerText;
  var character = total.split("").filter(function (item) {
    return item.trim() !== "";
  });
  var word = total.split(" ").filter(function (item) {
    return item.trim() !== "";
  });
  characterCount.innerText = `${character.length}`;
  wordCount.innerText = `${word.length}`;
});
