# Review bài tập về nhà buổi 37 - Lớp FullStack K9

## Đinh Tiến Thành

- Khi người dùng click vào `New` để tạo file mới chưa đổi lại tên file thành tên file mặc định.

- Chưa xử lý sự kiện `paste` để chỉ dán văn bản thuần (plain text) vào một trình soạn thảo văn bản (text editor).

  Có thể tham khảo đoạn code sau:

  ```js
  // Xử lý sự kiện paste để chỉ dán văn bản thuần
  contentEl.addEventListener("paste", function (e) {
    e.preventDefault();
    var text = (e.clipboardData || window.clipboardData).getData("text");
    document.execCommand("insertText", false, text);
  });
  ```

Điểm mạnh:

- Các tên biến và hàm được đặt tên một cách rõ ràng, mô tả đúng chức năng của chúng.

- Tìm hiểu và sử dụng tốt `Blob`, `document.execCommand()` và thư viện `html2pdf` để hoàn thành yêu cầu bài tập.

- Kết hợp và sử dụng tốt hàm xử lý mảng, hàm xử lý chuỗi và biểu thức chính quy.

Điểm yếu:

- Chưa kiểm tra kỹ những trường hợp có thể xảy ra.

Đánh giá chung: Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.

## Sơn Phạm

- Xử lý cập nhật số ký tự và số từ chưa chính xác.

  Đề xuất sửa:

  ```js
  function countText() {
    var contentVal = editor.innerText.trim();
    charCount.innerText = `Số ký tự: ${contentVal.length}`;

    var wordsArray = contentVal.split(/\s+/).filter(function (item) {
      return item.trim() !== "";
    });

    var countWords = wordsArray.length;
    wordCount.innerText = `Số từ: ${countWords}`;
  }
  ```

- Chưa xử lý sự kiện `paste` để chỉ dán văn bản thuần (plain text) vào một trình soạn thảo văn bản (text editor).

  Có thể tham khảo đoạn code sau:

  ```js
  // Xử lý sự kiện paste để chỉ dán văn bản thuần
  editor.addEventListener("paste", function (e) {
    e.preventDefault();
    var text = (e.clipboardData || window.clipboardData).getData("text");
    document.execCommand("insertText", false, text);
  });
  ```

- Khi người dùng click vào `New` để tạo file mới chưa đổi lại tên file thành tên file mặc định.

Điểm mạnh:

- Tìm hiểu và sử dụng tốt `Blob`, `document.execCommand()` và thư viện `html2pdf` để hoàn thành yêu cầu bài tập.

Điểm yếu:

- Chưa kiểm tra kỹ những trường hợp có thể xảy ra.

Đánh giá chung: Cần chú ý kiểm tra kỹ demo, chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.

## Nguyễn Xuân Hoàng

- Bài làm chưa thực hiện đếm các ký tự xuống dòng và các ký tự khoảng trắng.

- Chưa xử lý sự kiện `paste` để chỉ dán văn bản thuần (plain text) vào một trình soạn thảo văn bản (text editor).

  Có thể tham khảo đoạn code sau:

  ```js
  // Xử lý sự kiện paste để chỉ dán văn bản thuần
  content.addEventListener("paste", function (e) {
    e.preventDefault();
    var text = (e.clipboardData || window.clipboardData).getData("text");
    document.execCommand("insertText", false, text);
  });
  ```

Đánh giá chung: Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.

## Phan Văn Hiệp

- Xử lý cập nhật số ký tự và số từ chưa chính xác.

  Đề xuất sửa:

  ```js
  function updateCounts() {
    var contentVal = contentEl.innerText.trim();
    charCountEl.innerText = `Số ký tự: ${contentVal.length}`;

    var wordsArray = contentVal.split(/\s+/).filter(function (item) {
      return item.trim() !== "";
    });

    var countWords = wordsArray.length;
    wordCountEl.innerText = `Số từ: ${countWords}`;
  }
  ```

- Chưa xử lý sự kiện `paste` để chỉ dán văn bản thuần (plain text) vào một trình soạn thảo văn bản (text editor).

  Có thể tham khảo đoạn code sau:

  ```js
  // Xử lý sự kiện paste để chỉ dán văn bản thuần
  contentEl.addEventListener("paste", function (e) {
    e.preventDefault();
    var text = (e.clipboardData || window.clipboardData).getData("text");
    document.execCommand("insertText", false, text);
  });
  ```

- Chưa tìm hiểu và sử dụng Blob.

- Khi người dùng click vào `New` để tạo file mới chưa reset lại toàn bộ mọi thứ (tên file, nội dung, số từ, số ký tự).

Đánh giá chung: Bài làm chưa tốt, cần chú ý kiểm tra kỹ demo và yêu cầu bài tập, chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.

## Đô Trung Kiên
