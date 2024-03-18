# Review bài tập về nhà buổi 30 - Lớp Fullstack K5

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_30/)

- Chưa xử lý `input` nhập số lượng sản phẩm phải là số nguyên, hiện tại nếu nhập số lượng sản phẩm ví dụ như `1.3` vẫn thêm `1.3` vào giỏ hàng. Trường hợp tương tự cũng xảy ra khi người dùng chỉnh sửa số lượng sản phẩm trong giỏ hàng.

- Khi người dùng đang chỉnh sửa số lượng sản phẩm trong giỏ hàng không cần thiết phải `confirm` vì nếu là như vậy sẽ làm cho trải nghiệm người dùng trở nên không tốt. `Confirm` chỉ nên thực hiện khi người dùng đã chỉnh sửa xog số lượng sản phẩm tỏng giỏ hàng và bấm cập nhật giỏ hàng

- Khi người dùng chỉnh sửa số lượng của sản phẩm trong giỏ hàng là số `e` thì nên đưa ra thông báo giá trị không hợp lệ cho người dùng thay vì xóa sản phẩm khỏi giỏ hàng

- Nếu sản phẩm xóa là cuối cùng thì cần xóa luôn giỏ hàng thay vì để giỏ hàng không có sản phẩm

- Có thể tìm hiểu thêm về `localStorage` và `JSON` để lưu trữ dữ liệu vào trình duyệt vì khi xây dựng tính năng giỏ hàng thì khi người dùng thêm các sản phẩm vào giỏ hàng nếu như không lưu các sản phẩm đó vào `localStorage`, thì khi F5 lại trang hoặc tắt trình duyệt đi bật lại chắc chắn các sản phẩm sẽ biến mất. Điều này khi triển khai thực tế là không nên. Vậy nên, mình cần phải lưu các sản phẩm mà người dùng đã thêm trong giỏ hàng vào `localStorage`.

- Góp ý code:

- Bài làm đang fix cứng thông tin và số lượng sản phẩm ở bên `HTML`, điều này là không nên vì nếu sau này muốn thêm sản phẩm thì phải vào file `HTML` để tạo thêm một 1 sản phẩm nữa, nên tạo ra một mảng chứa thông tin các sản phẩm và từ đó render `HTML` các sản phẩm sẽ hợp lý hơn.

- [x] Đánh giá chung: **Bài làm tốt**, cần lưu ý xử lý hợp lý hơn một số case đặc biệt và chú ý một số lỗi nhỏ để hoàn thiện hơn.

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-30/)

- Bài làm chưa xử lý bất kỳ tính năng nào.

- [x] Đánh giá chung: **Bài làm chưa tốt**.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-30/)

- Bài làm mới chỉ xử lý tính năng thêm sản phẩm vào giỏ hàng tuy nhiên xử lý chưa tốt khi mà người dùng bấm vào thêm sản phẩm thì toàn bộ sản phẩm có trong giỏ hàng trước đó sẽ được thêm lại và hiển thị trên các hàng mới trong giỏ hàng với số lượng và giá tiền của từng sản phẩm là con số mới nhất khi người dùng thêm sản phẩm vào giỏ hàng do mỗi khi hàm `addCart` được gọi tất cả các phần tử của mảng `cart` sẽ được lặp qua tạo thêm các hàng mới tương ứng với phần tử trong mảng rồi sau đó `insert` toàn bộ vào `cartTable`.

- Chưa validate số lượng sản phẩm và người dùng thêm vào giỏ hàng.

- [x] Đánh giá chung: **Bài làm chưa tốt**, còn rất nhiều tính năng chưa xử lý, cần dành nhiều thời gian cho bài tập về nhà.
