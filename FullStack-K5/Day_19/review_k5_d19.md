# Huy review bài tập về nhà buổi 18 - Lớp Fullstack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-18/main.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- Theo như đề bài thì số km nhỏ hơn hoặc bằng 1 sẽ có giá là 15 000đ tuy nhiên bài làm chưa xét đến trường hợp km = 1.

- Đề bài yêu cầu là nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền tuy nhiên bài làm lại đang giảm 10% số tiềm mỗi km khi mà số km > 5.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm chưa tốt**

- Sai hầu hết tất cả các trường hợp , đúng được trường hợp số kwh từ 0- 50.

- Ví dụ cách tính: tháng này dùng hết 500 kwh số điện, cách tính tổng số tiền như sau: (500 - 400 = 100)kwh tính 2.927 đồng/kwh + (400-300 = 100)kwh tính 2.834 đồng/kwh + (300-200 = 100)kwh tính 2.536 đồng/kwh + (200-100 = 100) kwh tính 2.014 đồng/kwh + (100-50 = 50)kwh tính 1.734 đồng/kwh + còn lại 50kwh tính 1.678 đồng/kwh.

- Có thể tham khảo đoạn code sau:

```javascript
let kWh = 350;
let totalPrice = 0;
if (kWh > 0) {
  if (kWh <= 50) {
    totalPrice = kWh * 1678;
  } else if (51 <= kWh <= 100) {
    kWh -= 50;
    totalPrice = 50 * 1678 + kWh * 1734;
  } else if (101 <= kWh <= 200) {
    kWh -= 100;
    totalPrice = 50 * 1678 + 50 * 1734 + kWh * 2014;
  } else if (201 <= kWh <= 300) {
    kWh -= 200;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + kWh * 2536;
  } else if (301 <= kWh <= 400) {
    kWh -= 300;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kWh * 2834;
  } else {
    kWh -= 400;
    totalPrice =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kWh * 2972;
  }
  console.log(`Số tiền điện phải trả cho ${kWh}kWh là ${totalPrice} vnd`);
} else {
  console.log(`Nhap lai số kwh là số nguyên dương`);
}
```

- [x] Bài 3:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 4

**Bài chưa làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó không phải số nguyên.

- Chưa thực hiện đúng yêu cầu sau của đề bài: **Gọi hàm trong câu điều kiện if else**

- Ở bài toán nay không cần thiết phải duyệt từ 2 đến số nhỏ hơn số cần kiểm tra một đơn vị mà chỉ cần duyệt đến căn bậc 2 của số cần kiểm tra là đủ

- Có thể tham khảo đoạn code sau:

