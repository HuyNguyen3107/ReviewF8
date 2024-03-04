# Review bài tập về nhà buổi 26 - Lớp Fullstack K5

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-26/)

- Chưa reset form khi tắt và bật lại form.

- Khi nhấn vào form đăng ký xong thoát ra và nhấn lại button Đăng nhập thì bài làm chưa chuyển về form đăng nhập mà vẫn đang ở form đăng ký trước đó.

- Ở cả hai form đăng nhập và đăng ký khi người dùng focus vào một trường rồi sau đó blur ra ngoài mà không nhập bất kì thông tin gì thì mới chỉ thông báo lỗi của trường được focus các trường còn lại chưa được thông báo lỗi, khi người dùng chưa nhập đúng định dạng email hay đã nhập thông tin rồi sau đó xóa toàn bộ thông tin nhập liệu cũng chưa thông báo lỗi ngay khi người dùng đang nhập liệu mà phải blur ra ngoài sau đó mới có thông báo lỗi, tương tự với trường mật khẩu, trường tên ở form đăng ký.

- Chức năng ẩn hiện mật khẩu ở cả hai form không hoạt động do khi thỏa mãn điều kiện `check === '<i class="fa-regular fa-eye"></i>'` câu lệnh `eyes[i].innerHTML = '<i class="fa-regular fa-eye"></i>'` sẽ được thực thi và gán lại lại giá trị của `eyes[i].innerHTML` cho chính nó do vậy điều kiện trong câu lệnh `if` sẽ luôn đúng và không thể thay đổi `type` của thẻ `input` sang `text` cũng như không thể chuyển đổi icon.

**Chức năng đăng nhập**

- Sau khi đã nhập liệu đủ và chính xác ở tất cả các trường và bấm vào nút đăng nhập chưa có thông báo khi tài khoản không tồn tại.

**Chức năng đăng ký**

- Trường nhập password chưa có validate password cần có độ dài tối thiểu từ 6-20 ký tự như bản mẫu.

Góp ý code:

- Để tiện hơn trong việc sử dụng lặp lại nhiều lần `document.querySelector` và `document.querySelectorAll` có thể sử dụng một function riêng thay vì phải viết lại nhiều lần, ví dụ:

```js
var $ = function (tag) {
  return document.querySelector(tag);
};
var $$ = function (allTag) {
  return document.querySelectorAll(allTag);
};
```

Đánh giá chung: **Bài làm chưa tốt**, vẫn còn các case chưa xử lý hoặc xử lý chưa đúng theo bản mẫu ở cả 2 form đăng ký và đăng nhập, cần dành thời gian nhiều hơn làm bài tập về nhà.

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_26/)

- Chưa reset form khi tắt và bật lại form.

- Khi nhấn vào form đăng ký xong thoát ra và nhấn lại button Đăng nhập thì bài làm chưa chuyển về form đăng nhập mà vẫn đang ở form đăng ký trước đó.

- Khi người dùng chưa nhập đúng định dạng email hay đã nhập thông tin rồi sau đó xóa toàn bộ thông tin nhập liệu cũng chưa thông báo lỗi ngay khi người dùng đang nhập liệu mà phải blur ra ngoài sau đó mới có thông báo lỗi, tương tự với trường mật khẩu, trường tên ở form đăng ký.

- Khi người dùng nhập đúng định dạng của một trường bất kì các thông báo lỗi chưa biến mất ngay khi người dùng nhập mà chỉ khi blur ra ngoài mới biến mất.

**Chức năng đăng nhập**

- Sau khi đã nhập liệu đủ và chính xác ở tất cả các trường và bấm vào nút đăng nhập chưa có thông báo khi tài khoản không tồn tại theo như bản mẫu mà đang reload lại trang theo mặc định của thẻ `form` khi `submit`.

**Chức năng đăng ký**

Góp ý code:

- Để tiện hơn trong việc sử dụng lặp lại nhiều lần `document.querySelector` và `document.querySelectorAll` có thể sử dụng một function riêng thay vì phải viết lại nhiều lần, ví dụ:

```js
var $ = function (tag) {
  return document.querySelector(tag);
};
var $$ = function (allTag) {
  return document.querySelectorAll(allTag);
};
```

- Một số chức năng ở cả 2 form đều có ví dụ như validate thông tin ở input nhập email và password thì nên tách riêng 1 function để tránh việc lặp code, giúp cho code dễ hiểu, khoa học và hợp lý hơn.

Đánh giá chung: **Bài làm chưa tốt**, vẫn còn các case chưa xử lý hoặc xử lý chưa đúng theo bản mẫu ở cả 2 form đăng ký và đăng nhập, cần tối ưu code ngắn gọn và cần dành thời gian nhiều hơn làm bài tập về nhà.

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-26/)

- Khi click vào `overlay` chưa thực hiện việc đóng form.

- Chưa reset form khi tắt và bật lại form.

- Khi nhấn vào form đăng ký xong thoát ra và nhấn lại button Đăng nhập thì bài làm chưa chuyển về form đăng nhập mà vẫn đang ở form đăng ký trước đó.

- Khi người dùng chưa nhập đúng định dạng email hay đã nhập thông tin rồi sau đó xóa toàn bộ thông tin nhập liệu cũng chưa thông báo lỗi ngay khi người dùng đang nhập liệu mà phải blur ra ngoài sau đó mới có thông báo lỗi, tương tự với trường mật khẩu, trường tên ở form đăng ký.

- Khi người dùng nhập đúng định dạng của một trường bất kì các thông báo lỗi không biến mất.

- Chưa xử lý case ẩn hiện mật khẩu.

**Chức năng đăng nhập**

- Sau khi đã nhập liệu đủ và chính xác ở tất cả các trường và bấm vào nút đăng nhập chưa có thông báo khi tài khoản không tồn tại.

**Chức năng đăng ký**

- Trường nhập password thì validate password cần có độ dài tối thiểu từ 6-20 ký tự như bản mẫu trong khi bài làm chỉ đang để tối thiểu 6 ký tự.

Góp ý code:

- Để tiện hơn trong việc sử dụng lặp lại nhiều lần `document.querySelector` và `document.querySelectorAll` có thể sử dụng một function riêng thay vì phải viết lại nhiều lần, ví dụ:

```js
var $ = function (tag) {
  return document.querySelector(tag);
};
var $$ = function (allTag) {
  return document.querySelectorAll(allTag);
};
```

Đánh giá chung: **Bài làm chưa tốt**, vẫn còn các case chưa xử lý hoặc xử lý chưa đúng theo bản mẫu ở cả 2 form đăng ký và đăng nhập, cần dành thời gian nhiều hơn làm bài tập về nhà và chỉn chu hơn về mặt giao diện.
