# Review bài tập về nhà buổi 31 - Lớp Fullstack K5

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-31/)

- Tính năng hiển thị các câu theo bài hát rất tốt.

- Khi dạo nhạc nên hiển thị thông tin bài hát(tên bài hát, tên ca sỹ) thay vì vẫn hiển thị lời bài hát trước đó.

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong file `script.js`.

- [x] Đánh giá chung: **Bài làm rất tốt**

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_29/)

- Tính năng hiển thị các câu theo bài hát rất tốt.

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`span`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `rate` được gán bằng `(offsetX * 100) / progressBarWidth;` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`span`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó `audio.currentTime` được cập nhật lại giá trị bằng `(audio.duration * rate) / 100;` tuy nhiên biến `rate` vẫn có giá trị được tính như ở trên dẫn đến lỗi không mong muốn.

- Bài làm chưa xử lý trường hợp người dùng nhấn chuột xuống thanh `progressBar` để tua và vẫn giữ chuột sau đó tiếp tục tua bằng cách di chuyển con trỏ chuột để kéo thanh `progress`.

- Khi dạo nhạc nên hiển thị thông tin bài hát(tên bài hát, tên ca sỹ) thay vì vẫn hiển thị lời bài hát trước đó.

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong file `script.js`.

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần cải thiện một số chức năng để hoàn thiện hơn.

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-31/)

- Tính năng hiển thị các câu theo bài hát rất tốt.

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `positionSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `offsetWidth` sẽ được gán giá trị bằng với giá trị của biến `positionSpace` tuy nhiên giá trị của biến `positionSpace` lúc này lại chính là giá trị mà nó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi biến `rate` được gán bằng `(offsetWidth / progressBarWidth) * 100;` rồi sau đó giá trị `audio.currentTime` được cập nhật lại `(rate * audio.duration) / 100;` dẫn đến kết quả không mong muốn.

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần chú ý một số lỗi nhỏ để hoàn thiện hơn.
