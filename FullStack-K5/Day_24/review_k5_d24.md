# Review bài tập về nhà buổi 23 - Lớp Fullstack K5

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/tree/main/buoi-23)

**[x] Bài 1:**

- **Bài làm rất tốt**

**[x] Bài 2:**

- **Bài làm tốt**

- Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

- Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn

- Thông thường, hàm khởi tạo không có từ khóa `return` vì `JavaScript Engine` ngầm định sẽ trả về `this` do đó thay vì viết hàm tạo như trong bài làm ta có thể viết lại như như sau:

  ```js
  const Customer = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  };
  ```

**[x] Bài 3:**

- **Bài làm chưa tốt**

- Đề bài yêu cầu viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email tuy nhiên trong bài làm không hề có

- Trong hàm `handleRegister` chưa kiểm tra trường hợp người dùng nhập email trùng với email đã có trong `usersData` . Có thể tham khảo cách kiểm tra như sau:

  ```js
  const existingUser = usersData.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

- Sau khi thực hiện thành công một chức năng nào đó nên `log` ra thông báo rõ ràng ví dụ như `Đăng ký thành công` hoặc `Đăng nhập thành công` để có thể dễ dàng nhận biết các chức năng đã thực hiện thành công hay chưa

**[x] Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý validate các dữ liệu, cách viết hàm tạo và đọc kỹ yêu cầu đề bài.

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_23/js/ex01.js)

**[x] Bài 1:**

- **Bài làm rất tốt**

- Trong trường hợp không tìm thấy lỗi nên thông báo ra cho người dùng thay vì trả về null

**[x] Bài 2:**

- **Bài làm chưa tốt**

- Đề bài yêu cầu viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address. Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên tức là các đối tượng phải được khởi tạo từ hàm tạo tuy nhiên bài làm chỉ đang viết hàm tạo chứ không hề sử dụng

- Khi viết một hàm tạo chữ cái đầu tiên nên được viết hoa

- Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

- Nên tách các hành động ra một hàm, ví dụ như `getShortName(name)` để code dễ hiểu hơn

- Đối số nhận vào của hàm `createCustomers` là một mảng vậy nên nếu chỉ kiểm tra `typeof object !== "object"` thì sẽ không chính xác vì khi đối số truyền vào là `null` hoặc `object` thì kết quả câu lệnh trên trả về vẫn sẽ là `false`.

**[x] Bài 3:**

- **Bài làm chưa tốt**

- Đề bài yêu cầu viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email tuy nhiên trong bài làm không hề có

- Trong hàm `handleRegister` chưa kiểm tra trường hợp người dùng nhập email trùng với email đã có trong `data` . Có thể tham khảo cách kiểm tra như sau:

  ```js
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Người dùng đã tồn tại.");
    return;
  }
  ```

- Sau khi thực hiện thành công một chức năng nào đó nên `log` ra thông báo rõ ràng ví dụ như `Đăng ký thành công` hoặc `Đăng nhập thành công` để có thể dễ dàng nhận biết các chức năng đã thực hiện thành công hay chưa

**[x] Đánh giá chung:** Bài làm chưa tốt, tuy nhiên cần lưu ý validate các dữ liệu, cách viết hàm tạo và sử dụng và đọc kỹ yêu cầu đề bài, dành nhiều thời gian hơn cho bài tập về nhà.

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-23/main.js)

**[x] Bài 1:**

- **Bài làm tốt**

- Biến `keyArr` trong bài làm chưa được khai báo

- Bài làm chưa kiểm tra trường hợp đối số truyền vào hàm `getError` là lỗi không có trong `errors` hoặc đối số không được truyền vào

**[x] Bài 2:**

- **Bài làm chưa tốt**

- Đề bài yêu cầu viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address. Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên tức là các đối tượng phải được khởi tạo từ hàm tạo tuy nhiên bài làm chỉ đang viết hàm tạo chứ không hề sử dụng

- Chưa có validate cho các trường của customer. Ví dụ như sau:

  ```js
  const validData = inputArray.every(
    (customer) =>
      typeof customer.name === "string" &&
      customer.name &&
      typeof customer.age === "number" &&
      customer.age > 0 &&
      customer.age % 1 === 0 &&
      typeof customer.address === "string" &&
      customer.address
  );
  ```

- Thuộc tính `shortName` được thêm vào mỗi đối tượng nên có giá trị là giá trị rút gọn của thuộc tính `name` như ví dụ trong đề bài thay vì để nguyên giá trị của thuộc tính `name`

**[x] Bài 3:**

- **Bài làm tốt**

- Bài làm chưa tự động thêm role là user cho mỗi đối tượng

- Sau khi thực hiện thành công một chức năng nào đó nên `log` ra thông báo rõ ràng ví dụ như `Đăng ký thành công` hoặc `Đăng nhập thành công` để có thể dễ dàng nhận biết các chức năng đã thực hiện thành công hay chưa

**[x] Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý validate các dữ liệu, khai báo đầy đủ các biến và đọc kỹ yêu cầu đề bài.
