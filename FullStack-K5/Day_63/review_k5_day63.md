# Review bài tập về nhà buổi 63 - Lớp FullStack K5

## [Nguyen Tien Dat](https://github.com/tiendat211294/fullstack_k5_database/blob/main/database_day_02/database_02_nguyen_tien_dat.sql)

- Bài làm hiện tại chỉ cung cấp các câu lệnh `SELECT` để hiển thị danh sách đơn hàng và chi tiết đơn hàng. Chưa có các câu lệnh `CREATE DATABASE`(tạo database), `CREATE TABLE`(tạo bảng), `ALTER TABLE`(thêm khóa chính, khóa ngoại, đổi tên cột,...), `INSERT`(thêm dữ liệu vào các bảng **customers** và **products**) như đề bài yêu cầu. Dù thao tác tạo bảng có thể thực hiện qua giao diện trực quan, nhưng khi tạo bảng vẫn có các câu lệnh sinh ra, bạn nên đưa các câu lệnh này vào bài làm để tiện cho việc review.

- Bài làm chỉ đang có 1 table `customers_products` thể hiện sản phẩm chi tiết của user đó đã mua. Thực tế bảng này nên đặt tên là `order_detail` vì đang có trường `product_id` thể hiện thông tin sản phẩm user đó mua. Ngoài ra nên thêm một table `order_list` để thống kê các `order` mà user đó mua sẽ hợp lý hơn.

- Nếu như tương lai, một user bị xoá thì tất cả dữ liệu user đó trong bảng `customers_products` cũng sẽ bị xoá và sẽ không xem được lịch sử user đó đã mua những gì để phục vụ cho quá trình kiểm kê sản phẩm.

- Nếu như tương lai, giá của một sản phẩm bị thay đổi, thì nó sẽ ảnh hưởng đến giá của sản phẩm tất cả những đơn hàng cũ đã được mua. Vậy nên cần thêm 1 table để lưu lại thông tin của sản phẩm lúc user mua thì sẽ không bị ảnh hưởng trong trường hợp này.

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5)

- Không tìm thấy bài làm
