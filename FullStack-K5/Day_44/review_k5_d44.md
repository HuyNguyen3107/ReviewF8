# Review bài tập về nhà buổi 44 - Lớp Fullstack K5

## [Pham Minh Hieu](https://roniejisa.github.io/f8-fullstack-k6/learn-react-f8/ex/day01/dist/)

- **Chức năng đăng nhập**

  - Có thể xây dựng một trang đăng nhập riêng hoặc một nút đăng nhập để khi người dùng muốn đăng nhập có thể bấm vào đó và đăng nhập hoặc cũng có thể yêu cầu người dùng đăng nhập khi người dùng mới truy cập trang web và nếu người dùng từ chối đăng nhập lần đầu và sau đó lại muốn đăng nhập thì yêu cầu người dùng load lại trang để đăng nhập thay vì liên tục sử dụng hàm `prompt` để yêu cầu người dùng đăng nhập điều này này mang đến trải nghiệm không tốt cho người dùng. Không chỉ vậy việc liên tục hiển thị hàm `prompt` yêu cầu người dùng đăng nhập như vậy khi người dùng nhập một `email` không tồn tại, không hợp lệ hoặc chưa nhập `email` thì các thông báo lỗi hiển thị cho người dùng cũng nhanh chóng bị che mất bởi phần yêu cầu đăng nhập.

  - Bài làm chưa `validate` khi người dùng nhập `email` không đúng định dạng.

  - Khi đăng nhập thành công chưa hiển thị lời chào.

- **Chức năng thêm todo**

  - Khi thêm todo thành công bằng phương thức `POST` thì không cần gọi lại todo bằng phương thức `GET` để `render` ra giao diện mà chỉ cần cập nhật state **todolist** để `render` lại là được.

- **Chức năng sửa, cập nhật todo**

  - Bài làm chưa xử lý case nếu người dùng sửa todo thành input trống rồi update thì cần `validate` giá trị sau khi sửa để tránh lỗi logic.

  - Khi sửa todo, nếu người dùng thay đổi tên todo nhưng chưa click cập nhật mà click thoát thì cần reset tên và trạng thái của todo trước khi user sửa.

- **Chức năng xóa todo**

  - Khi xoá todo thành công bằng phương thức `DELETE` thì không cần gọi lại todo bằng phương thức `GET` để `render` ra giao diện mà chỉ cần cập nhật state todolist để `render` lại là được.

- [x] Đánh giá chung: **Bài làm tốt**, cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

## [Le Tung Duong](https://bvn-43-git-main-duong1801s-projects.vercel.app/)

- **Chức năng đăng nhập**

  - Bài làm chưa xử lý chức năng đăng nhập mà đang sử dụng mặc định một email có sẵn trong `database` để lấy `apiKey` khi người mới truy cập vào trang web nếu trong `localStorage` chưa có `apiKey`.

- **Chức năng thêm todo**

  - Bài làm xử lý rất tốt tính năng này.

- **Chức năng sửa, cập nhật todo**

  - Bài làm chưa xử lý tính năng thay đổi trạng thái todo (hoàn thành hay chưa hoàn thành)

- **Chức năng xóa todo**

  - Bài làm xử lý rất tốt tính năng này.

- [x] Đánh giá chung: **Bài làm tốt**, cần hoàn thành các chức năng còn thiếu.
