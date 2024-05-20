# Review bài tập về nhà buổi 46 - Lớp Fullstack K5

## [Pham Minh Hieu](https://roniejisa.github.io/f8-fullstack-k6/learn-react-f8/ex/day03/dist/)

- **Chức năng đăng nhập**

  - Khi người dùng không nhập email hoặc nhập không đúng định dạng email thì không cần phải `call api` mà chỉ cần `validate`rồi sau đó thông báo cho người dùng.

  - Khi người dùng đăng nhập thành công chưa có thông báo.

  - Khi reload lại trang chưa thực hiện getProfile như yêu cầu đề bài.

- **Chức năng thêm sản phẩm vào giỏ hàng**

  - Bài làm xử lý rất tốt tính năng này.

- **Chức năng thanh toán**

  - Khi thanh toán thành công chưa xóa dữ liệu trong `localStorage` do vậy khi reload lại trang vẫn hiển thị giỏ hàng mới được thanh toán và khi người dùng tiếp thục thêm sản phẩm vào giỏ hàng thì số lượng còn lại của sản phẩm hiển thị không chính xác.

  - Bài làm chưa xử lý trường hợp nếu quantity nhỏ hơn hoặc bằng 0 hoặc productId không chính xác.

  - Bài làm đang xử lý trường hợp `Unauthorized` (401) chưa đúng với yêu cầu. Bài làm đang xử lý theo cách khi `server` trả về lỗi 401 thì sẽ `call api` đăng nhập với email của người dùng để lấy lại `apiKey` trong khi yêu cầu bài làm là nếu thanh toán `server` trả về 401 thì cần `redirect` về trang đăng nhập và yêu cầu người dùng nhập lại email.

- **Code format**

  - Bài làm sử dụng tốt `context`.

  - Trong `folder` utils có một file có tên `all.js`, trong `file` này viết một hàm để lất `cookie` và việc đặt tên `file` như vậy là không hợp lý.

- [x] Đánh giá chung: **Bài làm tạm ổn**, cần đọc kỹ yêu cầu bài tập, xem kỹ bản demo, chú ý các trường hợp có thể xảy ra và lưu ý đến cách đặt tên `file`.
