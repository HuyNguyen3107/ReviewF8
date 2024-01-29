# Huy review bài tập về nhà buổi 19 - Lớp Fullstack K5

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_19)

- [x] Bài 1:

**Bài làm chưa tốt**

- Bài làm chưa kiểm tra trường hợp số lượng số Fibonacci đầu tiên mà người nhập cần hiển thị nhập vào không phải số nguyên

- Đề bài yêu cầu hiển thị n số Fibonacci đầu tiên mà nếu như để người dùng có thể đưa tham số và kết quả vào như trong bài làm thì có thể dẫn đến việc người dùng nhập giá trị không hợp lệ hoặc không chính xác từ đó dẫn đến kết quả sai

- Kết quả bài toán chưa chính xác:

  - 10 số Fibonacci đầu tiên:

  `1, 1, 2, 3, 5, 8, 13, 21, 34, 55`

  - Bài làm:

  `0, 1, 2, 3, 5, 8, 13, 21, 34, 55, undefined`

- Có thể tham khảo đoạn code sau:

```js
const fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const listFibonacci = function (number) {
  if (number > 1) {
    return fibonacci(number) + " " + listFibonacci(number - 1);
  }
  return 1;
};

let n = 15;
if (Number.isInteger(n) && n > 0) {
  console.log(`${n} số fibonacci đầu tiên là: ${listFibonacci(n)}`);
} else {
  console.log("Nhập lại N");
}
```

- [x] Bài 2:

**Bài làm tốt**

- Bài làm chưa kiểm tra nếu số cần đảo ngược không phải là số nguyên hay giá trị nhập vào không phải là số(hợp lệ)

- Bài làm yêu cầu đảo ngược số nguyên nên cần thực hiện cả số nguyên âm và số nguyên dương

- Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `9`

- [x] Bài 3:

**Bài làm chưa tốt**

- Bài làm chưa kiểm tra trường hợp nếu số cần chuyển đổi không phải số nguyên

- Bài làm còn rất nhiều trường hợp chưa xử lý, một vài trong số đó có thể kể đến như:

  - `n = 1900`: kết quả của bài làm hiện tại là một ngàn chín trăm không không (và các số tương tự).

  - `n = 1910`: kết quả của bài làm hiện tại là một ngàn chín trăm một không (và các số tương tự).

  - `n = 2000`: kết quả của bài làm hiện tại là hai ngàn không trăm không không (và các số tương tự).

  - `n = 2011`: kết quả của bài làm hiện tại là hai ngàn không trăm một một (và các số tương tự).

  - `n = 100`: kết quả của bài làm hiện tại là một trăm không không (và các số tương tự).

  - `n = 034`: kết quả của bài làm hiện tại là hai tám (và các số tương tự).

  - `n = 11`: kết quả của bài làm hiện tại là một một (và các số tương tự từ 12 - 19).

  Và còn nhiều trường hợp khác nữa...

- Có thể tham khảo đoạn code sau:

```js
function numberToWords(num) {
  if (num > 9999 || num < 0) return "Số quá to hoặc quá nhỏ :<";
  const ones = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  let result = "";
  if (num >= 1000) {
    result += numberToWords(Math.floor(num / 1000)) + " ngàn ";
    num %= 1000;
    if (num < 100 && num > 0) result += "không trăm ";
    else if (num < 10 && num > 0) result += "lẻ ";
  }
  if (num >= 100) {
    result += numberToWords(Math.floor(num / 100)) + " trăm ";
    num %= 100;
    if (num < 10 && num > 0) result += "lẻ ";
  }
  if (num >= 10) {
    result += numberToWords(Math.floor(num / 10)) + " mươi ";
    num %= 10;
    if (
      num === 5 &&
      result[result.length - (" mươi ".length + "lăm".length)] !== "m"
    )
      result += "lăm";
    else result += numberToWords(num);
    num = -1;
  }
  if (num >= 0) result += ones[num];
  return result.trim();
}
console.log(numberToWords(-10));
```

- [x] Đánh giá chung: Bài làm chưa tốt, cần cẩn thận hơn trong việc kiểm tra các trường hợp có thể xảy ra của bài toán và kiểm tra cẩn thận lại kết quả của bài toán xem đã chính xác hay chưa, cần kiểm tra đầu vào của các bài toán xem có hợp lệ hay không.

## [Tran The Vi](https://github.com/tranthevink/f8_fullstack_k5/tree/main/Homework/day18)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp số lượng số Fibonacci đầu tiên mà người nhập cần hiển thị nhập vào không phải số nguyên

- Khi nhập vào một số âm, số 0 hoặc không nhập bất kì một giá trị nào dù đã có thông báo không hợp lệ tuy nhiên ở phần kết quả hiển thị vẫn hiển thị kết quả là 2 số fibonacci đầu tiên điều này không hợp lý

- [x] Bài 2:

**Bài làm tốt**

- Bài làm chưa kiểm tra nếu số cần đảo ngược không phải là số nguyên

- Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `11`

- [x] Bài 3:

**Bài làm rất tốt**

