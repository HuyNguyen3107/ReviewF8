# Review bài tập về nhà buổi 43 - Lớp Fullstack K5

## [Pham Minh Hieu](https://roniejisa.github.io/f8-fullstack-k6/learn-js/ex/day41/dist/)

- Khi người dùng `click` vào phần **Header** chưa chuyển hướng về trang chủ.

- Xử lý phần render chưa tốt vì hiện tại khi chuyển trang thì đều re-render tất cả trang thay vì re-render phần bị thay đổi.

- Do bài làm đang `deploy` lên github page nên khi khi sửa url đúng theo các case hoặc reload lại trang đều ra trang 404 mặc định của github.

- Việc thực hiện `back` về trang sản phẩm khi đang ở trang chi tiết sản phẩm đang không thực hiện đúng yêu cầu. Bài làm yêu cầu sử dụng một hàm có tên `navigate` (tự định nghĩa có thư viện `navigo` hỗ trợ) thay vì sử dụng thẻ `a` có giá trị của thuộc tính `href` là đường dẫn quay về trang sản phẩm.

- [x] Đánh giá chung: Bài làm tạm ổn, cần chỉn chu hơn về giao diện, self check khi deploy và thực hiện đúng yêu cầu đề bài.

## [Ngo Hoang Kim](https://vite-js-theta.vercel.app/)

- Xử lý phần render chưa tốt vì hiện tại khi chuyển trang thì đều re-render tất cả trang thay vì re-render phần bị thay đổi.

- Chưa `rewrite url` khi `deploy` lên `vercel` nên khi sửa url đúng theo các case hoặc reload lại trang là đều ra trang 404 mặc định của `vercel`.

- Trang Error cũng là 1 trang nên để vào thư mục Page sẽ hợp lý hơn.

- Nên tạo một thư mục có tên **Assets** và đặt các file `css` và các file ảnh vào trong đó.

- Việc thực hiện `back` về trang sản phẩm khi đang ở trang chi tiết sản phẩm đang không thực hiện đúng yêu cầu. Bài làm yêu cầu sử dụng một hàm có tên `navigate` (tự định nghĩa có thư viện `navigo` hỗ trợ) thay vì sử dụng thẻ `a` có giá trị của thuộc tính `href` là đường dẫn quay về trang sản phẩm.

- [x] Đánh giá chung: Bài làm tạm ổn, cần chỉn chu hơn về giao diện, cách xây dựng cấu trúc dự án, self check khi deploy và thực hiện đúng yêu cầu đề bài.
