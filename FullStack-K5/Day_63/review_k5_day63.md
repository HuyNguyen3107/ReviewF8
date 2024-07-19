# Review bài tập về nhà buổi 63 - Lớp FullStack K5

## [Nguyen Tien Dat](https://github.com/tiendat211294/fullstack_k5_database/blob/main/database_day_02/database_02_nguyen_tien_dat.sql)

- Bài làm hiện tại chỉ cung cấp các câu lệnh `SELECT` để hiển thị danh sách đơn hàng và chi tiết đơn hàng. Chưa có các câu lệnh `CREATE DATABASE`(tạo database), `CREATE TABLE`(tạo bảng), `ALTER TABLE`(thêm khóa chính, khóa ngoại, đổi tên cột,...), `INSERT`(thêm dữ liệu vào các bảng **customers** và **products**) như đề bài yêu cầu. Dù thao tác tạo bảng có thể thực hiện qua giao diện trực quan, nhưng khi tạo bảng vẫn có các câu lệnh sinh ra, bạn nên đưa các câu lệnh này vào bài làm để tiện cho việc review.

- Bài làm chỉ đang có 1 table `customers_products` thể hiện sản phẩm chi tiết của user đó đã mua. Thực tế bảng này nên đặt tên là `order_detail` vì đang có trường `product_id` thể hiện thông tin sản phẩm user đó mua. Ngoài ra nên thêm một table `order_list` để thống kê các `order` mà user đó mua sẽ hợp lý hơn.

- Nếu như tương lai, một user bị xoá thì tất cả dữ liệu user đó trong bảng `customers_products` cũng sẽ bị xoá và sẽ không xem được lịch sử user đó đã mua những gì để phục vụ cho quá trình kiểm kê sản phẩm.

- Nếu như tương lai, giá của một sản phẩm bị thay đổi, thì nó sẽ ảnh hưởng đến giá của sản phẩm tất cả những đơn hàng cũ đã được mua. Vậy nên cần thêm 1 table để lưu lại thông tin của sản phẩm lúc user mua thì sẽ không bị ảnh hưởng trong trường hợp này.

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5)

- Bảng **customers** chưa có trường số điện thoại của khách hàng.

- Bảng **products** chưa có trường mã sản phẩm.

- Toàn bộ các bảng đều nên có hai trường `created_at` và `updated_at`.

- Ở trong bảng `orders` đang có trường tên là `status` thể hiện trạng thái của 1 sản phẩm là `true` or `false`, nhưng đối với quản lý đơn hàng thì trạng thái sản phẩm ở đây có vẻ không hợp lý cho lắm, trên thực tế trạng thái của 1 đơn hàng thường có các giá trị là **Đã xác nhận**, **Đang vận chuyển**, **Đã thanh toán**, **Đã huỷ** thì sẽ hợp lý hơn.

- Các trường `quantity` và `total_quantity` thể hiện số lượng sản phẩm nên có kiểu dữ liệu là `bigint` vì số lượng sản phẩm có thể sẽ rất lớn. Các trường `price` thể hiện giá của một sản phẩm do đó nên để kiểu dữ liệu là `real`.

- Chưa có các câu lệnh `INSERT` (thêm dữ liệu vào các bảng **customers**, **products**,...).

## [Luu Ngoc Duong](https://github.com/duongluu9898/k5_duongluu_baitap/blob/main/btvn.sql)

- Trường `phone` nên có kiểu dữ liệu là `character varying` thay vì `integer`. Trường số điện thoại trong cơ sở dữ liệu nên được lưu dưới dạng chuỗi vì không có phép toán số học nào cần thiết, cho phép giữ định dạng linh hoạt với các ký tự đặc biệt (như dấu gạch ngang, dấu cách, hoặc dấu cộng), và tránh việc mất các số 0 đầu tiên trong các số điện thoại quốc tế hoặc địa phương.

- Trường mã sản phẩm nên có kiểu dữ liệu là `character varying` thay vì `integer`.

- Ở trong bảng `orders` đang có trường tên là `status` thể hiện trạng thái của 1 sản phẩm là `true` or `false`, nhưng đối với quản lý đơn hàng thì trạng thái sản phẩm ở đây có vẻ không hợp lý cho lắm, trên thực tế trạng thái của 1 đơn hàng thường có các giá trị là **Đã xác nhận**, **Đang vận chuyển**, **Đã thanh toán**, **Đã huỷ** thì sẽ hợp lý hơn.

- Trường `price` thể hiện giá của một sản phẩm do đó nên để kiểu dữ liệu là `real`.

- Chưa có các câu lệnh để tạo các bảng thể hiện danh sách đơn hàng và chi tiết đơn hàng, thiết lập mối quan hệ, ràng buộc giữa các bảng.
