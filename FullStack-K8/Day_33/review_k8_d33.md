# Review bài tập về nhà buổi 32 - Lớp FullStack K8

## [Trung Tuyen](https://ptt-fullstack.github.io/JavaScript-F8/DAY-33/sortable.html)

- Các dấu lớn hơn và nhỏ hơn của các thẻ đóng và thẻ mở cần nằm trên cùng một dòng

  ![alt text](./images/TT.png)

- Đặt tên hàm là `render2` không mô tả rõ chức năng của nó. Tên hàm nên diễn đạt mục đích hoặc chức năng của nó để người đọc dễ hiểu và bảo trì code dễ dàng hơn.

- Cả hai hàm `render` và `render2` đều có cùng logic cơ bản: duyệt qua các phần tử trong danh sách và cập nhật text cho chúng. Sự khác biệt duy nhất là cách thức chèn (insertBefore) và thay thế (replaceChild) nội dung. Nên tạo một hàm duy nhất với một tham số để chỉ định liệu cần chèn mới hoặc thay thế nội dung. Điều này giúp tránh lặp mã và làm cho code dễ bảo trì hơn.

  Đề xuất sửa:

  ```js
  // Updates the display text of list items
  function updateListItems(replace = false) {
    const subTask = Array.from(
      list.querySelectorAll(".list-item:not(.active)")
    );
    const topic = Array.from(list.querySelectorAll(".list-item.active"));

    topic.forEach(function (task, index) {
      var span = task.firstChild;
      const textNode = document.createTextNode(`Module ${index + 1}:`);
      if (replace) {
        task.replaceChild(textNode, span);
      } else {
        task.insertBefore(textNode, span);
      }
    });

    subTask.forEach(function (task, index) {
      var span = task.firstChild;
      const textNode = document.createTextNode(`Bài ${index + 1}:`);
      if (replace) {
        task.replaceChild(textNode, span);
      } else {
        task.insertBefore(textNode, span);
      }
    });
  }
  ```

- **Điểm mạnh:**

- Thực hiện chức năng kéo thả một cách hiệu quả với việc sử dụng các sự kiện `dragstart`, `dragend`, và `dragover`.

- Xử lý cập nhật hiển thị lại nội dung hiển thị của các phần tử trong danh sách rất tốt.

- Sử dụng `querySelector` và `querySelectorAll`: Giúp truy cập và thao tác với các phần tử `DOM` một cách hiệu quả và rõ ràng.

- Sử dụng `Array.from` và các phương thức mảng: Giúp chuyển đổi `NodeList` thành mảng và sử dụng các phương thức mảng như `forEach` một cách hiệu quả.

- **Điểm yếu:**

- Lặp logic trong hàm `render` và `render2`: Hai hàm này có logic gần như tương tự nhau, gây ra sự lặp code không cần thiết.

- Đặt tên hàm không rõ ràng: Tên hàm `render2` không rõ ràng về mục đích và chức năng của nó.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần chú ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`
