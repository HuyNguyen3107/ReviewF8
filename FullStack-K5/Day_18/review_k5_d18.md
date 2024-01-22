# Huy review bài tập về nhà buổi 17 - Lớp Fullstack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-17/main.js)

- [x] Bài 1:

**Bài làm rất tốt**

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm rất tốt**

- Góp ý: Trường hợp **tồn tại số 0 trong 2 số a và b** nên đưa ra thông báo là tồn tại số 0 trong hai số a và b thì bài làm chặt chẽ hơn.

- [x] Bài 5:

**Bài làm rất tốt**

- [x] Đánh giá chung: **Bài làm rất tốt**

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_17/js/ex01.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Đề bài yêu cầu **không được sử dụng biến trung gian** trong khi bài làm đang sử dụng biến trung gian.

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- Tuy nhiên việc xét từng trường hợp như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

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

- [x] Bài 4:

**Bài làm tốt**

- Trường hợp **tồn tại số 0 trong 2 số a và b** chưa được xét đến nếu xả ra trường hợp này không thể đưa ra kết luận và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

- [x] Bài 5:

**Bài làm rất tốt**

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

- [x] Đánh giá chung: **Bài làm tốt\***, cần chú ý hơn đến yêu cầu đề bài, xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán, tối ưu code ngắn gọn để hoàn thiện hơn.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/blob/main/buoi-17/script.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Đề bài yêu cầu **không được sử dụng biến trung gian** trong khi bài làm đang sử dụng biến trung gian.

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- Tuy nhiên việc xét từng trường hợp như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

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

- [x] Bài 4:

**Bài làm rất tốt**

- [x] Bài 5:

**Bài làm rất tốt**

- [x] Đánh giá chung: **Bài làm rất tốt**

## [Dinh Viet Hung](https://github.com/hungskygaren/fullstack-k5/blob/main/Day17/script.js)

- [x] Bài 1:

**Bài làm rất tốt**

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm tốt**

- Trường hợp một trong hai số a hoặc b bằng 0 thì không thể kết luận là hai số cùng dấu hay khác dấu vậy nên cần xét riêng trường hợp này và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

- [x] Bài 5:

**Bài làm rất tốt**

- Tên biến nên đặt bằng tiếng anh

- [x] Đánh giá chung: **Bài làm tốt\***, cần xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán.

## [Nguyen Tuan Hung](https://github.com/HungHiro/F8-fullstack-k5/blob/main/F8-FT-k5/BVN-no17/bvn17.js)

- [x] Bài 1:

**Bài làm rất tốt**

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

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

- [x] Bài 4:

**Bài làm tốt**

- Trường hợp một trong hai số a hoặc b bằng 0 thì không thể kết luận là hai số cùng dấu hay khác dấu vậy nên cần xét riêng trường hợp này và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

- [x] Bài 5:

**Bài làm rất tốt**

- Góp ý: `code` trong bài đang khá dài và có thể gây khó hiểu cho người đọc, có thể tham khảo đoạn code sau:

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

**Bài làm tốt\***, cần xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán, tối ưu code ngắn gọn để hoàn thiện hơn.

## [Nguyen Van Thang](https://github.com/nvThang391/F8-FSK5/tree/main/Day_17)

- [x] Bài 1:

**Bài làm rất tốt**

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm tốt**

- Trường hợp một trong hai số a hoặc b bằng 0 thì không thể kết luận là hai số cùng dấu hay khác dấu vậy nên cần xét riêng trường hợp này và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

- [x] Bài 5:

**Bài làm rất tốt**

- [x] Đánh giá chung: **Bài làm tốt\***, cần xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán.

## [Vien Dinh Cuong](https://github.com/VDCSK8/f8-fullstack-FSK5-BT17/tree/main/js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Đề bài yêu cầu **không được sử dụng biến trung gian** trong khi bài làm đang sử dụng biến trung gian.

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- Tuy nhiên việc xét từng trường hợp như vậy nếu như bài toán yêu cầu tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp.

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

- [x] Bài 4:

**Bài làm tốt**

- Trường hợp **tồn tại số 0 trong 2 số a và b** chưa được xét đến nếu xả ra trường hợp này không thể đưa ra kết luận và nên đưa ra thông báo là tồn tại số 0 trong hai số a và b.

- [x] Bài 5:

**Bài làm rất tốt**

- Tên biến nên đặt bằng tiếng anh

- [x] Đánh giá chung: **Bài làm tốt**, cần chú ý hơn đến yêu cầu đề bài, xem xét kỹ tất cả các trường hợp có thể xảy ra của bài toán.

## [Luu Ngoc Duong](https://github.com/duongluu9898/f8-duongluu-fullstack-k5/blob/main/day-17/main.js)

- [x] Bài 1:

**Bài làm rất tốt**

- [x] Bài 2:

**Bài làm rất tốt**

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm rất tốt**

- Góp ý: Trường hợp **tồn tại số 0 trong 2 số a và b** nên đưa ra thông báo là tồn tại số 0 trong hai số a và b thì bài làm chặt chẽ hơn.

- [x] Bài 5:

**Bài làm rất tốt**

- [x] Đánh giá chung: **Bài làm rất tốt**
