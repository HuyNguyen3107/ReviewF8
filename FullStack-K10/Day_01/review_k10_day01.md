# Review bài tập về nhà buổi 1 - Lớp FullStack K10

## [Phan Tuan Manh](https://phantuanmanh.github.io/f8-fullstack-k10/)

- [x] **Bài 1:**

**Điểm: 9**

- Các thẻ `input` thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Giá trị của thuộc tính `type` của thẻ `input` ở ô nhập liệu **email** cần có giá trị là **email**, hiện bài làm đang để giá trị của thuộc tính `type` của thẻ `input` là **Enter Email** điều này dẫn đến việc thuộc tính của thẻ `input` sẽ có giá trị mặc định là **text** do thẻ thuộc tính `type` không có giá trị **Enter Email**, ngoài ra một thẻ `input` cũng cần có các thuộc tính khác như `placeholder`(chỉ ra gợi ý để mô tả giá trị mong muốn của trường nhập), `name`(sử dụng để trang web có thể lấy được giá trị của input và xử lý ở phía server-side), ví dụ:

  ```html
  <input type="email" placeholder="Enter email" name="email" />
  ```

- [x] **Bài 2:**

**Điểm: 9**

- Tiêu đề của các bài viết nên dùng thẻ `h2` thay vì `h3` để tăng thêm độ nhấn mạnh cho tiêu đề của các bài viết.

- [x] **Bài 3:**

**Điểm: 7.5**

- Các thẻ heading được sử dụng để làm tiêu đề, đầu đề cho 1 mục hoặc cả trang. **HEADER**, **SIDEBAR**, **FOOTER** không mang ý nghĩa là một tiêu đề, nó chỉ là một **placeholder**, một thành phần giữ chỗ để biết rằng ở đó sẽ chứa một header, sidebar, footer mà đang sửa chữa, thêm, đang hoàn thiện. Vậy nên không sử dụng thẻ `h1` để bọc **Header** và **Footer**.

- Trong một trang chỉ nên có 1 thẻ `h1` để nhấn mạnh tiêu đề chính của trang đó, hiện bài làm đang sử dụng nhiều hơn 1 thẻ `h1`.

- Phần sidebar được sử dụng để chứa những thông tin bên cạnh nội dung chính vậy và nó không phải là một tiêu đề vậy nên không sử dụng thẻ `h2` để bọc **SIDEBAR** mà cần dùng thẻ `aside`.

  - Bài làm:

  ```html
  <header>
    <h1>Header</h1>
  </header>
  <main>
    <h1>
      <a href="#"
        >Vòng xoáy cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khác phục</a
      >
    </h1>
    <p>
      Đại diện Ban quản lý dư án cao tốc Đà Nẵng - Quảng Ngãi thừa nhân vòng
      xoáy cao tốc ở huyên Bình Sơn đang lún quá mức cho phép và cần 300 ngày để
      khắc phục
    </p>
    <ul>
      <li>
        <a href="#"
          >Nữ sinh lớp 5 gây chú ý vì không muốn học Harvard, chỉ cần hạnh
          phúc</a
        >
      </li>
      <li>
        <a href="#"
          >Hiêu trưởng đại học ở Sài Gòn bị miễn nhiệm vì nghi vấn bằng cấp</a
        >
      </li>
    </ul>
    <p>
      <a href="#"
        >Phát ngôn ấn tương trong 3 ngày Quốc hôi chất vấn 'theo lời hứa'</a
      >
    </p>
    <p>Trưởng đoàn ĐT Viêt Nam: Cần giải quyết vấn đề tâm lý ở AFF Cup 2018</p>
    <p>
      <a href="#"
        >Viêt Nam hơn 20 năm không thắng Indonesia: Nỗi sơ lớn hơn cả Thái
        Lan</a
      >
    </p>
    <h2>SIDEBAR</h2>
  </main>
  <footer>
    <h1>FOOTER</h1>
  </footer>
  ```

  - Đề xuất sửa:

  ```html
  <header>Header</header>
  <main>
    <h1>
      <a href="#"
        >Vòng xoáy cao tốc 34.500 tỷ sụt lún quá mức, cần 300 ngày khác phục</a
      >
    </h1>
    <p>
      Đại diện Ban quản lý dư án cao tốc Đà Nẵng - Quảng Ngãi thừa nhân vòng
      xoáy cao tốc ở huyên Bình Sơn đang lún quá mức cho phép và cần 300 ngày để
      khắc phục
    </p>
    <ul>
      <li>
        <a href="#"
          >Nữ sinh lớp 5 gây chú ý vì không muốn học Harvard, chỉ cần hạnh
          phúc</a
        >
      </li>
      <li>
        <a href="#"
          >Hiêu trưởng đại học ở Sài Gòn bị miễn nhiệm vì nghi vấn bằng cấp</a
        >
      </li>
    </ul>
    <p>
      <a href="#"
        >Phát ngôn ấn tương trong 3 ngày Quốc hôi chất vấn 'theo lời hứa'</a
      >
    </p>
    <p>Trưởng đoàn ĐT Viêt Nam: Cần giải quyết vấn đề tâm lý ở AFF Cup 2018</p>
    <p>
      <a href="#"
        >Viêt Nam hơn 20 năm không thắng Indonesia: Nỗi sơ lớn hơn cả Thái
        Lan</a
      >
    </p>
    <aside>SIDEBAR</aside>
  </main>
  <footer>FOOTER</footer>
  ```

- [x] **Điểm mạnh**:

  - Trình bày code rất tốt

  - Sử dụng tốt các thẻ `html`

  - Có sự chủ động tìm hiểu và sử dụng tốt `fontawesome`

- [x] **Điểm yếu**

  - Chưa thực sự hiểu về semantic trong html

  - Chưa sử dụng comment khi code

- [x] **Đánh giá chung**: Bài làm rất tốt, tuy nhiên cần chú ý nhiều hơn đến semantic và một số lỗi nhỏ để hoàn thiện hơn.

- [x] **Điểm tổng kết: 8.5**
