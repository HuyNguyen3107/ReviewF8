# Review bài tập về nhà buổi 34 - Lớp FullStack K8

## [Nguyen Xuan Phong](https://xuanphong03.github.io/Fullstack-F8-Javascript/day-34/homework/index.html)

- Xử lý cập nhật số từ chưa chính xác khi người dùng nhập một ký tự trở lên rồi sau đó nhập liên tiếp hoặc rất nhiều dấu cách thì số từ sẽ tăng lên cho dù người dùng không hề nhập tiếp những ký tự khác hoặc khi người dùng nhập một từ rồi sau đó xuống dòng để nhập từ tiếp theo thì số từ hiển thị trong bài làm vẫn giữ nguyên mà không tăng thêm, điều này xảy ra là do bài làm đang cập nhật số từ bằng cách cập nhật lại `wordsNumberEl.innerText = editorContent.split(" ").length;`, tuy nhiên nêu người dùng nhập vào nhiều khoảng trắng thì khi sử dụng hàm `split` để chia một chuỗi (editorContent) thành một mảng các chuỗi con, dựa trên một ký tự phân tách (delimiter) ở đây ký tự phân tách chính là khoảng trắng (" "), nếu như chuỗi đó có nhiều khoảng trắng thì khi chuyển thành mảng sẽ có những phần từ trong mảng đó là một khoảng trắng vậy nên số từ cũng sẽ tăng lên hoặc khi người dùng nhập là `abc` rồi sau đó xuống dòng nhập `xyz` thì khi sử dụng hàm `split` để chuyển thành mảng thì mảng đó sẽ có duy nhất một phần tử có giá trị là `abc\nxyz` do `\n` đại diện cho ký tự xuống dòng và nếu sử dụng `split(" ")` để chia chuỗi này thành mảng, nó chỉ tách chuỗi dựa trên khoảng trắng (dấu cách), không dựa trên ký tự xuống dòng do đó mảng chỉ có một phần tử và khi cập nhật số từ sẽ không tăng lên. Để giải quyết vấn đề này ta có thể sử dụng biểu thức chính quy để thay thế các khoảng trắng liên tiếp và ký tự dòng mới bằng một khoảng trắng và sử dụng hàm `trim()` để loại bỏ khoảng trắng thừa ở đầu và cuối.

  Đề xuất sửa:

  ```js
  var handleUpdateWordsNumber = function (editorContent = "") {
    if (!editorContent.trim()) {
      wordsNumberEl.innerText = 0;
      return;
    }
    editorContent = editorContent.trim().replace(/\s+/g, " ");
    wordsNumberEl.innerText = editorContent.split(" ").length;
  };
  ```

- Khi người dùng click vào `New` để tạo file mới chưa đổi lại tên file thành tên file mặc định.

- **Điểm mạnh:**

- Trình bày rõ ràng: Code được chia thành nhiều phần riêng biệt, dễ dàng theo dõi và hiểu các khối chức năng.

- Sử dụng comment: Các comment được sử dụng để giải thích chức năng của từng đoạn code, giúp người đọc dễ hiểu mục đích của từng đoạn mã.

- Các tên biến và hàm được đặt tên một cách mô tả, rõ ràng, giúp người đọc dễ hiểu mục đích và chức năng của chúng.

- Tìm hiểu và sử dụng tốt `Blob`, `document.execCommand()` và thư viện `html2pdf` để hoàn thành yêu cầu bài tập.

- **Điểm yếu:**

- Chưa kiểm tra kỹ những trường hợp có thể xảy ra.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`
