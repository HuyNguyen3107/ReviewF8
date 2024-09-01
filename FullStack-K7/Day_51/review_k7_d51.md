# Review bài tập về nhà buổi 50 - Lớp Fullstack K7

## Nguyễn Đức Minh

Bài làm chưa có Loading

Chức năng đăng nhập

- Tìm hiểu thêm về setting của Auth0 để có thể thay đổi được ảnh và text heading ở popup hiện lên khi đăng nhập.

- Khi người dùng bấm vào nút Logout nên thêm trạng thái disabled cho nút này để tránh việc khiến người dùng khi click lần đầu tiên tưởng chưa được sẽ click liên tục trong khoảng thời gian đợi đó.

Chức năng gửi email

- Bài làm chưa xử lý một số cách thức đăng nhập không trả về không trả về một số thông tin như email, locale... Ví dụ đăng nhập bằng facebook, github thì cần check để hiển thị hay không? Hiện tại khi đăng nhập bằng facebook hoặc github thì sẽ bị trống email trên UI.

- Bài làm chưa kiểm tra trường hợp người dùng để trống trường message.

- Không sửa được thông tin tại các trường email và name do bài làm đang set thuộc tính value cho các thẻ input, nếu muốn sử dụng thuộc tính value thì cần phải truyền vào giá trị là một state và cần phải có một hàm dùng để setState truyền vào thuộc tính onChange để set lại giá trị của state mỗi khi người dùng nhập dữ liệu.

- Hiện bài làm đang không thể gửi được tin nhắn cần hỗ trợ đến email mà người dùng nhập vào trong trường nhập email, điều này có thể do việc cấu hình Email Templates trên trang EmailJS chưa đúng, giá trị của ô nhập liệu dưới đây cần phải là giá trị của thuộc tính name của thẻ input dùng để nhập email và được đặt trong {{ }}, ví dụ:

Đánh giá chung: Bài làm chưa tốt, cần dành nhiều thời gian hơn cho bài tập, chú ý kiểm tra kỹ demo và chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.
