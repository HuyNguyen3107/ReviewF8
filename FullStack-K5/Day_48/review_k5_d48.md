# Review bài tập về nhà buổi 48 - Lớp Fullstack K5

## [Pham Minh Hieu](https://f8-fullstack-k6.vercel.app/)

- **Chức năng chuyển và lưu giao diện sáng tối:**

  - Bài làm xử lý rất tốt chức năng này.

- **Chức năng thay đổi range đoán số:**

  - Bài làm xử lý rất tốt chức năng này, tuy nhiên khi thay đổi xong range thì thông báo đang được hiển thị tới hai lần giống nhau và thay vì thông báo rằng **Chào mừng bạn đến với trò chơi đoán số!** thì nên thông báo cho người dùng là **Thay đổi range thành công!**.

- **Chức năng đoán số:**

  - Bài làm xử lý rất tốt chức năng này.

  - Khi reload lại trang chưa autofocus vào input.

  - Khi người dùng nhập xong một giá trị và bấm `enter` để đoán số thay vì xóa giá trị đó khỏi ô `input` thì nên giữ nguyên giá trị đó để người dùng nhập, chỉnh sửa nhập các giá trị khác. Ví dụ trong trường hợp người dùng sẽ đoán các giá trị lần lượt là 22, 23, 24 vậy thì nếu theo như bài làm, khi người dùng nhập vào giá trị 22 và bấm `enter` thì khi đó giá trị sẽ bị xóa và người dùng phải tiếp tục nhập vào số 23 điều này không tốt cho trải nghiệm người dùng, có thể giữ nguyên giá trị để người dùng sử dụng mũi tên **lên** để chuyển đổi giá trị của ô `input` thành 23, 24....

- **Chức năng thống kê kết quả của người chơi:**

  - Khi người dùng đã đoán hết số lượt hoặc chưa đoán hết số lượt nhưng đã đoán đúng kết quả và `click` vào `button` **Chơi lại** hoặc bấm nút `enter` để chơi lại thì chưa `scroll` table về bảng đầu tiên.

- **Code format:**

  - Các file `index.js` trong các folder như `ButtonTheme`, `Slide`,... trong folder `components` là một `component` và nó phải được đặt tên theo `component` tương ứng và tên của một `component` cần phải được viết theo quy tắc `Pascal Case`.

  - File `TableHelper.js` không phải là một `component` vì vậy không cần viết theo quy tắc `Pascal Case` và nên tạo một folder ngang hàng với folder `components` đặt tên là `helpers` rồi đưa file này vào trong đó.

  - File `Tooltip.jsx` là một `component` vì vậy cần tách ra một folder `component` khác thay vì đặt trong folder `Slide`.

  - Hai file trong folder `hooks` không phải là `component` và không trả về `jsx` mà chỉ `export` các `custom hook` vậy nên đặt là tên file có đuôi là `.js` sẽ hợp lý hơn.

- [x] Đánh giá chung: **Bài làm rất tốt**, cần chú ý một số lỗi nhỏ và cách triển khai cấu trúc dự án để hoàn thiện hơn.
