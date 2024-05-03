# Review bài tập về nhà buổi 41 - Lớp Fullstack K5

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_40/)

- Chức năng logout:

  - Bài làm đang chỉ thực hiện đăng xuất thông qua việc xóa `token` khỏi `localStorage` và chưa hề sử dụng `api`.

- Chức năng post bài:

  - Thẻ `textarea` nên thêm thuộc tính `resize: none;` để người dùng không thể tùy chỉnh kích thước của trường nhập nội dung của bài viết mới tránh trường hợp vỡ giao diện.

- Chức năng hiển thị ngày post bài:

  - Bài làm chưa hiển thị thời gian đăng bài của các bài viết đã được post.

- Chức năng chọn thời gian post bài:

  - Khi người dùng chọn thời gian rồi sau đó bấm đăng bài cần `validate` dữ liệu trong các trường tiêu đề và nội dung.

  - Khi người dùng chọn thời điểm đăng bài là một khoảng thời gian nào đó trong tương lai thì đối với bài tập này thì không cần thực hiện việc đăng bài. Vì khi người dùng chọn một khoảng thời gian để bài viết được tự động đăng trong tương lai thì chỉ khi đến khoảng thời gian đã chọn bài viết mới được đăng (ở bài tập này không yêu cầu chức năng tự động post bài theo khoảng thời gian chọn trước) tuy nhiên bài làm lại đăng bài viết kể cả khi người dùng chọn mốc thời gian trong tương lai điều này không hợp lý.

  - Khi người dùng chọn một mốc thời gian trong quá khứ để đăng bài và thực hiện việc đăng bài, bài viết vẫn được đăng thành công điều này chưa hợp lý.

- Chức năng duy trì đăng nhập bằng accessToken và refreshToken

  - Bài làm chỉ đang thực hiện `refreshToken` khi lấy thông tin người dùng(reload page) lỗi do `accessToken` hết hạn các trường hợp khác chưa sử dụng `refreshToken`.

- [x] Đánh giá chung: **Bài làm tạm ổn**, cần chỉn chu hơn về giao diện và xử lý một số case còn thiếu để hoàn thiện hơn, một số trường hợp `validate` không thỏa mãn thì không nên gọi `api` để tránh việc gọi `api` quá nhiều.

## [Pham Minh Hieu](https://roniejisa.github.io/f8-fullstack-k6/learn-js/ex/day40/)

- Chức năng post bài:

  - Sau khi người dùng đăng bài viết thì nên reset lại dữ liệu trong các trường tiêu đề và nội dung.

- Chức năng hiển thị thời gian post bài:

  - Khoảng thời gian thể hiện thời điểm bài viết được đăng so với thời gian hiện tại chưa tự động cập nhật.

  - Khi đăng một bài viết mới khoảng thời gian thể hiện thời điểm bài viết được đăng so với thời gian hiện tại sẽ hiển thị là **một giây nữa** điều này không hợp lý mà thay vào đó nên là **một giây trước**.

- [x] Đánh giá chung: **Bài làm rất tốt**, cần chỉn chu hơn về giao diện và chú ý một số lỗi nhỏ để hoàn thiện hơn.
