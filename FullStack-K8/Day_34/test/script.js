var dropdownBtnEl = document.querySelector(".dropdown-wrapper");
var dropdownMenuEl = document.querySelector(".dropdown-menu");
var pickerColorBtnEl = document.querySelector(".color-btn");
var editorContentEl = document.querySelector(".editor-content");
var charactersNumberEl = document.querySelector(".count-characters span");
var wordsNumberEl = document.querySelector(".count-words span");

var newEditorBtn = document.querySelector(".dropdown-item.new-btn");
var saveAsTXTBtn = document.querySelector(".dropdown-item.txt-btn");
var saveAsPDFBtn = document.querySelector(".dropdown-item.pdf-btn");
var colorTextBoxEl = document.querySelector(".color-box input");

var fileNameEl = document.querySelector(".fileName-wrapper input");

// Handle Editor Tools

// Ẩn/hiện dropdown menu khi click vào dropdownBtnEl
var handleToggleDropdown = function (e) {
  e.stopPropagation();
  dropdownMenuEl.classList.toggle("show");
};
dropdownBtnEl.addEventListener("click", handleToggleDropdown);

// Ẩn dropdown menu khi click ra bên ngoài
window.addEventListener("click", function () {
  dropdownMenuEl.classList.remove("show");
});
// Gán sự kiện control theo từng button
var controlsBtn = document.querySelectorAll(".editor-tools-right button");
controlsBtn.forEach(function (controlBtn) {
  controlBtn.addEventListener("click", function (e) {
    e.preventDefault();
    editorContentEl.focus();

    var property = controlBtn.dataset.element;
    document.execCommand(property);
  });
});

// Cập nhật số ký tự
var handleUpdateCharactersNumber = function (editorContent = "") {
  // Xóa hết tất cả các khoảng trắng bằng biểu thức chính quy
  editorContent = editorContent.replace(/\s+/g, "");
  charactersNumberEl.innerText = editorContent.length;
};
// Cập nhật số từ
var handleUpdateWordsNumber = function (editorContent = "") {
  if (!editorContent.trim()) {
    wordsNumberEl.innerText = 0;
    return;
  }
  editorContent = editorContent.trim().replace(/\s+/g, " ");
  wordsNumberEl.innerText = editorContent.split(" ").length;
};

// Cập nhật số ký tự và số từ
editorContentEl.addEventListener("input", function (e) {
  var editorContent = this.innerText;
  handleUpdateCharactersNumber(editorContent);
  handleUpdateWordsNumber(editorContent);
});

// Xử lý sự kiện đổi màu chữ
colorTextBoxEl.addEventListener("change", function (e) {
  e.preventDefault();
  var color = colorTextBoxEl.value;
  document.execCommand("foreColor", false, color); // with alpha hex
});

// Xử lý sự kiện paste để chỉ dán văn bản thuần
editorContentEl.addEventListener("paste", function (e) {
  e.preventDefault();
  var text = (e.clipboardData || window.clipboardData).getData("text");
  document.execCommand("insertText", false, text);
});

// New Editor
newEditorBtn.addEventListener("click", function (e) {
  e.preventDefault();
  editorContentEl.innerHTML = "";
  editorContentEl.focus();
});

// Save as TXT
saveAsTXTBtn.addEventListener("click", function () {
  var editorContent = editorContentEl.innerText;
  var fileName = fileNameEl.value;
  var blob = new Blob([editorContent], {
    type: "text/plain;charset=utf-8",
  });

  // URL.createObjectURL tạo một url đại diện cho đối tượng được truyền
  var fileUrl = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.download = fileName;
  link.href = fileUrl;
  link.click();

  // Thu hồi đối tượng URL sau khi sử dụng
  URL.revokeObjectURL(fileUrl);
});

// Config theo thư viện
function addScript(url) {
  var script = document.createElement("script");
  script.type = "application/javascript";
  script.src = url;
  document.head.appendChild(script);
}
addScript(
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
);
// Handle Save File PDF
saveAsPDFBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var editorContent = editorContentEl.innerHTML;
  var fileName = fileNameEl.value;
  var opt = {
    margin: 1,
    filename: `${fileName}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(editorContent).save();
});
