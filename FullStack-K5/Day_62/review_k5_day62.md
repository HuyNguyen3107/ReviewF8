# Review bài tập về nhà buổi 62 - Lớp FullStack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-52/bai-tap-52.sql)

- Bài làm hiện tại chỉ cung cấp các câu lệnh `INSERT`(thêm dữ liệu vào các bảng **courses** và **teacher**), UPDATE(sửa giá của các khóa học) và SELECT(hiển thị danh sách giảng viên, danh sách khóa học). Chưa có các câu lệnh `CREATE DATABASE`(tạo database), `CREATE TABLE`(tạo bảng), `ALTER TABLE`(đổi tên cột, thêm khóa chính, khóa ngoại,..) như đề bài yêu cầu và chưa sửa lại toàn bộ tên, giá từng khóa học thành tên mới, giá mới và bio của từng giảng viên. Dù thao tác tạo bảng bằng `pgAdmin` nhưng khi tạo bảng vẫn có các câu lệnh sinh ra, nên đưa các câu lệnh đó vào bài làm để tiện cho việc review.

- Ở trong bảng **courses** và bảng **teacher**, `id` nên thiết lập tự động tăng để khi `insert` sẽ tự động tăng không cần phải `insert` trường `id` nữa.

## [Luu Ngoc Duong](https://github.com/duongluu9898/k5_duongluu_baitap/blob/main/teachers.sql)

- Trường **price** trong bảng **courses** đang có kiểu dữ liệu là `double` trong khi để bài yêu cầu kiểu dữ liệu là `float`.

- Ở trong bảng **courses** và bảng **teacher**, `id` nên thiết lập tự động tăng để khi `insert` sẽ tự động tăng không cần phải `insert` trường `id` nữa.

- Đề bài yêu cầu tên khóa học, giá khóa học các khóa học và bio từng giảng viên không được giống nhau vậy nên cần thiết lập ràng buộc `unique` cho các trường này trong các bảng **courses** và **teacher**.

- [x] Đánh giá chung: **Bài làm rất tốt**, cần chú ý một số góp ý nhỏ để hoàn thiện hơn.
