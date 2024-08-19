# Review bài tập về nhà buổi 36 - Lớp FullStack K9

## Đinh Tiến Thành

- Các chương học và các bài học được thể hiện dưới dạng danh sách do vậy nên sử dụng các thẻ `ul, li` thay vì sử dụng thẻ `div`.

- Nội dung của thẻ `title` nên được chỉnh sửa lại sao cho phù hợp với trang web để hỗ trợ quá trình SEO một cách hiệu quả.

Điểm mạnh:

- Sử dụng các phương thức `DOM` để thao tác và cập nhật nội dung một cách rõ ràng và hiệu quả.

- Tư duy tổ chức code tốt: Hàm `updateList` được tách riêng để quản lý việc cập nhật nội dung của các phần tử, giúp code dễ bảo trì.

- Xử lý kéo-thả linh hoạt: Các hàm `handleDragOver` và `handleDragEnd` được triển khai để quản lý sự kiện kéo-thả, giúp người dùng tương tác trực quan với danh sách.

- Sử dụng phương thức sự kiện một cách hợp lý: Đoạn mã đã biết cách gắn và gỡ sự kiện (event listeners) một cách có kiểm soát, tránh tình trạng trùng lặp hoặc rò rỉ bộ nhớ.

- [x] **Đánh giá chung:** Bài làm rất tốt.

## Đoàn Mạnh Long

- Nội dung của thẻ `title` nên được chỉnh sửa lại sao cho phù hợp với trang web để hỗ trợ quá trình SEO một cách hiệu quả.

- Một số logic lặp lại, chẳng hạn như việc cập nhật nội dung của các phần tử trong hàm `updateListItem` và `updateModule`, có thể được tối ưu hóa bằng cách tạo một hàm chung.

function updateElements(selector, prefix) {
var elements = document.querySelectorAll(selector);
elements.forEach(function (el, idx) {
var parts = el.textContent.split(": ");
if (parts.length > 1) {
el.textContent = `${prefix} ${idx + 1}: ${parts[1]}`;
} else {
el.textContent = `${prefix} ${idx + 1}`;
}
});
}

// Update list items
updateElements(".list-item:not(.module-title)", "Bài");

// Update module titles
updateElements(".module-title", "Module");

Điểm mạnh:

- Sử dụng các phương thức `DOM` để thao tác và cập nhật nội dung một cách rõ ràng và hiệu quả.

- Đoạn mã thực hiện được chức năng kéo thả (drag-and-drop) các phần tử trong danh sách và tự động cập nhật lại nội dung sau khi thay đổi vị trí.

- Sự logic và tổ chức tốt: Code được tổ chức thành các hàm rõ ràng như `dragOver`, `dragEnd`, và `updateList`, giúp dễ dàng theo dõi và bảo trì.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.