- Khi nhập vào một số âm hoặc số nằm ngoài khoảng từ 0 đến 9999 dù đã có thông báo không hợp lệ tuy nhiên ở phần kết quả hiển thị vẫn hiển thị kết quả ví dụ như số nhập vào là 10000 thì kết quả sẽ là `undefined Nghìn` điều này không hợp lý

- Bài làm chưa kiểm tra nếu như số cần chuyển đổi không phải là số nguyên

- [x] Đánh giá chung: **Bài làm tốt\***, chỉ cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/blob/main/buoi-19/script.js)

- [x] Bài 1:

**Bài làm rất tốt**

- Phần tử cuối cùng của dãy được hiển thị ra đang là `undefined` do khi giá trị của tham số truyền vào khi thực hiện đệ quy không hợp lệ và không thỏa mãn điều kiện trong câu lệnh if và hàm không có giá trị trả về do đó giá trị được hàm trả về sẽ là `undefined` và kết quả hiển thị của câu lệnh `console.log(getFibonacci(n));` sẽ là `undefined`

- [x] Bài 2:

**Bài làm tốt**

- Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `9`

- Kết quả của bài toán đã được hiển thị trong hàm `reverseNumber` vậy nên không cần thực hiện câu lệnh `console.log(reverseNumber(-12345));` vì hàm `reverseNumber` không có giá trị trả về nên `undefined` sẽ được hiển thị thay vào đó chỉ cần thực hiện lời gọi hàm `reverseNumber(-12345)`

- [x] Bài 3:

**Bài làm tốt**

- Bài làm chưa kiểm tra nếu số cần chuyển đổi không phải là số nguyên hoặc không phải là số

- Bài làm còn một số trường hợp chưa xử lý như:

  - `n = 21`: kết quả của bài làm hiện tại là hai mươi một (và các số tương tự).

  - `n = 121`: kết quả của bài làm hiện tại là một trăm hai mươi một (và các số tương tự).

  - `n = 1021`: kết quả của bài làm hiện tại là một ngàn không trăm hai mươi một (và các số tương tự).

  - `n = 1221`: kết quả của bài làm hiện tại là một ngàn hai trăm hai mươi một (và các số tương tự).

  - `n = 034`: kết quả của bài làm hiện tại là hai tám (và các số tương tự).

- [x] Đánh giá chung: **Bài làm tốt\***, chỉ cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.

## [Nguyen Tuan Hung](https://github.com/HungHiro/F8-fullstack-k5/tree/main/F8-FT-k5/BVN-no19)

- [x] Bài 1:

**Bài làm tốt**

- Bài làm cần chú ý cách đặt tên biến sao cho hợp lý hơn

- Bài làm chưa kiểm tra trường hợp số lượng số Fibonacci đầu tiên mà người nhập cần hiển thị nhập vào không phải số nguyên trước khi gọi hàm `showSeriesFibonacci` do đo khi nhập vào giá trị không phải số nguyên sẽ xảy ra lỗi `Maximum call stack size exceeded`.

- [x] Bài 2:

**Bài làm tốt**

- Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `11`

- [x] Bài 3:

**Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp nếu số cần chuyển đổi không nằm trong khoảng từ 0 đến 9999

- Bài làm còn một số trường hợp chưa xử lý như:

  - `n = 21`: kết quả của bài làm hiện tại là hai mươi một (và các số tương tự).

  - `n = 121`: kết quả của bài làm hiện tại là một trăm hai mươi một (và các số tương tự).

  - `n = 1021`: kết quả của bài làm hiện tại là một ngàn hai mươi một (và các số tương tự).

  - `n = 1221`: kết quả của bài làm hiện tại là một ngàn hai trăm hai mươi một (và các số tương tự).

  - `n = 034`: kết quả của bài làm hiện tại là hai tám (và các số tương tự).

  - `n = 101`: kết quả của bài làm hiện tại là một trăm một (và các số tương tự).

  - `n = 1001`: kết quả của bài làm hiện tại là một ngàn một (và các số tương tự).

  - `n = 1010`: kết quả của bài làm hiện tại là một ngàn mười (và các số tương tự).

- [x] Đánh giá chung: **Bài làm tốt**, cần lưu ý các trường hợp đặc biệt và chú ý hơn đến cách đặt tên hàm và tên biến.

## [Nguyen Van Thang](https://github.com/nvThang391/F8-FSK5/blob/main/Day_19/day19.js)

- [x] Bài 1:

**Bài làm chưa tốt**

- Kết quả bài toán chưa chính xác:

  - 10 số Fibonacci đầu tiên:

  `1, 1, 2, 3, 5, 8, 13, 21, 34, 55`

  - Bài làm:

  `0, 1, 2, 3, 5, 8, 13, 21, 34, 55, undefined, undefined`

- Có thể tham khảo đoạn code sau:

```js
const fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const listFibonacci = function (number) {
  if (number > 1) {
    return fibonacci(number) + " " + listFibonacci(number - 1);
  }
  return 1;
};

let n = 15;
if (Number.isInteger(n) && n > 0) {
  console.log(`${n} số fibonacci đầu tiên là: ${listFibonacci(n)}`);
} else {
  console.log("Nhập lại N");
}
```

- [x] Bài 2:

**Bài làm chưa tốt**

- Hướng làm chưa đúng.

- [x] Bài 3:

**Chưa làm**
