# Review bài tập về nhà buổi 35 - Lớp FullStack K8

## [Le Nhung](https://nhunglt1801.github.io/f8-fullstack-k8-exercise/day-35/)

- Nên sử dụng quy tắc đặt tên class bằng cách sử dụng dấu gạch ngang (kebab-case), điều này giúp tên class dễ đọc và đồng bộ với các thư viện CSS phổ biến. Ví dụ, `getLinkBtn` nên được thay thế bằng `get-link-btn`. Quy tắc này cũng giúp tránh nhầm lẫn với các biến JavaScript, vốn thường sử dụng `camelCase`.

- **Điểm mạnh:**

- Sử dụng `requestAnimationFrame` thay cho `setInterval` giúp tiết kiệm tài nguyên và tối ưu hiệu suất vì nó được tối ưu cho việc cập nhật giao diện.

- Khi trang bị ẩn (`visibilitychange`), bộ đếm sẽ dừng lại, giúp tiết kiệm tài nguyên và đảm bảo thời gian countdown chính xác.

- Sử dụng `performance.now()` để tính thời gian trôi qua một cách chính xác.

- [x] **Đánh giá chung:** Bài làm rất tốt.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## [Nguyen Duc Nhat](https://nhat0712.github.io/F8-ex/Buoi_35/index.html)

- **Điểm mạnh:**

- Sử dụng `requestAnimationFrame` thay cho `setInterval` giúp tiết kiệm tài nguyên và tối ưu hiệu suất vì nó được tối ưu cho việc cập nhật giao diện.

- Khi trang bị ẩn (`visibilitychange`), bộ đếm sẽ dừng lại, giúp tiết kiệm tài nguyên và đảm bảo thời gian countdown chính xác.

- Sử dụng `performance.now()` để tính thời gian trôi qua một cách chính xác.

- [x] **Đánh giá chung:** Bài làm rất tốt.

## [Nguyen Xuan Phong](https://xuanphong03.github.io/Fullstack-F8-Javascript/day-35/homework/index.html)

- Nên sử dụng quy tắc đặt tên class bằng cách sử dụng dấu gạch ngang (kebab-case), điều này giúp tên class dễ đọc và đồng bộ với các thư viện CSS phổ biến. Ví dụ, `getLinkBtn` nên được thay thế bằng `get-link-btn`. Quy tắc này cũng giúp tránh nhầm lẫn với các biến JavaScript, vốn thường sử dụng `camelCase`.

- **Điểm mạnh:**

- Sử dụng `requestAnimationFrame` thay cho `setInterval` giúp tiết kiệm tài nguyên và tối ưu hiệu suất vì nó được tối ưu cho việc cập nhật giao diện.

- Khi trang bị ẩn (`visibilitychange`), bộ đếm sẽ dừng lại, giúp tiết kiệm tài nguyên và đảm bảo thời gian countdown chính xác.

- [x] **Đánh giá chung:** Bài làm rất tốt.

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`

## [Minh Thuan](https://minhthuan1809.github.io/F8-Fullstack/day-35/)

- Bài làm chưa xử lý để khi mở Dev Tools vẫn không lấy được link.

- Chưa sử dụng hàm: `window.location.href='url'` để thực hiện chuyển hướng khi click vào button.

- Có thể sử dụng thêm event `visibilitychange` để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm

```js
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    console.log("Tab không còn hiển thị");
  } else {
    console.log("Tab đang hiển thị");
  }
});
```

- **Điểm mạnh:**

- Sử dụng `requestAnimationFrame` thay cho `setInterval` giúp tiết kiệm tài nguyên và tối ưu hiệu suất vì nó được tối ưu cho việc cập nhật giao diện.

- **Điểm yếu:**

- Chưa cần thận trong việc kiểm tra yêu cầu bài tập.

- [x] **Đánh giá chung:** Bài làm chưa tốt, cần dành nhiều thời gian hơn cho bài tập và chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`

## [Lam Hoang](https://nvhlam2211.github.io/BTVN-F8/Day-35/ex.html)

- Có thể sử dụng thêm event `visibilitychange` để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm

```js
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    console.log("Tab không còn hiển thị");
  } else {
    console.log("Tab đang hiển thị");
  }
});
```

- **Điểm mạnh:**

- Sử dụng `requestAnimationFrame` thay cho `setInterval` giúp tiết kiệm tài nguyên và tối ưu hiệu suất vì nó được tối ưu cho việc cập nhật giao diện.

- [x] **Đánh giá chung:** Bài làm rất tốt.

## [Le Cong Anh Tu](https://lcatintheclouds.github.io/F8_FullStack_Offline_K8/hocjs/baitapbuoi35/index.html)

- Yêu cầu bài tập là không được sử dụng: `setInterval, setTimeout` trong khi bài làm đang sử dụng `setTimeout`.

- Có thể sử dụng thêm event `visibilitychange` để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm

```js
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    console.log("Tab không còn hiển thị");
  } else {
    console.log("Tab đang hiển thị");
  }
});
```

- **Điểm yếu:**

- Chưa cần thận trong việc kiểm tra yêu cầu bài tập.

- [x] **Đánh giá chung:** Bài làm chưa tốt, cần dành nhiều thời gian hơn cho bài tập và chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## [Nguyen Quang Khai](https://khainq-k.github.io/f8-fullstack-k8/Day_35/)

- **Điểm mạnh:**

- Sử dụng `requestAnimationFrame` thay cho `setInterval` giúp tiết kiệm tài nguyên và tối ưu hiệu suất vì nó được tối ưu cho việc cập nhật giao diện.

- Khi trang bị ẩn (`visibilitychange`), bộ đếm sẽ dừng lại, giúp tiết kiệm tài nguyên và đảm bảo thời gian countdown chính xác.

- Sử dụng `performance.now()` để tính thời gian trôi qua một cách chính xác.

- [x] **Đánh giá chung:** Bài làm rất tốt.
