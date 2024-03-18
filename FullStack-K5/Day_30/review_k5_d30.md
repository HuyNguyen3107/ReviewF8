# Review bài tập về nhà buổi 29 - Lớp Fullstack K5

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_29/)

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`span`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `rate` được gán bằng `(offsetX * 100) / progressBarWidth;` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`span`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó `audio.currentTime` được cập nhật lại giá trị bằng `(audio.duration * rate) / 100;` tuy nhiên biến `rate` vẫn có giá trị được tính như ở trên dẫn đến lỗi không mong muốn.

- Bài làm chưa xử lý trường hợp người dùng nhấn chuột xuống thanh `progressBar` để tua và vẫn giữ chuột sau đó tiếp tục tua bằng cách di chuyển con trỏ chuột để kéo thanh `progress`.

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần cải thiện một số chức năng để hoàn thiện hơn.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-29/)

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `positionSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó hàm `setProgress` sẽ được gọi khi đó biến `rate` trong hàm sẽ được gán bằng `(positionSpace * 100) / progressBarWidth;` tuy nhiên giá trị `positionSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi cập nhật `audio.currentTime = (audio.duration * rate) / 100;` sẽ dẫn đến kết quả không mong muốn.

- Lỗi tương tự cũng xảy ra khi `document` lắng nghe được sự kiện `mouseup` từ phía người dùng.

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-29/)

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `positionSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `offsetWidth` sẽ được gán giá trị bằng với giá trị của biến `positionSpace` tuy nhiên giá trị của biến `positionSpace` lúc này lại chính là giá trị mà nó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi biến `rate` được gán bằng `(offsetWidth / progressBarWidth) * 100;` rồi sau đó giá trị `audio.currentTime` được cập nhật lại `(rate * audio.duration) / 100;` dẫn đến kết quả không mong muốn.

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần chú ý một số lỗi nhỏ để hoàn thiện hơn.

## [Nguyen Van Thang](https://nvthang391.github.io/F8-FSK5/day_29/)

- Cần ẩn audio mặc định của trình duyệt.

- Khi tua nhạc bằng việc kéo thanh `progress` xảy ra tình trạng khi người dùng đang thực hiện kéo âm thanh phát ra nghe như đĩa bị xước do trong bài làm khi `document` lắng nghe được sự kiện `mousemove` từ phía người dùng và khi đó hàm `handleDrag` sẽ được gọi trong hàm này thực hiện việc cập nhật lại `audio.currentTime` do đó dẫn đến kết quả như trên.

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần cải thiện một số chức năng để hoàn thiện hơn.
