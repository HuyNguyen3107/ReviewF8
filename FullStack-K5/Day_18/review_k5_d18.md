# Huy review bài tập về nhà buổi 17 - Lớp Fullstack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-17/main.js)

[x] Bài 1:

- **Bài làm rất tốt**

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm rất tốt**

[x] Bài 4:

- **Bài làm rất tốt**

- Góp ý: Trường hợp **tồn tại số 0 trong 2 số a và b** nên đưa ra thông báo là tồn tại số 0 trong hai số a và b thì bài làm chặt chẽ hơn.

[x] Bài 5:

- **Bài làm tốt**

- Logic bài làm khá tốt tuy nhiên ở trường hợp cuối cùng, bài làm đang có biến `temp` chưa được khai báo.

[x] Đánh giá chung: **Bài làm rất tốt**, tuy nhiên cần lưu ý check kỹ bài 5 để bài làm hoàn thiện hơn.

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_17/js/ex01.js)

[x] Bài 1:

- **Bài làm chưa tốt**

- Đề bài yêu cầu **không được sử dụng biến trung gian** trong khi bài làm đang sử dụng biến trung gian.

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm chưa tốt**

- Nếu như trong 3 số có 2 số có giá trị bằng nhau thì sẽ không vào điều kiện nào mà bài làm đang check. Cần thực hiện logic theo hướng khác để phù hợp hơn.

- Việc xét từng trường hợp như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

- Vì vậy, có thể tham khảo cách làm sau đây:

  ```javascript
  var a = 60,
    b = 30,
    c = 90;
  var max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log("Số lớn nhất là:", max);
  ```

[x] Bài 4:

- **Bài làm tốt**

- Trường hợp **tồn tại số 0 trong 2 số a và b** chưa được xét đến nếu xảy ra trường hợp này không thể đưa ra kết luận và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

[x] Bài 5:

- **Bài làm rất tốt**

- Góp ý: Vì đề bài chỉ yêu cầu sắp xếp 3 số vậy nên không cần thiết phải áp dụng thuật toán sắp xếp nổi bọt trong trường hợp này, có thể tham khảo đoạn code đơn giản sau:

  ```javascript
  var a = 40;
  var b = 60;
  var c = 20;

  var temp;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (a > c) {
    temp = a;
    a = c;
    c = temp;
  }
  if (b > c) {
    temp = b;
    b = c;
    c = temp;
  }

  console.log("Sắp xếp theo thứ tự tăng dần:", a, b, c);
  ```

[x] Đánh giá chung: **Bài làm tốt\***, cần chú ý hơn đến yêu cầu đề bài, xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán, tối ưu code ngắn gọn để hoàn thiện hơn.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/blob/main/buoi-17/script.js)

[x] Bài 1:

- **Bài làm chưa tốt**

- Đề bài yêu cầu **không được sử dụng biến trung gian** trong khi bài làm đang sử dụng biến trung gian.

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm chưa tốt**

- Nếu như trong 3 số có 2 số có giá trị bằng nhau thì sẽ không vào điều kiện nào mà bài làm đang check. Cần thực hiện logic theo hướng khác để phù hợp hơn.

- Việc xét từng trường hợp như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

- Vì vậy, có thể tham khảo cách làm sau đây:

  ```javascript
  var a = 60,
    b = 30,
    c = 90;
  var max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log("Số lớn nhất là:", max);
  ```

[x] Bài 4:

- **Bài làm rất tốt**

[x] Bài 5:

- **Bài làm chưa tốt**

- Bài làm đang check 2 trường hợp giống nhau là so sánh b với a, bài làm chưa so sánh a với c nên kết quả cho ra không thoả mãn ở hầu như các trường hợp.

- Việc gán biến x bằng 0 là không cần thiết, vì ở đây biến x có nhiệm vụ là biến trung gian để đổi giá trị của 2 biến cần so sánh.

[x] Đánh giá chung: **Bài làm tốt\***, cần chú ý hơn đến yêu cầu đề bài, xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán để hoàn thiện hơn.

## [Dinh Viet Hung](https://github.com/hungskygaren/fullstack-k5/blob/main/Day17/script.js)

[x] Bài 1:

- **Bài làm rất tốt**

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm rất tốt**

[x] Bài 4:

- **Bài làm tốt**

- Trường hợp một trong hai số a hoặc b bằng 0 thì không thể kết luận là hai số cùng dấu hay khác dấu vậy nên cần xét riêng trường hợp này và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

[x] Bài 5:

- **Bài làm chưa tốt**

- Bài làm đang check 2 trường hợp giống nhau là so sánh b với a, bài làm chưa so sánh a với c nên kết quả cho ra không thoả mãn ở hầu như các trường hợp.

- Việc gán biến `tam` bằng 0 là không cần thiết, vì ở đây biến `tam` có nhiệm vụ là biến trung gian để đổi giá trị của 2 biến cần so sánh. Đặt tên biến nên đặt bằng tiếng anh.

[x] Đánh giá chung: **Bài làm tốt\***, cần xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán.