```javascript
function isPrime(number) {
  if (
    number % 1 !== 0 ||
    number < 2 ||
    (number % 2 === 0 && number !== 2) ||
    (number % 3 === 0 && number !== 3)
  )
    return false;
  for (let i = 5; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return false;
  return true;
}

if (isPrime(3)) {
  console.log("Thỏa mãn điều kiện là số nguyên tố`");
} else {
  console.log("Không thỏa mãn điều kiện là số nguyên tố`");
}
```

- [x] Bài 5:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 6:

**Bài làm rất tốt**

- Có thể sử dụng `css` để hiển thị bàn cờ trên màn hình. Bài làm hiện tại bà cờ không được hiển thị trên màn hình.

- [x] Bài 7:

**Bài làm rất tốt**

- [x] Bài 8:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số nhỏ hơn 1 hoặc không phải số nguyên.

- [x] Đánh giá chung: Bài làm khá tốt, tuy nhiên cần đọc kỹ yêu cầu đề bài ở bài 1, bài 2, bài 4 và một số lỗi nhỏ để hoàn thiện và chỉnh chu hơn.

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_18/js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Cách sử dụng câu lệnh rẽ nhánh `if else` như trong bài là không hợp lý vì nếu như theo bài làm thì chỉ cần số km thỏa mãn một trong các điều kiện của câu lệnh `if` thì các trường hợp còn lại sẽ không được xét đến nữa.

- Cách giải quyết bài toán cũng chưa đúng vì cả một quãng đường thì bài làm chỉ đang cộng vào tổng số tiền phải trả duy nhất số tiền của 1km theo giá trong khoảng số km đi được và thậm chí bài làm còn đang hiển thị số tiền của 1km trong các khoảng số km đi được chứ khổng phải tổng số tiền.

- Cách giải đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm chưa tốt**

- Hiểu sai yêu cầu đề bài, bài làm chỉ đang hiển thị số tiền phải trả cho 1kWh.

- Ví dụ cách tính: tháng này dùng hết 500 kwh số điện, cách tính tổng số tiền như sau: (500 - 400 = 100)kwh tính 2.927 đồng/kwh + (400-300 = 100)kwh tính 2.834 đồng/kwh + (300-200 = 100)kwh tính 2.536 đồng/kwh + (200-100 = 100) kwh tính 2.014 đồng/kwh + (100-50 = 50)kwh tính 1.734 đồng/kwh + còn lại 50kwh tính 1.678 đồng/kwh.

- Có thể tham khảo đoạn code sau:

```javascript
let kWh = 350;
let totalPrice = 0;
if (kWh > 0) {
  if (kWh <= 50) {
    totalPrice = kWh * 1678;
  } else if (51 <= kWh <= 100) {
    kWh -= 50;
    totalPrice = 50 * 1678 + kWh * 1734;
  } else if (101 <= kWh <= 200) {
    kWh -= 100;
    totalPrice = 50 * 1678 + 50 * 1734 + kWh * 2014;
  } else if (201 <= kWh <= 300) {
    kWh -= 200;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + kWh * 2536;
  } else if (301 <= kWh <= 400) {
    kWh -= 300;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kWh * 2834;
  } else {
    kWh -= 400;
    totalPrice =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kWh * 2972;
  }
  console.log(`Số tiền điện phải trả cho ${kWh}kWh là ${totalPrice} vnd`);
} else {
  console.log(`Nhap lai số kwh là số nguyên dương`);
}
```

- [x] Bài 3:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 4:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào không phải số nguyên hoặc là số nhỏ hơn hoặc bằng 1.

- Ở bài toán nay không cần thiết phải duyệt từ 2 đến số nhỏ hơn số cần kiểm tra một đơn vị mà chỉ cần duyệt đến căn bậc 2 của số cần kiểm tra là đủ

- Có thể tham khảo đoạn code sau:

```javascript
function isPrime(number) {
  if (
    number % 1 !== 0 ||
    number < 2 ||
    (number % 2 === 0 && number !== 2) ||
    (number % 3 === 0 && number !== 3)
  )
    return false;
  for (let i = 5; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return false;
  return true;
}

if (isPrime(3)) {
  console.log("Thỏa mãn điều kiện là số nguyên tố`");
} else {
  console.log("Không thỏa mãn điều kiện là số nguyên tố`");
}
```

- [x] Bài 5:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 6:

**Bài làm rất tốt**

- [x] Bài 7:

**Bài làm rất tốt**

- Tuy nhiên cần chỉnh chu hơn trong việc hiển thị bảng cửu chương trên giao diện một cách rõ ràng và đẹp hơn.

- [x] Bài 8:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số nhỏ hơn 1 hoặc không phải số nguyên.

- [x] Đánh giá chung: Bài làm khá tốt, tuy nhiên cần đọc kỹ yêu cầu đề bài ở bài 1, bài 2 và một số lỗi nhỏ để hoàn thiện và chỉnh chu hơn.

## [Nguyen Tuan Hung](https://github.com/HungHiro/F8-fullstack-k5/tree/main/F8-FT-k5/BVN-no18)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- Số kWh là đại lượng không đổi nên khai báo bằng từ khóa `const`.

- [x] Bài 3:

**Bài làm chưa tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- Biểu thức tính của đề bài là `S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)` tuy nhiên theo như trong bài làm thì biểu thức viết ra sẽ là `S= 0*1 + 1*2 + 2*3 + 3*4 + ... + n*(n+1)` do vòng lặp bắt đầu từ 0 nên kết quả của biểu thức không đúng với yêu cầu đề bài.

- [x] Bài 4:

**Bài làm chưa tốt**

- Đề bài yêu cầu viết hàm kiểm tra số nguyên tố trong khi bài làm không viết hàm kiểm tra

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào không phải số nguyên hoặc là số nhỏ hơn hoặc bằng 1.

- Ở bài toán nay không cần thiết phải duyệt từ 2 đến số nhỏ hơn số cần kiểm tra một đơn vị mà chỉ cần duyệt đến căn bậc 2 của số cần kiểm tra là đủ

- Có thể tham khảo đoạn code sau:

```javascript
function isPrime(number) {
  if (
    number % 1 !== 0 ||
    number < 2 ||
    (number % 2 === 0 && number !== 2) ||
    (number % 3 === 0 && number !== 3)
  )
    return false;
  for (let i = 5; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return false;
  return true;
}

if (isPrime(3)) {
  console.log("Thỏa mãn điều kiện là số nguyên tố`");
} else {
  console.log("Không thỏa mãn điều kiện là số nguyên tố`");
}
```

- [x] Bài 5:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 6:

**Bài làm rất tốt**

- Có thể tìm hiểu về `DOM` để hiển thị bàn cờ vua lên màn hình hoặc hiển thị các chữ như **black** và **white** để tượng trưng cho các ô trên bàn cờ thay vì để **@** và **#**.

- [x] Bài 7:

**Bài làm rất tốt**

- Trong mỗi cột của bảng cửu chương thiếu một phép tính nhân với 10.

- [x] Bài 8:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số nhỏ hơn 1 hoặc không phải số nguyên.

- [x] Đánh giá chung: Bài làm khá tốt, tuy nhiên cần đọc kỹ yêu cầu đề bài ở bài 1, bài 3, bài 4 và một số lỗi nhỏ để hoàn thiện và chỉnh chu hơn.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/tree/main/buoi-18)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Đề bài yêu cầu **nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền** vậy nên nếu số km > 120 thì sau khi tính tổng ta sẽ trừ đi 10% của tổng số tiền đó và discount ở đây là 10% và quy ra giá tiền thì còn phải phụ thuộc vào số tổng số tiền phải thanh toán chứ không phụ thuộc vào giá tiền của km được quy định trong các khoảng và theo như bài làm thì khi khai báo discount và tính luôn là `var discount = (price / 100) * 10;` thì discount ở đây sẽ bằng 0 vì biến price ở trên được khai báo bằng 0.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm chưa tốt**

- Sai hầu hết tất cả các trường hợp , đúng được trường hợp số kwh từ 0- 50.

- Ví dụ cách tính: tháng này dùng hết 500 kwh số điện, cách tính tổng số tiền như sau: (500 - 400 = 100)kwh tính 2.927 đồng/kwh + (400-300 = 100)kwh tính 2.834 đồng/kwh + (300-200 = 100)kwh tính 2.536 đồng/kwh + (200-100 = 100) kwh tính 2.014 đồng/kwh + (100-50 = 50)kwh tính 1.734 đồng/kwh + còn lại 50kwh tính 1.678 đồng/kwh.

- Có thể tham khảo đoạn code sau:

```javascript
let kWh = 350;
let totalPrice = 0;
if (kWh > 0) {
  if (kWh <= 50) {
    totalPrice = kWh * 1678;
  } else if (51 <= kWh <= 100) {
    kWh -= 50;
    totalPrice = 50 * 1678 + kWh * 1734;
  } else if (101 <= kWh <= 200) {
    kWh -= 100;
    totalPrice = 50 * 1678 + 50 * 1734 + kWh * 2014;
  } else if (201 <= kWh <= 300) {
    kWh -= 200;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + kWh * 2536;
  } else if (301 <= kWh <= 400) {
    kWh -= 300;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kWh * 2834;
  } else {
    kWh -= 400;
    totalPrice =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kWh * 2972;
  }
  console.log(`Số tiền điện phải trả cho ${kWh}kWh là ${totalPrice} vnd`);
} else {
  console.log(`Nhap lai số kwh là số nguyên dương`);
}
```

- [x] Bài 3:

**Bài làm chưa tốt**

- Biểu thức tính của đề bài là `S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)` tuy nhiên theo như trong bài làm thì biểu thức viết ra sẽ là `S= 0*1 + 1*2 + 2*3 + 3*4 + ... + n*(n+1)` do vòng lặp bắt đầu từ 0 nên kết quả của biểu thức không đúng với yêu cầu đề bài.

- [x] Bài 4:

**Bài chưa làm tốt**

- Chưa thực hiện đúng yêu cầu sau của đề bài: **Gọi hàm trong câu điều kiện if else**

- Bài làm chưa kiểm tra trường hợp nếu như `n = 1`

- Ở bài toán nay không cần thiết phải duyệt từ 2 đến số nhỏ hơn số cần kiểm tra một đơn vị mà chỉ cần duyệt đến căn bậc 2 của số cần kiểm tra là đủ

- Có thể tham khảo đoạn code sau:

```javascript
function isPrime(number) {
  if (
    number % 1 !== 0 ||
    number < 2 ||
    (number % 2 === 0 && number !== 2) ||
    (number % 3 === 0 && number !== 3)
  )
    return false;
  for (let i = 5; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return false;
  return true;
}

if (isPrime(3)) {
  console.log("Thỏa mãn điều kiện là số nguyên tố`");
} else {
  console.log("Không thỏa mãn điều kiện là số nguyên tố`");
}
```

- [x] Bài 5:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 6:

**Bài làm rất tốt**

- [x] Bài 7:

**Bài làm rất tốt**

- Tuy nhiên cần chỉnh chu hơn trong việc hiển thị bảng cửu chương trên giao diện một cách rõ ràng và đẹp hơn.

- [x] Bài 8:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số nhỏ hơn 1 hoặc không phải số nguyên.

- [x] Đánh giá chung: Bài làm tạm ổn. cần đọc kỹ yêu cầu đề bài ở bài 1, bài 2, bài 3, bài 4 và một số lỗi nhỏ để hoàn thiện và chỉnh chu hơn.

## [Bui Minh Chi](https://github.com/ronbanh549/f8-fullstack-k5/blob/main/Day-17/bai1.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm tốt**

- Nên đặt tên biến bằng tiếng anh

- Chưa có câu lệnh hiển thị kết quả

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- [x] Bài 3:

**Bài làm chưa tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- Hướng làm bài chưa đúng.

- [x] Bài 4:

**Bài làm tốt**

- Nên đặt tên hàm bằng tiếng anh.

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào không phải số nguyên.

- Có thể tham khảo đoạn code sau:

```javascript
function isPrime(number) {
  if (
    number % 1 !== 0 ||
    number < 2 ||
    (number % 2 === 0 && number !== 2) ||
    (number % 3 === 0 && number !== 3)
  )
    return false;
  for (let i = 5; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return false;
  return true;
}

if (isPrime(3)) {
  console.log("Thỏa mãn điều kiện là số nguyên tố`");
} else {
  console.log("Không thỏa mãn điều kiện là số nguyên tố`");
}
```

- [x] Bài 5:

**Chưa làm**

- [x] Bài 6:

**Chưa làm**

- [x] Bài 7:

**Bài làm rất tốt**

- [x] Bài 8:

**Bài làm chưa tốt**

- Sai yêu cầu đề bài.

- [x] Đánh giá chung: **Bài làm chưa tốt**, cần đọc kỹ yêu cầu đề bài ở bài 1, bài 3, bài 8. Chú ý hơn đến các trường hợp có thể xảy ra của bài toán. **Yêu cầu hoàn thành bài 5 và bài 6**.

## [Luu Ngoc Duong](https://github.com/duongluu9898/f8-duongluu-fullstack-k5/blob/main/day18/day18.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm chưa tốt**

- Sai hầu hết tất cả các trường hợp , đúng được trường hợp số kwh từ 0- 50.

- Ví dụ cách tính: tháng này dùng hết 500 kwh số điện, cách tính tổng số tiền như sau: (500 - 400 = 100)kwh tính 2.927 đồng/kwh + (400-300 = 100)kwh tính 2.834 đồng/kwh + (300-200 = 100)kwh tính 2.536 đồng/kwh + (200-100 = 100) kwh tính 2.014 đồng/kwh + (100-50 = 50)kwh tính 1.734 đồng/kwh + còn lại 50kwh tính 1.678 đồng/kwh.

- Có thể tham khảo đoạn code sau:

```javascript
let kWh = 350;
let totalPrice = 0;
if (kWh > 0) {
  if (kWh <= 50) {
    totalPrice = kWh * 1678;
  } else if (51 <= kWh <= 100) {
    kWh -= 50;
    totalPrice = 50 * 1678 + kWh * 1734;
  } else if (101 <= kWh <= 200) {
    kWh -= 100;
    totalPrice = 50 * 1678 + 50 * 1734 + kWh * 2014;
  } else if (201 <= kWh <= 300) {
    kWh -= 200;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + kWh * 2536;
  } else if (301 <= kWh <= 400) {
    kWh -= 300;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kWh * 2834;
  } else {
    kWh -= 400;
    totalPrice =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kWh * 2972;
  }
  console.log(`Số tiền điện phải trả cho ${kWh}kWh là ${totalPrice} vnd`);
} else {
  console.log(`Nhap lai số kwh là số nguyên dương`);
}
```

- [x] Bài 3:

**Bài làm chưa tốt**

- Biểu thức tính của đề bài là `S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)` tuy nhiên theo như trong bài làm thì biểu thức viết ra sẽ là `S= 0*1 + 1*2 + 2*3 + 3*4 + ... + n*(n+1)` do vòng lặp bắt đầu từ 0 nên kết quả của biểu thức không đúng với yêu cầu đề bài.

- [x] Bài 4:

**Bài làm chưa tốt**

- Sai yêu cầu đề bài.

- [x] Bài 5:

**Bài làm tốt**

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm hoặc không phải số nguyên.

- [x] Bài 6:

**Bài làm rất tốt**

- [x] Bài 7:

**Bài làm rất tốt**

- Tuy nhiên cần chỉnh chu hơn trong việc hiển thị bảng cửu chương trên giao diện một cách rõ ràng và đẹp hơn.

- [x] Bài 8:

**Bài làm chưa tốt**

- [x] Đánh giá chung: **Bài làm đa số đều chưa tốt**, cần đọc kỹ yêu cầu đề bài ở toàn bộ các bài được đánh giá là chưa tốt. Chú ý hơn đến các trường hợp có thể xảy ra của bài toán. Cần chỉnh chu và dành nhiều thời gian hơn cho bài tập về nhà.

## [Nguyen Van Thang](https://github.com/nvThang391/F8-FSK5/blob/main/Day_18/day18.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm đang hiểu sai yêu cầu bài toán, hiện bài làm đang lấy số km đi được nhân với giá tiền của km được quy định trong khoảng đó với tất cả số km đi được. Nhưng đúng phải là cộng dồn số tiền ứng với số km trong từng khoảng.

  Ví dụ cụ thể: Giả sử tổng quãng đường đi được là 10km thì sẽ chia ra làm 3 khoảng:

  - 1km đầu tiên vẫn sẽ tính là 15 000đ. Vì vậy số tiền phải trả cho 1km đầu là: 15 000 \* 1 = 15 000đ.

  - 4km tiếp theo sẽ tính là 13 500đ / 1km. Vì vậy số tiền phải trả cho 4km tiếp theo là: 13 500 \* 4 = 54 000đ

  - 5km cuối cùng sẽ tính là 11 000đ / 1km. Vì vậy số tiền phải trả cho 4km cuối là 11 000 \* 5 = 55 000đ.

  - Như vậy tổng số tiền phải trả cho 10km là 15 000 + 54 000 + 55 000 = 124 000đ.

- Bài làm hiện còn chưa kiểm tra đầy đủ các điều kiện ở đầu vào nếu như nó là số âm.

- Có thể tham khảo đoạn code sau:

```js
const distance = 130;
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
```

- [x] Bài 2:

**Bài làm chưa tốt**

- Nên đặt tên biến bằng tiếng anh.

- Sai hầu hết tất cả các trường hợp , đúng được trường hợp số kwh từ 0- 50.

- Ví dụ cách tính: tháng này dùng hết 500 kwh số điện, cách tính tổng số tiền như sau: (500 - 400 = 100)kwh tính 2.927 đồng/kwh + (400-300 = 100)kwh tính 2.834 đồng/kwh + (300-200 = 100)kwh tính 2.536 đồng/kwh + (200-100 = 100) kwh tính 2.014 đồng/kwh + (100-50 = 50)kwh tính 1.734 đồng/kwh + còn lại 50kwh tính 1.678 đồng/kwh.

- Có thể tham khảo đoạn code sau:

```javascript
let kWh = 350;
let totalPrice = 0;
if (kWh > 0) {
  if (kWh <= 50) {
    totalPrice = kWh * 1678;
  } else if (51 <= kWh <= 100) {
    kWh -= 50;
    totalPrice = 50 * 1678 + kWh * 1734;
  } else if (101 <= kWh <= 200) {
    kWh -= 100;
    totalPrice = 50 * 1678 + 50 * 1734 + kWh * 2014;
  } else if (201 <= kWh <= 300) {
    kWh -= 200;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + kWh * 2536;
  } else if (301 <= kWh <= 400) {
    kWh -= 300;
    totalPrice = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kWh * 2834;
  } else {
    kWh -= 400;
    totalPrice =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kWh * 2972;
  }
  console.log(`Số tiền điện phải trả cho ${kWh}kWh là ${totalPrice} vnd`);
} else {
  console.log(`Nhap lai số kwh là số nguyên dương`);
}
```

- [x] Bài 3:

**Chưa làm**

- [x] Bài 4:

**Chưa làm**

- [x] Bài 5:

**Chưa làm**

- [x] Bài 6:

**Chưa làm**

- [x] Bài 7:

**Chưa làm**

- [x] Bài 8:

**Chưa làm**

- [x] Đánh giá chung: **Bài làm chưa tốt. Yêu câu hoàn thiện các bài chưa làm.**
