# Review bài tập về nhà buổi 1 - Lớp FullStack K8

## [Nguyen Quang Khai](https://github.com/KhaiNQ-K/f8-fullstack-k8)

- [x] Bài 1:

**Bài làm tốt**

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- [x] Bài 2:

**Bài làm tốt**

- Các thẻ tiêu đề trong thẻ li nên sử dụng thẻ `h2` thay vì thẻ `h1` vì chúng chưa đủ ý nghĩa làm một tiêu đề chính và trong một trang chỉ nên có 1 thẻ `h1` để nhấn mạnh tiêu đề chính của trang đó.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm tốt**

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ `<footer>`.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tốt**, đa số đều sử dụng và phân tích HTML tốt. Chỉ cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể <3.

## [Truong Thanh Tung](https://github.com/thanhtung1211/F8-fullstack-K8/tree/main/Day-1)

- [x] Bài 1:

**Bài làm chưa tốt**

- Thẻ `style` nên được đặt ở trong thẻ `head` thay vì thẻ `body`.

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- [x] Bài 2:

**Bài làm tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tạm ổn**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Le Nhung](https://github.com/nhunglt1801/f8-fullstack-k8-exercise/blob/main/day-1/exercise)

- [x] Bài 1:

**Bài làm tốt**

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Vì thẻ `input` ở đây được dùng để nhập email vậy nên `type` của thẻ `input` cần phải là `email` thay vì `type` là `text`.

- [x] Bài 2:

**Bài làm tốt**

- Tiêu đề của các bài viết nên dùng thẻ `h2` thay vì `h3` để tăng thêm độ nhấn mạnh cho tiêu đề của các bài viết.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tốt**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Le Cong Tu Anh](https://github.com/lcatintheclouds/F8_FullStack_Offline_K8/tree/main/baitapvenhabuoi1)

- [x] Bài 1:

**Bài làm tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Không nên để `type` của thẻ `button` là `reset` vì khi `submit` form toàn bộ giá trị trong các trường sẽ bị mất điều này có thể gấy ra trải nghiệm không tốt cho người dùng khi họ đang nhập các trường trong form và chưa nhập xong thì bấm nhầm `submit` thì toàn bộ dữ liệu trong các trường trước đó được nhập sẽ biến mất.

- [x] Bài 2:

**Bài làm chưa tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Trong thẻ `ul` thì chỉ có thẻ `li` là con trực tiếp vậy nên tất các thẻ `h2` và thẻ `p` trong bài làm cần được đặt vào trong thẻ `li` tương ứng.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` và giá trị `alt` phải hợp lý hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- Lưu ý cách format code.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm tạm ổn**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn.

## [Vu Thi Hoai Thu](https://github.com/hoaithu222/f8_offline_k8/blob/main/Ngay1)

- [x] Bài 1:

**Bài làm chưa tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Ở trường hợp này, **Get the invite** chưa đủ ý nghĩa làm một tiêu đề chính, dựa theo tiêu đề, và chỉ có một input nhập email, đây có thể là một form đăng ký thông báo thường có ở footer. Nên sử dụng `<h2>` thay vì `<h1>`.

- Các thể `input` và `button` đều thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Thẻ input nên có thuộc tính `name` để khi `submit` `form` có thể lấy được giá trị đã nhập.

- Thẻ `br` chỉ được sử dụng để ngắt dòng văn bản không được sử dụng để tạo khoảng cách giữa các thẻ `html`.

- Thẻ `button` không có `type = "request"`.

- [x] Bài 2:

**Bài làm chưa tốt**

- Không nên set cả `width` và `height` cho ảnh, nên chỉ set một trong hai thuộc tính đó. Vì khi sử dụng cả 2 thuộc tính, nếu kích thước của ảnh thay đổi, thì sẽ phải thay đổi cả 2 thuộc tính `width` và `height`, điều này sẽ làm cho code không tối ưu. Hoặc sẽ làm cho tỷ lệ ảnh bị méo.

- Thẻ img ở trong từng item được thể hiện là một hình ảnh tượng trưng và mô tả cho bài viết, nên có giá trị `alt` và giá trị `alt` phải hợp lý hợp lý, có thể sử dụng tiêu đề của `h2` để là giá trị.

- Các thẻ tiêu đề trong thẻ li nên sử dụng thẻ `h2` thay vì thẻ `h1` vì chúng chưa đủ ý nghĩa làm một tiêu đề chính và trong một trang chỉ nên có 1 thẻ `h1` để nhấn mạnh tiêu đề chính của trang đó.

- [x] Bài 3:

**Bài làm chưa tốt**

- Tiêu đề: **Vòng xoay cao tốc 34.500 tỷ sụt lún quá mức , cần 300 ngày khắc phục** được thể hiện là một tiêu đề lớn nhất, đáng chú ý nhất, nên sử dụng thẻ `<h1>` ở đây.

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện.

- Có thể sử dụng các thẻ như `<span>`, `<div>`, ... Các thẻ non-semantics để thể hiện **placeholder**.

- Hoặc chữ **HEADER** có thể sử dụng thẻ `<header>`, **SIDEBAR** có thể sử dụng thẻ `<aside>` và **FOOTER** có thể sử dụng thẻ **<footer>**.

- [x] Đánh giá chung bài tập về nhà: **Bài làm chưa tốt**, cần chú ý thêm một chút về ý nghĩa trong trường hợp cụ thể để phân tích tốt hơn, thẻ `title` trong mỗi bài cần được chỉnh sửa sao cho phù hợp với ý nghĩa của trang để tốt hơn cho `SEO`, đường dẫn ở các thẻ `a` ở trang danh sách bài làm đang là đường dẫn khi chạy trên LiveServer không phải đường dẫn khi đẩy lên github page, nên sử dụng các đường dẫn tương đối trong trường hợp này.
