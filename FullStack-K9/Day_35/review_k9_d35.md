# Review bài tập về nhà buổi 35 - Lớp FullStack K8

## Đào Văn Sơn

- Bài làm chưa xử lý trường hợp hiển thị thông tin bài hát khi dạo nhạc.

- Khi tua bài hát về khoảng thời gian trước khoảng thời gian hiện tại hoặc khi bài hát được phát xong thì bấm nút `play` để chạy lại thì lời bài hát sẽ không được cập nhật nữa điều này là do khi bài hát đang được phát biến `currentTime` luôn được khởi tạo và được gán bằng `audio.currentTime` sau đó sẽ thực hiện kiểm tra nếu thỏa mãn điều kiện `currentTime - lastTime < 0.25` thì sẽ `return` ngay lập tức còn không thì sẽ cập nhật biến `lastTime = currentTime;` mà khi tua ngược lại thì `currentTime` của hiện tại sẽ luôn nhỏ hơn `lastTime` do `lastTime` được gán bằng `currentTime` trước khi được tua lại dẫn đến kết quả không mong muốn.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Đoàn Mạnh Long

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- Khi tua bài hát về khoảng thời gian trước khoảng thời gian hiện tại thì lời bài hát sẽ không được cập nhật nữa điều này là do khi bài hát đang được phát biến `currentTime` luôn được khởi tạo và được gán bằng `audio.currentTime * 1000` sau đó sẽ thực hiện kiểm tra nếu thỏa mãn điều kiện `currentTime > displayedEndTime` thì mới thực hiện việc cập nhật lời bài hát và khi đó biến `displayedEndTime` sẽ được gán bằng `endIndex < sentences.length ? sentences[endIndex].words[sentences[endIndex].words.length - 1].endTime : Infinity;` do đó khi tua ngược lại thì `currentTime` sẽ luôn nhỏ hơn `displayedEndTime` dẫn đến kết quả không mong muốn.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Đinh Tiến Thành

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- [x] **Đánh giá chung:** Bài làm rất tốt.

## Thái Việt Hoàn

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- Bài làm chưa xử lý trường hợp hiển thị thông tin bài hát khi dạo nhạc.

- [x] **Đánh giá chung:** Bài làm rất tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## Trần Hồng Sơn

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

- [x] **Đánh giá chung:** Bài làm rất tốt.

## Phan Văn Hiệp

- Nên tách lời bài hát ra thành một file riêng thay vì đặt hết trong một file.

-
