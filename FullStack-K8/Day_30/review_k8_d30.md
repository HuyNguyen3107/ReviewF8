# Review bài tập về nhà buổi 30 - Lớp FullStack K8

## [Trung Tuyen](https://ptt-fullstack.github.io/JavaScript-F8/DAY-30/index.html)

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu cam (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `moveSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu cam (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó hàm `handleMouseUp` sẽ được gọi và biến `rate` trong hàm sẽ được gán bằng `(moveSpace / progressBarWidth) * 100;` tuy nhiên giá trị `moveSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi hàm `updateAudioTime` được gọi với đối số truyền vào là biến `rate` thì sẽ cập nhật `audio.currentTime = (audio.duration * value) / 100;` và dẫn đến kết quả không mong muốn.

- Đánh giá chung: **Bài làm tốt**.

## [Nguyen Xuan Phong](https://xuanphong03.github.io/Fullstack-F8-Javascript/dom/day-05/index.html)

- Nên ẩn hiển thị thẻ `audio` đi bằng cách bỏ thuộc tính `controls` của thẻ `audio`.

- Đánh giá chung: **Bài làm rất tốt**.

## [Le Nhung](https://nhunglt1801.github.io/f8-fullstack-k8-exercise/day-30/index.html)

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `moveSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `rate` sẽ được gán bằng `(moveSpace / progressBarWidth) * 100;` tuy nhiên giá trị `moveSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi cập nhật `audio.currentTime = (audio.duration * rate) / 100;` sẽ dẫn đến kết quả không mong muốn.

- Đánh giá chung: **Bài làm tốt**.

## [Bui Duc Duong](https://buiduong2.github.io/F8-Javascript/lession29/)

- Nên ẩn hiển thị thẻ `audio` đi bằng cách bỏ thuộc tính `controls` của thẻ `audio`.

- Khi bài nhạc kết thúc cần `reset` toàn bộ mọi thứ về 0 luôn thay vì cần phải bấm vào nút `play` thì mới `reset`.

- Đánh giá chung: **Bài làm rất tốt**.

## [Lam Hoang](https://nvhlam2211.github.io/BTVN-F8/Day-30/ex.html)

- Khi tua nhạc bằng cách nhấn chuột xuống(`mousedown`) `progressBar` hoặc nhấn giữ rồi kéo, bài làm đang cập nhật lại `currentTime` của `audio` hai lần, một lần khi người dùng nhấn chuột xuống và `progressBar` lắng nghe được sự kiện `mousedown` và một lần khi người dùng nhả chuột và `document` cũng sẽ lắng nghe được sự kiện `mouseup`, điều này đến việc khi người dùng tua nhạc nghe sẽ bị giật.

- Đánh giá chung: **Bài làm tốt**.

## [Cu Tien Thinh](https://thinh060903.github.io/F8-Fullstack-K8/Day-30/index.html)

- Nên ẩn hiển thị thẻ `audio` đi bằng cách bỏ thuộc tính `controls` của thẻ `audio`.

- Khi `hover` vào chấm tròn màu tím (`progressSpan`) thời gian xem trước hiển thị chưa chính xác vì khi `progressBar` lắng nghe sự kiện `mousemove` biến `hoverRate` được gán bằng `(e.offsetX / progressBarWidth) * duration;` tuy nhiên `e.offsetX` trong trường hợp này không phải của `progressBar` mà là của `progressSpan`.

- Khi tua nhạc cần kiểm tra xem hiện tại người dùng có đang tua nhạc hay không để tránh việc khi người dùng đang tua nhạc `width` của `progress` bị thay đổi do khi nhạc đang được phát `width` của `progress` sẽ thay đổi liên tục theo `currentTime` của `audio`.

- Trường hợp tua nhạc bằng cách bấm vào chấm tròn màu tím(`progressSpan`) rồi sau đó giữ và kéo, khi người dùng nhấn chuột xuống(`mousedown`) `progressSpan` `currentTime` của `audio` luôn quay về khoảng thời gian đầu tiên dẫn đến việc tua nhạc bằng cách này diến ra không chính xác, điều này là do việc truy xuất đến thẻ `span` nằm trong thẻ `div` có `class` là `progress` chưa chính xác, với cách truy xuất hiện tại thì thẻ được truy xuất sẽ là thẻ `span` xuất hiện đầu tiên(`<span>00:00</span>`).

  Đề xuất sửa thành:

  ```js
  var progressSpan = progress.querySelector("span");
  ```

- Đánh giá chung: **Bài làm tốt**, tuy nhiên cần cải thiện một số chức năng để hoàn thiện hơn.

## [Nguyen Duc Nhat](https://nhat0712.github.io/F8-ex/Buoi_30/index.html)

- Khi bài nhạc kết thúc cần `reset` toàn bộ mọi thứ về 0 luôn thay vì cần phải bấm vào nút `play` thì mới `reset`.

- Khi tua nhạc bằng việc kéo thanh `progress` xảy ra tình trạng khi người dùng đang thực hiện kéo âm thanh phát ra nghe như đĩa bị xước do trong bài làm khi `document` lắng nghe được sự kiện `mousemove` từ phía người dùng và khi đó hàm `handleDrag` sẽ được gọi trong hàm này thực hiện việc cập nhật lại `audio.currentTime` do đó dẫn đến kết quả như trên.

- Khi `hover` vào chấm tròn màu tím (`progressSpan`) thời gian xem trước hiển thị chưa chính xác vì khi `progressBar` lắng nghe sự kiện `mousemove` biến `rate` được gán bằng `(offsetX / progressBarWidth) * audio.duration;`(`offsetX = e.offsetX;`) tuy nhiên `e.offsetX` trong trường hợp này không phải của `progressBar` mà là của `progressSpan`.

- Đánh giá chung: **Bài làm tốt**, tuy nhiên cần cải thiện một số chức năng để hoàn thiện hơn.

## [Nguyen Quang Khai](https://khainq-k.github.io/f8-fullstack-k8/Day_30/)

- Khi `hover` vào chấm tròn màu đỏ (`progressBarDot`) thời gian xem trước hiển thị chưa chính xác vì khi `progressBarEl` lắng nghe sự kiện `mousemove` biến `currentTime` được gán bằng `(progressBarPercent / 100) * audio.duration;` trong khi `progressBarPercent` được tính bằng `(e.offsetX / _this.progressBarWidth) * 100;` mà `e.offsetX` trong trường hợp này không phải của `progressBarEl` mà là của `progressBarDot`.

- Khi tua nhạc bằng cách nhấn chuột xuống(`mousedown`) `progressBarEl` bài làm đang cập nhật lại `currentTime` của `audio` hai lần, một lần khi người dùng nhấn chuột xuống và `progressBarEl` lắng nghe được sự kiện `mousedown` và một lần khi người dùng nhả chuột và `document` cũng sẽ lắng nghe được sự kiện `mouseup`, điều này đến việc khi người dùng tua nhạc nghe sẽ bị giật.

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu đỏ (`progressBarDot`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBarEl` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBarEl` thì biến `moveSpace` được gán bằng `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu đỏ (`progressBarDot`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `rate` sẽ được gán bằng `(_this.moveSpace / _this.progressBarWidth) * 100;` tuy nhiên giá trị `moveSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBarEl` do đó khi cập nhật `audio.currentTime = currentTime;` sẽ dẫn đến kết quả không mong muốn.

- Đánh giá chung: **Bài làm tốt**, tuy nhiên cần cải thiện một số chức năng để hoàn thiện hơn.
