# Review bài tập về nhà buổi 33 - Lớp FullStack K9

## Đào Văn Sơn

- Khi bài nhạc kết thúc cần `reset` toàn bộ mọi thứ về 0 luôn thay vì cần phải bấm vào nút `play` thì mới `reset`.

- Khi tua nhạc bằng việc kéo thanh `progress` xảy ra tình trạng khi người dùng đang thực hiện kéo âm thanh phát ra nghe như đĩa bị xước do trong bài làm khi `document` lắng nghe được sự kiện `mousemove` từ phía người dùng và khi đó hàm `handleDrag` sẽ được gọi, trong hàm này thực hiện việc cập nhật lại `audio.currentTime` do đó dẫn đến kết quả như trên.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Đinh Tiến Thành

- Thời gian xem trước được hiển thị hơi nhỏ cần tăng `font-size` để dễ nhìn hơn.

- Khi tua nhạc bằng cách nhấn chuột xuống (`mousedown`) `progressBar`, bài làm đang cập nhật lại `currentTime` của `audio` hai lần, một lần khi người dùng nhấn chuột xuống và `progressBar` lắng nghe được sự kiện `mousedown` và một lần khi người dùng nhả chuột và `document` cũng sẽ lắng nghe được sự kiện `mouseup`, điều này đến việc khi người dùng tua nhạc nghe sẽ bị giật.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`

## Đoàn Mạnh Long

- [x] **Đánh giá chung:** Bài làm rất tốt.

## Phan Văn Hiệp

- Khi tua nhạc bằng cách nhấn chuột xuống(`mousedown`) `progressBar`, bài làm đang cập nhật lại `currentTime` của `audio` hai lần, một lần khi người dùng nhấn chuột xuống và `progressBar` lắng nghe được sự kiện `mousedown` và một lần khi người dùng nhả chuột và `document` cũng sẽ lắng nghe được sự kiện `mouseup`, điều này đến việc khi người dùng tua nhạc nghe sẽ bị giật.

- Trong khi nhạc đang được phát, khi click chuột vào chấm tròn màu tím (`progressSpan`) thì nhạc sẽ được tua đến đoạn nhạc được người dùng tua đến trước đó khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do khi thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` thì biến `value` được gán bằng `(offsetX * 100) / progressBarWidth;` sau đó khi người dùng thực hiện nhấn chuột xuống chấm tròn màu tím (`progressSpan`) rồi sau đó nhả chuột (`mouseup`) thì đồng thời `document` cũng sẽ lắng nghe được sự kiện `mouseup` từ phía người dùng do tình trạng nổi bọt khi đó biến `currentTime` sẽ được gán bằng `(value / 100) * audio.duration;` tuy nhiên giá trị `value` lại chính là giá trị trước đó được gán khi người dùng thực hiện hành động nhấn chuột xuống (`mousedown`) `progressBar` do đó khi cập nhật `audio.currentTime = currentTime;` sẽ dẫn đến kết quả không mong muốn.

- [x] **Đánh giá chung:** Bài làm khá tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Đỗ Trung Kiên

- Khi bài nhạc kết thúc cần `reset` toàn bộ mọi thứ về 0 luôn thay vì cần phải bấm vào nút `play` thì mới `reset`.

- [x] **Đánh giá chung:** Bài làm rất tốt.

## Trần Hồng Sơn

- Nên ẩn hiển thị thẻ `audio` đi bằng cách bỏ thuộc tính `controls` của thẻ `audio`.

- Khi hover hiển thị thời gian xem trước thì cần hiển thị theo vị trí tương ứng của con trỏ chuột thay vì hiển thị cố định ở một vị trí.

- Khi tua nhạc bằng việc kéo thanh `progress` xảy ra tình trạng khi người dùng đang thực hiện kéo âm thanh phát ra nghe như đĩa bị xước do trong bài làm khi `document` lắng nghe được sự kiện `mousemove` từ phía người dùng và khi đó hàm `handleDrag` sẽ được gọi, trong hàm này thực hiện việc cập nhật lại `audio.currentTime` do đó dẫn đến kết quả như trên.

- Hiện bài làm đang chưa thực hiện tua được bằng cách nhấn chuột xuống `progressBar` điều này là do cập nhật lại `currentTime` của `audio`.

- Khi nhấn chuột xuống giữ và chưa kéo thì chiều rộng thanh `progress` sẽ không được hiển thị chính xác điều này là do `progress.style.width` luôn được cập nhật giá trị mới khi nhạc đang được phát.

- [x] **Đánh giá chung:** Bài làm tạm ổn, cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Thái Việt Hoàn

- Khi thực hiện việc click xuống rồi sau đó nhả chuột tại bất kỳ vị trí nào không phải thanh `progressBar` thì `currentTime` của `audio` sẽ luôn được cập nhật lại.

- [x] **Đánh giá chung:** Bài làm rất tốt, tuy nhiên cần lưu ý góp ý nêu trên để hoàn thiện hơn.

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`

## Vũ Mạnh

- Khi bài nhạc kết thúc cần `reset` toàn bộ mọi thứ về 0 luôn thay vì cần phải bấm vào nút `play` thì mới `reset`.

-
