# Review bài tập về nhà buổi 25 - Lớp Fullstack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-25/main.js)

- [x] Bài 1:

- **Bài làm tốt**

- Bài làm chưa kiểm tra nếu như hàm `calculateExpressionSum` không có đối số truyền vào

- Các số được truyền dưới dạng `String` cần được `parse` thử về số, nếu không phải `NaN` vẫn cần được tính. Hiện tại bài làm check nếu `typeof` khác `number` hoặc nếu có giá trị truyền vào là `NaN` thì sẽ trả về kết quả là `Dữ liệu không hợp lệ!`, điều này sẽ bỏ qua các trường hợp các số được truyền vào dưới dạng chuỗi như "2", "3". Cần ưu tiên chuyển về số để tính

- Có thể tham khảo đoạn code sau:

```js
function sum(...args) {
  var total = 0;
  for (value of args) {
    if (
      (Array.isArray(value) && value.length > 1) ||
      value === true ||
      value === false
    ) {
      return `Giá trị không hợp lệ.`;
    }
    value = +value;
    if (!Number.isNaN(value) && value !== Infinity && value !== Infinity) {
      total += value;
    } else {
      return `Giá trị không hợp lệ.`;
    }
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, [1], "1", true, ["a"]));
```

- [x] Bài 2:

- **Bài làm rất tốt**

- [x] Bài 3:

- **Bài làm rất tốt**

- [x] Bài 4:

- **Bài làm rất tốt**

- [x] Bài 5:

- **Bài làm rất tốt**

- [x] Đánh giá chung: Bài làm rất tốt, chỉ cần lưu ý các trường hợp đặc biệt để hoàn thiện hơn.

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_25/js)

- [x] Bài 1:

- **Bài làm chưa tốt**

- Bài làm đang thực hiện kiểm tra nếu có một số trong mảng không thuộc kiểu dữ liệu `number` hoặc là `NaN` hoặc là `Infinity` thì sẽ trả về kết quả dữ liệu không hợp lệ tuy nhiên vẫn còn trường hợp số đó là `-Infinity` và nêu rơi vào trường hợp này thì cũng sẽ trả về kết quả dữ liệu không hợp lệ.

- Câu lệnh rẽ nhánh `if else` trong trong hàm `sum` đang thực hiện kiểm tra các phần tử trong mảng đầu vào nếu như phần tử đang được xét đến có kiểu dữ liệu là `string` thì sẽ ép kiểu phần tử đó thành `number` và thực hiện cộng với giá trị hiện tại của biến `sum` sau đó gán lại cho biến `sum` tuy nhiên khi ép kiểu không thành công thì hoặc ép kiểu thành công tuy nhiên khi kết thúc các câu lệnh rẽ nhánh thì vẫn tiếp tục thực hiện phép gán `+=` phần tử đó với biến `sum` do đó đều trả về kết quả không chính xác

- Có thể tham khảo đoạn code sau

```js
function sum(...args) {
  var total = 0;
  for (value of args) {
    if (
      (Array.isArray(value) && value.length > 1) ||
      value === true ||
      value === false
    ) {
      return `Giá trị không hợp lệ.`;
    }
    value = +value;
    if (!Number.isNaN(value) && value !== Infinity && value !== Infinity) {
      total += value;
    } else {
      return `Giá trị không hợp lệ.`;
    }
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, [1], "1", true, ["a"]));
```

- [x] Bài 2:

- **Bài làm rất tốt**

- [x] Bài 3:

- **Bài làm tốt**

- Hàm `push()` trong `Array` trả về độ dài của mảng mới sau khỉ đã thêm các phần tử. Hiện bài làm đang trả về mảng mới sau khi đã thêm các phần tử.

- [x] Bài 4:

- **Bài làm rất tốt**

- [x] Bài 5:

- **Bài làm rất tốt**

- Khi khai báo biến `options`trong hàm `toSelectOption` có thể gán luôn giá trị của nó bằng một chuỗi như `<option value="" hidden>Chọn chuyên mục</option>  <option value="">Chọn chuyên mục</option>` để kết quả hiện thị giống với yêu cầu đề bài

- [x] Đánh giá chung: Bài làm tốt, cần kiểm tra thêm các điều kiện, các trường hợp có thể xảy ra để tránh lỗi và đảm bảo đầu ra chính xác.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/blob/main/buoi-25/script.js)

- [x] Bài 1:

- **Bài làm tốt**

- Bài làm đang thực hiện ép kiểu phần tử của mảng đầu vào thành `number` trước sau đó kiểm tra nếu phần tử đó của mảng là `NaN, Infinity, -Infinity` thì sẽ trả về kết quả không hợp lệ tuy nhiên nếu một phần tử nào đó trong mảng là thuộc kiểu dữ liệu `boolean` thì sau khi ép kiểu sẽ chuyển về 1 nếu là `true` và 0 nếu là `false` do đó cần kiểm tra xem phần tử đó có thuộc kiểu dữ liệu `boolean` không trước khi ép kiểu

- Có thể tham khảo đoạn code sau:

```js
function sum(...args) {
  var total = 0;
  for (value of args) {
    if (
      (Array.isArray(value) && value.length > 1) ||
      value === true ||
      value === false
    ) {
      return `Giá trị không hợp lệ.`;
    }
    value = +value;
    if (!Number.isNaN(value) && value !== Infinity && value !== Infinity) {
      total += value;
    } else {
      return `Giá trị không hợp lệ.`;
    }
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, [1], "1", true, ["a"]));
```

- [x] Bài 2:

- **Bài làm rất tốt**

- [x] Bài 3:

- **Bài làm tốt**

- Hàm `push()` trong `Array` trả về độ dài của mảng mới sau khỉ đã thêm các phần tử. Hiện bài làm đang trả về mảng mới sau khi đã thêm các phần tử.

- [x] Bài 4:

- **Bài làm rất tốt**

- [x] Bài 5:

- **Bài làm rất tốt**

- [x] Đánh giá chung: Bài làm rất tốt, cần kiểm tra thêm các điều kiện, các trường hợp có thể xảy ra để tránh lỗi và đảm bảo đầu ra chính xác.
