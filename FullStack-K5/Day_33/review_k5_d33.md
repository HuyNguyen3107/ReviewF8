# Review bài tập về nhà buổi 32 - Lớp Fullstack K5

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_32/)

- Nội dung của thẻ `title` nên được chỉnh sửa lại sao cho phù hợp với trang web để hỗ trợ quá trình SEO một cách hiệu quả.

- Bài làm rất tốt tính năng chính kéo thả rồi sắp xếp các item của bài.

- [x] Đánh giá chung: **Bài làm rất tốt**.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-32/)

- Các chương học và các bài học được thể hiện dưới dạng danh sách do vậy nên sử dụng các thẻ `ul, li` thay vì sử dụng thẻ `div`.

- Nội dung của thẻ `title` nên được chỉnh sửa lại sao cho phù hợp với trang web để hỗ trợ quá trình SEO một cách hiệu quả.

- Tên của các chương và các bài học nên được đặt một cách hợp lý và có ý nghĩa thay vì đặt là **Nội dung A, Nội dung B,..**

- Khi thực hiện việc kéo các `item` thì khi kéo đến vị trí `item` ngay sau nó rồi sau đó thực hiện việc kéo lại vị trí cũ sẽ không được và nếu không kéo lại vị trí cũ mà tiếp tục kéo đến vị trí của `item` kế tiếp sau đó hoặc kéo xuống sâu hơn thì khi kéo lại lên trên sẽ không kéo vào được vào vị trí hiện tại của hai `item` ngay sau `item` được kéo tính từ vị trí mà `item` đang được kéo bắt đầu được kéo điều tương tự cũng xảy ra khi thực hiện việc kéo lên trên kể từ khi bắt đầu kéo các `item` điều này là do khi lắng nghe sự kiện `dragstart` biến `currentElement` được gán bằng `e.currentTarget.getBoundingClientRect();` và khi lắng nghe sự kiện `dragover` thì khởi tạo một biến `tempElement` và được gán bằng `e.target.getBoundingClientRect();` rồi sau đó thực hiện so sánh `currentElement.top > tempElement.top + tempElement.height / 2` hoặc `currentElement.bottom < tempElement.bottom` để thực hiện `insertBefore` tuy nhiên khi kéo đến các vị trí đặc biệt như đã nêu ở trên thì `currentElement.top` bằng với `tempElement.top` và `currentElement.bottom` bằng với `tempElement.bottom` hay nói cách khác giá trị của các thuộc tính của các `object` `currentElement` và `tempElement` là giống nhau do đó dẫn dên kết quả không mong muốn.

- [x] Đáng giá chung: **Bài làm tốt**, cần chú ý một số lỗi để hoàn thiện hơn.

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-32/)

- Các chương học và các bài học được thể hiện dưới dạng danh sách do vậy nên sử dụng các thẻ `ul, li` thay vì sử dụng thẻ `div`.

- Nội dung của thẻ `title` nên được chỉnh sửa lại sao cho phù hợp với trang web để hỗ trợ quá trình SEO một cách hiệu quả.

- Khi kéo quá nhanh các bài học qua các chương và sau đó nhả chuột một cách đột ngột tại một vị trí bất kì chứ không kéo rồi thả từ từ tại một vị trí lựa chọn thì `background-color` thể hiện các chương có thể sẽ không được hiển thị chính xác, không chỉ vậy các chương và các bài học cũng không được tự động đánh số thứ tự khi sắp xếp lại do sự kiện `drop` chỉ xảy ra khi một lựa chọn có thể kéo được thả vào mục tiêu, thay vì sử dụng sự kiện `drop` thì trong trường hợp này nên sử dụng `dragend` vì sự kiện này sẽ xảy ra khi người dùng kéo xong vùng chọn.

- [x] Đáng giá chung: **Bài làm tốt**, cần chú ý một số lỗi để hoàn thiện hơn.
