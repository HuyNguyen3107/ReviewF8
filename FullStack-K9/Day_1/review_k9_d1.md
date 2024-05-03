# Review bài tập về nhà buổi 1 - Lớp FullStack K9

## [Do Anh Tu](https://github.com/dirtycoin205/f8-fullstack-K9/blob/main/Day%20-1/index.html)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm chưa có icon bức thư giống như bài mẫu. (Có thể tìm hiểu về thẻ `img` hoặc thư viện Font Awesome để tạo ra được icon bức thư)

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- Hai chữ `Enter Email` nên được đặt làm giá trị của thuộc tính `placeholder` chứ không phải thuộc tính `value` vì giá trị của thuộc tính `value` ở thẻ `input` có `type="email"` này chính là email mà người dùng cần nhập vào còn `placeholder` có tác dụng là cung cấp thêm thông tin cho người dùng, giúp họ biết cần nhập dữ liệu gì hoặc bất cứ thông báo nào.

- Thẻ `br` **chỉ được sử dụng để ngắt dòng văn bản** không được sử dụng để tạo khoảng cách giữa các thẻ `html`.

- [x] Bài 2:

**Bài làm chưa tốt**

- Bài làm chưa có các icon giống như bài mẫu. (Có thể tìm hiểu về thẻ `img` hoặc thư viện Font Awesome để tạo ra được các icon).

- Giao diện của bài mẫu đang được thể hiện dưới dạng danh sách trong trường hợp này nên sử dụng các thẻ `ul li` để tạo giao diện thay vì sử dụng các thẻ `div`.

- Thẻ `p` chỉ được dùng để thể hiện một đoạn văn bản vì vậy các tiêu đề trong từng `item` nên sử dụng thẻ `h2` thay vì thẻ `p`.

- Thẻ `li` chỉ xuất hiện khi nó được đặt trong thẻ `ul` và không được sử dụng thẻ `li` để tạo dấu chấm tròn màu đen ở đầu mỗi item.

- Giao diện chưa giống với bản mẫu.

- [x] Bài 3:

**Bài làm chưa tốt**

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ `<footer>`.

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Thẻ `li` chỉ xuất hiện khi nó nằm trong thẻ `ul`.

- Các thẻ `heading` cần phải xuất hiện lần lượt, không được dùng thẻ `h5` khi bài làm đang có `h2, h3` và chưa có `h4`

- Nếu giá trị của thuộc tính `href` trong thẻ `a` không phải là một đường dẫn thì có thể đặt giá trị `#` để tránh việc click vào bị load lại trang.

- [x] Đánh giá chung: **Bài làm chưa tốt**, cần chú ý hơn đến `semantic`, chỉn chu và dành nhiều thời gian hơn cho bài tập về nhà, thẻ `title` trong mỗi bài cần được chỉnh sửa sao cho phù hợp với ý nghĩa của trang để tốt hơn cho `SEO`.

## [Phan Van Hiep](https://phanhiep02.github.io/F8O-K9/Day-1/bai-1/)

- [x] Bài 1:

**Bài làm chưa tốt**

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang do vậy không sử dụng thẻ `h2` để bọc thẻ `button`.

- [x] Bài 2:

**Bài làm rất tốt**

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ `<footer>`.

- Nếu giá trị của thuộc tính `href` trong thẻ `a` không phải là một đường dẫn thì có thể đặt giá trị `#` để tránh việc click vào bị load lại trang.

- [x] Đánh giá chung: **Bài làm chưa tốt lắm**, cần chú ý hơn đến `semantic`, chỉn chu và dành nhiều thời gian hơn cho bài tập về nhà, thẻ `title` trong mỗi bài cần được chỉnh sửa sao cho phù hợp với ý nghĩa của trang để tốt hơn cho `SEO`.
