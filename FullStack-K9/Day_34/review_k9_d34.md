# Review bài tập về nhà buổi 34 - Lớp FullStack K9

## Phạm Sơn

## Đinh Tiến Thành

## Phan Văn Hiệp

- Bài làm chưa xử lý trường hợp số lượng sản phẩm mà người dùng nhập vào là một số nhỏ hơn hoặc bằng `0`, số `e`, một số kèm với dấu `+` hoặc dấu `-` ở phía sau hoặc người dùng không nhập bất kỳ một ký tự nào tại trường số lượng sản phẩm thêm vào giỏ hàng.

- Khi chưa có bất kỳ sản phẩm nào trong giỏ hàng thì nên hiển thị `Giỏ hàng không có sản phẩm` thay vì hiển thị giỏ hàng.

- Hiện bài làm đang xử lý case thêm sản phẩm vào giỏ hàng chưa đúng với yêu cầu bài tập, theo yêu cầu bài tập thì khi người dùng bấm thêm sản phẩm vào giỏ hàng thì nếu như sản phẩm đó chưa có trong giỏ hàng thì thêm sản phẩm đó vào giỏ hàng còn nếu sản phẩm đó đã có trong giỏ hàng rồi thì cần cập nhật lại số lượng sản phẩm bằng cách cộng số lượng sản phẩm của sản phẩm tương ứng khi thêm đã có trong giỏ hàng với với số lượng sản phẩm thêm vào.

- Khi người dùng xóa một sản phẩm trong giỏ hàng hay xóa toàn bộ giỏ hàng chưa thực hiện việc `confirm`.

- Chưa xử chức năng cập nhật số lượng trong sản phẩm trong giỏ hàng.

- Chưa sử dụng được `localStorage` và `JSON` để lưu trữ dữ liệu vào trình duyệt.

- [x] **Đánh giá chung:** Bài làm chưa tốt, cần dành nhiều thời gian hơn cho bài tập và chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Đào Văn Sơn

- Bài làm chưa xử lý trường hợp số lượng sản phẩm mà người dùng nhập vào khi thêm sản phẩm vào giỏ hàng là một số nhỏ hơn hoặc bằng `0`, số `e`, một số kèm với dấu `+` hoặc dấu `-` ở phía sau hoặc người dùng không nhập bất kỳ một ký tự nào tại trường số lượng sản phẩm thêm vào giỏ hàng. Trường hợp tương tự cũng xảy ra khi người dùng chỉnh sửa số lượng sản phẩm trong giỏ hàng.

- Khi người dùng xóa một sản phẩm trong giỏ hàng hay xóa toàn bộ giỏ hàng chưa thực hiện việc `confirm`.

- Chưa có thông báo khi cập nhật giỏ hàng thành công.

- Chưa sử dụng được `localStorage` và `JSON` để lưu trữ dữ liệu vào trình duyệt.

- [x] **Đánh giá chung:** Bài làm khá tốt, tuy nhiên cần kiểm tra kỹ các trường hợp có thể xảy ra và các chức năng của bản demo trước khi code.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Đoàn Mạnh Long

- Bài làm chưa xử lý trường hợp số lượng sản phẩm mà người dùng nhập vào khi thêm sản phẩm vào giỏ hàng là số `e`, một số kèm với dấu `+` hoặc dấu `-` ở phía sau hoặc người dùng không nhập bất kỳ một ký tự nào tại trường số lượng sản phẩm thêm vào giỏ hàng. Trường hợp tương tự cũng xảy ra khi người dùng chỉnh sửa số lượng sản phẩm trong giỏ hàng tuy nhiên có thêm một trường hợp chưa xử lý là khi người dùng chỉnh sửa lại số lượng sản phẩm trong giỏ hàng thành số âm.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần kiểm tra kỹ các trường hợp có thể xảy ra.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`
