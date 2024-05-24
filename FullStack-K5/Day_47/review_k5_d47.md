# Review bài tập về nhà buổi 47 - Lớp Fullstack K5

## [Pham Minh Hieu](https://f8-fullstack-k6.vercel.app/)

- **Chức năng đăng nhập**

  - Khi logout chưa có loading có thể khiến user khi click lần đầu tiên tưởng chưa được sẽ click liên tục trong khoảng thời gian đợi đó.

  - Khi đăng nhập thành công ở các trường hợp ví dụ như đăng nhập bằng google thì có thể lấy mail của user để tự động điền vào field email để tăng trải nghiệm người dùng hơn.

  - Tìm hiểu thêm về setting của Auth0 để có thể thay đổi được ảnh và text heading ở popup hiện lên khi đăng nhập.

- **Chức năng gửi email**

  - UI chưa được chỉn chu.

  - Bài làm chưa xử lý một số cách thức đăng nhập không trả về không trả về một số thông tin như email, locale... Ví dụ đăng nhập bằng facebook thì cần check để hiển thị hay không? Hiện tại khi đăng nhập bằng facebook hoặc github thì sẽ bị trống email trên UI.

  - Bài làm chưa kiểm tra trường hợp email mà người dùng nhập vào không đúng định dạng.

- **Code format**

  - Phần publicKey của emailjs, clientId và domain của auth0 nên đưa vào env để tránh bị lộ thông tin không mong muốn.

  - Thẻ textarea có thể css thêm thuộc tính resize: none để tránh user kéo thay đổi kích thước của textarea làm vỡ giao diện.

  - Phần Vị trí bài làm đang chỉ hiển thị nếu `user.locale === "vi"`.

- [x] Đánh giá chung: **Bài làm tốt**, chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn đặc biệt là thông tin các token cần đưa vào file `.env`.
