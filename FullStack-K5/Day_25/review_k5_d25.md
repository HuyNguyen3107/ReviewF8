# Review bài tập về nhà buổi 24 - Lớp Fullstack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-24/main.js)

**[x] Bài 1:**

- **Bài làm tốt**

- Bài làm chưa kiểm tra nếu như hàm `calculateExpressionSum` không có đối số truyền vào

- Các số được truyền dưới dạng `String` cần được `parse` thử về số, nếu không phải `NaN` vẫn cần được tính. Hiện tại bài làm check nếu `typeof` khác `number` hoặc nếu có giá trị truyền vào là `NaN` thì sẽ trả về kết quả là `Dữ liệu không hợp lệ!`, điều này sẽ bỏ qua các trường hợp các số được truyền vào dưới dạng chuỗi như "2", "3". Cần ưu tiên chuyển về số để tính

**[x] Bài 2:**

- **Bài làm tốt**

- Định dạng tiền tệ chưa đúng với yêu cầu đề bài

- Phương thức `prototype` `getCurrency` được tạo trong Number chưa kiểm tra trường hợp nếu như đầu vào là `Infinity` hoặc `NaN`

- Phương thức `prototype` `getCurrency` được tạo trong String chưa kiểm tra trường hợp nếu như đầu vào là `Infinity`

**[x] Bài 3:**

- **Bài làm rất tốt**

- Bài làm chưa kiểm tra trường hợp đầu vào là một mảng rỗng hoặc không phải là mảng

**[x] Bài 4:**

- **Bài làm rất tốt**

**[x] Đánh giá chung:** Bài làm rất tốt, chỉ cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/blob/main/buoi-24/scrip.js)

**[x] Bài 1:**

- **Bài làm tốt**

- Bài làm chưa kiểm tra nếu như hàm `sumNumbers` không có đối số truyền vào

- Các số được truyền dưới dạng `String` cần được `parse` thử về số, nếu không phải `NaN` vẫn cần được tính. Hiện tại bài làm check nếu `typeof` khác `number` hoặc nếu có giá trị truyền vào là `NaN` thì sẽ trả về kết quả là không hợp lệ, điều này sẽ bỏ qua các trường hợp các số được truyền vào dưới dạng chuỗi như "2", "3". Cần ưu tiên chuyển về số để tính

**[x] Bài 2:**

- **Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp đầu vào là `Infinity` hoặc `true` vì khi đầu vào là `Infinity` thì kết quả của điểu kiện `Number(this) > 999` sẽ là `true` vì `Number(Infinity)` sẽ trả về `Infinity` và nó lớn hơn 999 còn khi đầu vào là `true` thì kết quả của điểu kiện `Number(this) <= 999 && Number(this) > 0` sẽ là `true` vì `Number(true)` sẽ trả về 1

- Có thể tham khảo đoạn code sau:

  ```js
  var price = "120000";

  Object.prototype.getCurrency = function (unit) {
    console.log(this.constructor.name);
    if (Array.isArray(this) || this.constructor.name === "Boolean") {
      return `Số không hợp lệ`;
    }
    var value = +this;

    if (
      isNaN(value) ||
      value === Infinity ||
      typeof value !== "number" ||
      value === -Infinity
    ) {
      return `Số không hợp lệ`;
    }
    return value.toLocaleString("en-US") + " " + unit;
  };

  console.log(price.getCurrency("đ"));
  ```

**[x] Bài 3:**

- **Bài làm rất tốt**

- Bài làm chưa kiểm tra trường hợp đầu vào là một mảng rỗng hoặc không phải là mảng

**[x] Bài 4:**

- **Bài làm rất tốt**

**[x] Đánh giá chung:** Bài làm rất tốt, chỉ cần kiểm tra thêm các điều kiện để tránh lỗi và đảm bảo đầu ra chính xác.
