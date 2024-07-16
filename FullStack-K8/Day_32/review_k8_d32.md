# Review bài tập về nhà buổi 32 - Lớp FullStack K8

## [Trung Tuyen](https://ptt-fullstack.github.io/JavaScript-F8/DAY-32/index.html)

- [x] **Đánh giá chung:** Bài làm rất tốt.

## [Nguyen Xuan Phong](https://xuanphong03.github.io/Fullstack-F8-Javascript/dom-node/exercise/day-02/index.html)

- [x] **Đánh giá chung:** Bài làm rất tốt.

## [Lam Hoang](https://nvhlam2211.github.io/BTVN-F8/Day-32/ex.html)

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- Chỉ cần hiển thị thông tin bài hát(tên bài hát, tên ca sỹ) khi dạo nhạc thay vì luôn hiển thị mỗi khi ca sỹ ngừng hát do mỗi khi ca sỹ ngừng hát thì khoảng thời gian đó sẽ không nằm trong khoảng `startTime` và `endTime` của bất kỳ một câu nào trong bài hát vậy nên biến `index` trong hàm `handleLyric` sẽ có giá trị bằng `-1` và `karaokeContent.innerHTML` sẽ được gán bằng `songInfo`. Có thể sửa lại bằng cách kiểm tra khoảng thời gian giữa thời gian kết thúc của một câu và thời gian bắt đầu của câu kế tiếp lớn hơn hoặc bằng một khoảng thời gian nhất định thì sẽ hiển thị thông tin bài hát.

- [x] **Đánh giá chung:** Bài làm tốt.

## [Bui Duc Duong](https://buiduong2.github.io/F8-Javascript/lession31/)

- [x] **Đánh giá chung:** Bài làm rất tốt.

## [Vu Thi Hoai Thu](https://hoaithu222.github.io/f8_offline_k8/homework/Day-32/ex01.html)

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `moveSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `rate` sẽ được gán bằng `(moveSpace / progressBarWidth) * 100;` tuy nhiên giá trị `moveSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi cập nhật `audio.currentTime = (rate / 100) * audio.duration;` sẽ dẫn đến kết quả không mong muốn.

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- [x] **Đánh giá chung:** Bài làm tốt.

## [Vu Tri Tung](https://tungv62333.github.io/f8-offline-k8/Javascript/Lesson-32/ex01.html)

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- Khi tua nhạc bằng cách nhấn chuột xuống(`mousedown`) `progressBar` bài làm đang cập nhật lại `currentTime` của `audio` hai lần, một lần khi người dùng nhấn chuột xuống và `progressBar` lắng nghe được sự kiện `mousedown` và một lần khi người dùng nhả chuột và `document` cũng sẽ lắng nghe được sự kiện `mouseup`, điều này đến việc khi người dùng tua nhạc nghe sẽ bị giật.

- Bài làm chưa xử lý trường hợp hiển thị thông tin bài hát khi dạo nhạc.

- [x] **Đánh giá chung:** Bài làm tốt.

## [Nguyen Quang Khai](https://khainq-k.github.io/f8-fullstack-k8/Day_32/)

- Khi `hover` vào chấm tròn màu đỏ (`progressBarDot`) thời gian xem trước hiển thị chưa chính xác vì khi `progressBarEl` lắng nghe sự kiện `mousemove` biến `currentTime` được gán bằng `(progressBarPercent / 100) * audio.duration;` trong khi `progressBarPercent` được tính bằng `(e.offsetX / _this.progressBarWidth) * 100;` mà `e.offsetX` trong trường hợp này không phải của `progressBarEl` mà là của `progressBarDot`.

- Khi tua nhạc bằng cách nhấn chuột xuống(`mousedown`) `progressBarEl` bài làm đang cập nhật lại `currentTime` của `audio` hai lần, một lần khi người dùng nhấn chuột xuống và `progressBarEl` lắng nghe được sự kiện `mousedown` và một lần khi người dùng nhả chuột và `document` cũng sẽ lắng nghe được sự kiện `mouseup`, điều này đến việc khi người dùng tua nhạc nghe sẽ bị giật.

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu đỏ (`progressBarDot`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBarEl` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBarEl` thì biến `moveSpace` được gán bằng `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu đỏ (`progressBarDot`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `rate` sẽ được gán bằng `(_this.moveSpace / _this.progressBarWidth) * 100;` tuy nhiên giá trị `moveSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBarEl` do đó khi cập nhật `audio.currentTime = currentTime;` sẽ dẫn đến kết quả không mong muốn.

- Bài làm chưa xử lý trường hợp hiển thị thông tin bài hát khi dạo nhạc.

## [Le Nhung](https://nhunglt1801.github.io/f8-fullstack-k8-exercise/day-32/)

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` hoặc khi người dùng chưa tua nhạc thì bài hát sẽ được phát lại từ đầu do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `moveSpace` được gán bằng `offsetX` hay chính là `e.offsetX` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột(`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `rate` sẽ được gán bằng `(moveSpace / progressBarWidth) * 100;` tuy nhiên giá trị `moveSpace` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi cập nhật `audio.currentTime = (audio.duration * rate) / 100;` sẽ dẫn đến kết quả không mong muốn.

- Chỉ cần hiển thị thông tin bài hát(tên bài hát, tên ca sỹ) khi dạo nhạc thay vì luôn hiển thị mỗi khi ca sỹ ngừng hát do mỗi khi ca sỹ ngừng hát thì khoảng thời gian đó sẽ không nằm trong khoảng `startTime` và `endTime` của bất kỳ một câu nào trong bài hát vậy nên biến `index` trong hàm `handleLyric` sẽ có giá trị bằng `-1` và `karaokeContent.innerHTML` sẽ được gán bằng `songInfo`. Có thể sửa lại bằng cách kiểm tra khoảng thời gian giữa thời gian kết thúc của một câu và thời gian bắt đầu của câu kế tiếp lớn hơn hoặc bằng một khoảng thời gian nhất định thì sẽ hiển thị thông tin bài hát.

- [x] **Đánh giá chung:** Bài làm tốt.