## [Nguyen Tuan Hung](https://github.com/HungHiro/F8-fullstack-k5/blob/main/F8-FT-k5/BVN-no17/bvn17.js)

[x] Bài 1:

- **Bài làm rất tốt**

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm tốt**

- Cách làm ở bài 3.1 là đúng tuy nhiên bài làm đang không khuyến khích sử dụng hàm có sẵn trong Javascript để giải quyết bài tập về nhà.

- Tuy nhiên việc xét từng trường hợp như trong bài 3.2 trong bài làm như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

- Vì vậy, có thể tham khảo cách làm sau đây:

  ```javascript
  var a = 60,
    b = 30,
    c = 90;
  var max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log("Số lớn nhất là:", max);
  ```

[x] Bài 4:

- **Bài làm tốt**

- Trường hợp một trong hai số a hoặc b bằng 0 thì không thể kết luận là hai số cùng dấu hay khác dấu vậy nên cần xét riêng trường hợp này và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

[x] Bài 5:

- **Bài làm tốt**

- Góp ý: `code` trong bài đang khá dài, và bài làm đang check khá thủ công, nếu như cần sắp xếp một dãy số nhiều số thì nếu làm theo cách hiện tại sẽ khó có thể giải quyết bài toán đó được và có thể gây khó hiểu cho người đọc, có thể tham khảo đoạn code sau:

  ```javascript
  var a = 40;
  var b = 60;
  var c = 20;

  var temp;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (a > c) {
    temp = a;
    a = c;
    c = temp;
  }
  if (b > c) {
    temp = b;
    b = c;
    c = temp;
  }

  console.log("Sắp xếp theo thứ tự tăng dần:", a, b, c);
  ```

- [x]Đánh giá chung: **Bài làm tốt\***, cần xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán, tối ưu code ngắn gọn để hoàn thiện hơn.

## [Nguyen Van Thang](https://github.com/nvThang391/F8-FSK5/tree/main/Day_17)

[x] Bài 1:

- **Bài làm rất tốt**

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm rất tốt**

[x] Bài 4:

- **Bài làm tốt**

- Trường hợp một trong hai số a hoặc b bằng 0 thì không thể kết luận là hai số cùng dấu hay khác dấu vậy nên cần xét riêng trường hợp này và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

[x] Bài 5:

- **Bài làm tốt**

- Logic bài làm khá tốt tuy nhiên ở trường hợp cuối cùng, bài làm đang có biến `temp` chưa được khai báo.

[x] Đánh giá chung: **Bài làm tốt\***, cần xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán.

## [Vien Dinh Cuong](https://github.com/VDCSK8/f8-fullstack-FSK5-BT17/tree/main/js)

[x] Bài 1:

- **Bài làm chưa tốt**

- Đề bài yêu cầu **không được sử dụng biến trung gian** trong khi bài làm đang sử dụng biến trung gian.

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm chưa tốt**

- Nếu như trong 3 số có 2 số có giá trị bằng nhau thì sẽ không vào điều kiện nào mà bài làm đang check. Cần thực hiện logic theo hướng khác để phù hợp hơn.

- Việc xét từng trường hợp như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

- Vì vậy, có thể tham khảo cách làm sau đây:

  ```javascript
  var a = 60,
    b = 30,
    c = 90;
  var max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log("Số lớn nhất là:", max);
  ```

[x] Bài 4:

- **Bài làm tốt**

- Trường hợp **tồn tại số 0 trong 2 số a và b** chưa được xét đến nếu xả ra trường hợp này không thể đưa ra kết luận và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

[x] Bài 5:

- **Bài làm chưa tốt**

- Bài làm đang check 2 trường hợp giống nhau là so sánh b với a, bài làm chưa so sánh a với c nên kết quả cho ra không thoả mãn ở hầu như các trường hợp.

- Việc gán biến `tam` bằng 0 là không cần thiết, vì ở đây biến `tam` có nhiệm vụ là biến trung gian để đổi giá trị của 2 biến cần so sánh. Đặt tên biến nên đặt bằng tiếng anh.

[x] Đánh giá chung: **Bài làm tốt**, cần chú ý hơn đến yêu cầu đề bài, xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán.

## [Luu Ngoc Duong](https://github.com/duongluu9898/f8-duongluu-fullstack-k5/blob/main/day-17/main.js)

[x] Bài 1:

- **Bài làm rất tốt**

[x] Bài 2:

- **Bài làm rất tốt**

[x] Bài 3:

- **Bài làm rất tốt**

[x] Bài 4:

- **Bài làm tốt**

- Góp ý: Trường hợp **tồn tại số 0 trong 2 số a và b** nên đưa ra thông báo là tồn tại số 0 trong hai số a và b thì bài làm chặt chẽ hơn.

[x] Bài 5:

- **Bài làm rất tốt**

[x] Đánh giá chung: **Bài làm rất tốt**, tuy nhiên cần lưu ý các trường hợp đặc biệt của bài 4 để hoàn thiện hơn.
