# Huy review bài tập về nhà buổi 20 - Lớp Fullstack K5

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_21)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên.

- Chưa xét đến trường hợp đầu vào là một mảng rỗng. Hiện tại, nếu đầu vào là một mảng rỗng thì sẽ thu được kết quả là Số lớn nhất trong mảng là undefined tại vị trí 0 trong mảng và Số nhỏ nhất trong mảng là undefined tại vị trí 0 trong mảng. Điều này cần xử lý để bài làm chặt chẽ hơn.

- [x] Bài 2:

**Bài làm rất tốt**

- Có thể tối ưu số lần lặp bằng cách sau:

  **Quy luật 6K±1:**

  ```js
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 2 - 1

  13 = 6 * 2 + 1       17 = 6 * 3 - 1       19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0) return false;
    }
    return true;
  }
  var array = [1, 0, 2, 3, 6, 8, 5, 7, 11, 13, 99, 9007199254740881];
  console.log(array.filter(isPrime));
  ```

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên

- Chưa xét đến trường hợp đầu vào cần chèn không phải là số

- [x] Đánh giá chung: Bài làm rất tốt, tuy nhiên cần lưu ý một số trường hợp đặc biệt có thể xảy ra của đầu vào và một số lỗi nhỏ để hoàn thiện hơn.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/tree/main/buoi-21)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm chưa xét đến trường hợp đầu vào là một mảng rỗng. Hiện tại, nếu đầu vào là một mảng rỗng thì sẽ thu được kết quả là `Số lớn nhất là: 0 ở vị trí: -1` và `Số nhỏ nhất là: 0 ở vị trí: -1`. Điều này cần xử lý để bài làm chặt chẽ hơn.

- [x] Bài 2:

**Bài làm rất tốt**

- Có thể tối ưu số lần lặp bằng cách sau:

  **Quy luật 6K±1:**

  ```js
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 2 - 1

  13 = 6 * 2 + 1       17 = 6 * 3 - 1       19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0) return false;
    }
    return true;
  }
  var array = [1, 0, 2, 3, 6, 8, 5, 7, 11, 13, 99, 9007199254740881];
  console.log(array.filter(isPrime));
  ```

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm rất tốt**

- [x] Đánh giá chung: Bài làm rất tốt, tuy nhiên cần lưu ý một số trường hợp đặc biệt có thể xảy ra của đầu vào để hoàn thiện hơn.

## [Tran The Vi](https://github.com/tranthevink/f8_fullstack_k5/tree/main/Homework/day21)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên.

- Chưa xét đến trường hợp đầu vào là một mảng rỗng. Hiện tại, nếu đầu vào là một mảng rỗng thì sẽ thu được kết quả là `Min: undefined at index undefined` và `Max: undefined at index undefined`. Điều này cần xử lý để bài làm chặt chẽ hơn.

- [x] Bài 2:

**Bài rất làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên.

- Có thể tối ưu số lần lặp bằng cách sau:

  **Quy luật 6K±1:**

  ```js
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 2 - 1

  13 = 6 * 2 + 1       17 = 6 * 3 - 1       19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0) return false;
    }
    return true;
  }
  var array = [1, 0, 2, 3, 6, 8, 5, 7, 11, 13, 99, 9007199254740881];
  console.log(array.filter(isPrime));
  ```

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên

- Chưa xét đến trường hợp đầu vào cần chèn không phải là số

- [x] Đánh giá chung: Bài làm rất tốt, tuy nhiên cần lưu ý một số trường hợp đặc biệt có thể xảy ra của đầu vào và một số lỗi nhỏ để hoàn thiện hơn.

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-21/main.js)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên.

- Chưa xét đến trường hợp đầu vào là một mảng rỗng. Hiện tại, nếu đầu vào là một mảng rỗng thì sẽ thu được kết quả là `Số lớn nhất trong mảng là undefined ở vị trí 0` và `Số bé nhất trong mảng là undefined ở vị trí 0`. Điều này cần xử lý để bài làm chặt chẽ hơn.

- [x] Bài 2:

**Bài rất làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên.

- Có thể tối ưu số lần lặp bằng cách sau:

  **Quy luật 6K±1:**

  ```js
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 2 - 1

  13 = 6 * 2 + 1       17 = 6 * 3 - 1       19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0) return false;
    }
    return true;
  }
  var array = [1, 0, 2, 3, 6, 8, 5, 7, 11, 13, 99, 9007199254740881];
  console.log(array.filter(isPrime));
  ```

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên

- Chưa xét đến trường hợp đầu vào cần chèn không phải là số

- Chưa xử lý trường hợp đầu vào vị trí cần chèn không phải là số

- [x] Đánh giá chung: Bài làm rất tốt, tuy nhiên cần lưu ý một số trường hợp đặc biệt có thể xảy ra của đầu vào và một số lỗi nhỏ để hoàn thiện hơn.

## [Luu Ngoc Duong](https://github.com/duongluu9898/f8-duongluu-fullstack-k5/blob/main/day21/main.js)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp các số trong mảng phải là số nguyên.

- Chưa xét đến trường hợp đầu vào là một mảng rỗng. Hiện tại, nếu đầu vào là một mảng rỗng thì sẽ thu được kết quả là `Số lớn nhất là: undefined Vị trí số lớn nhất trong mảng là: 0` và `Số nhỏ nhất là: undefined Vị trí số nhỏ nhất trong mảng là: 0`. Điều này cần xử lý để bài làm chặt chẽ hơn.

- [x] Bài 2:

**Chưa làm**

- [x] Bài 3:

**Bài làm rất tốt**

- [x] Bài 4:

**Chưa làm**

- [x] Đánh giá chung: **Bài làm chưa tốt**, cần lưu ý một số trường hợp đặc biệt có thể xảy ra của đầu vào, **Yêu cầu hoàn thiện bài 2 và bài 4**.
