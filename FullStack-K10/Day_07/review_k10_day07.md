# Review bài tập về nhà buổi 7 - Lớp FullStack K10

## [Phan Tuan Manh](https://phantuanmanh.github.io/f8-fullstack-k10/Day-7/index.html)

- [x] **Bài 1:**

`Điểm: 10`

- [x] **Bài 2:**

`Điểm: 9.5`

- Các thẻ `input` và `button` trong bài làm không kế thừa thuộc tính `font-family` của thẻ `html` do vậy cần thêm thuộc tính `font-family: "Nunito", sans-serif;` cho các thẻ `input` và `button`.

- [x] **Điểm mạnh:**

- Duy trì được điểm mạnh và cải thiện được điểm yếu của những buổi trước.

- [x] **Đánh giá chung:** Bài làm rất tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Điểm tổng kết: 9.75`

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## [Vu Anh Tuan](https://vatuan2710.github.io/f8-fullstack-k10/Day-7/index)

- [x] **Bài 1:**

`Điểm: 6`

- Khi `hover` vào từng item thì background màu xanh đang để sát viền nhưng bản mẫu sẽ không sát viền như vậy, cần điều chỉnh lại.

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- SubMenu chưa giống với giao diện mẫu.

- Thẻ `ul` trong bài làm là một danh sách chứa các liên kết chuyển hướng vậy nên cần bọc thẻ `nav` ra ngoài thẻ `ul`.

- Các dấu lớn hơn và nhỏ hơn của các thẻ đóng và thẻ mở cần nằm trên cùng một dòng

  ![alt text](./images/VAT_01.png)

- Font `Open Sans` không có sẵn trên tất cả các thiết bị và trình duyệt và sẽ không thể sử dụng trực tiếp như trong bài làm, thay vào đó có thể `import` font `Open Sans` từ `Google Fonts` trong file `CSS`.

  Đề xuất sửa:

  ```css
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  ```

- [x] **Bài 2:**

`Điểm: 7`

- Thuộc tính `background-image` không hoạt động là do `URL` không được đặt trong dấu ngoặc kép. Để giải quyết vấn đề này, hãy thêm dấu ngoặc kép xung quanh `URL`.

- **Just Log** là một tiêu đề vậy nên cần được bọc trong thẻ **heading**.

- Các thẻ `input` và `button` trong bài làm không kế thừa thuộc tính `font-family` của thẻ `body` do vậy cần thêm thuộc tính `font-family: "Nunito", sans-serif;` cho các thẻ `input` và `button`.

- Cần cải thiện cách trình bày mã `CSS` để dễ đọc và duy trì hơn. Cụ thể, nên nhất quán trong việc đặt dấu ngoặc nhọn `{` ở cùng dòng với selector, giảm khoảng cách thừa giữa các `rule sets`, và căn chỉnh các thuộc tính một cách đồng đều.

- [x] **Điểm mạnh:**

- Duy trì được một số điểm mạnh các buổi trước đó.

- [x] **Điểm yếu:**

- Trình bày code HTML và CSS chưa tốt.

- Chưa hiểu về cách sử dụng font chữ.

- Chưa cẩn thận trong việc kiểm tra kỹ giao diện mẫu và yêu cầu bài tập.

- Chưa thực sự hiểu về `semantic`.

- [x] **Đánh giá chung:** Bài làm khá tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Điểm tổng kết: 6.5`

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`

## [Le Huu Trong](https://kaiosuke.github.io/Excercise-7/)

- [x] **Bài 1:**

`Điểm: 9.5`

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- [x] **Bài 2:**

`Điểm: 10`

- [x] **Điểm mạnh:**

- Duy trì được điểm mạnh của các buổi trước đó.

- [x] **Đánh giá chung:** Bài làm rất tốt.

`Điểm tổng kết: 9.75`

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## [Nguyen Thanh An](https://ann573.github.io/f8-fullstack-k10/BTVN/Day7/)

- [x] **Bài 1:**

`Điểm: 8`

- Khi `hover` vào các item có nội dung **About us** và **Portfolio** chưa hiển thị dropdown tương ứng.

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- Đây là phần header của một trang, do đó nên sử dụng thẻ `header` để bao bọc nội dung. Thẻ `header` được thiết kế để chứa các phần tử như tiêu đề, logo, và các điều hướng chính.

- [x] **Bài 2:**

`Điểm: 10`

- [x] **Điểm mạnh:**

- Duy trì được điểm mạnh các buổi trước đó.

- [x] **Đánh giá chung:** Bài làm rất tốt.

`Điểm tổng kết: 9`

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.`

## [Vu Quoc Dung](https://dungvuquoc0102.github.io/f8_fullstack_k10_repo/day7/ex1.html#)

- [x] **Bài 1:**

`Điểm: 10`

- [x] **Bài 2:**

`Điểm: 10`

- [x] **Điểm mạnh:**

- Duy trì được điểm mạnh các buổi trước đó.

- [x] **Đánh giá chung:** Bài làm rất tốt.

`Điểm tổng kết: 10`

## [Nguyen Truong Giang](https://nguyentruonggiang212001.github.io/f8-fullstack-k10/Assignment7/index.html)

- [x] **Bài 1:**

`Điểm: 7.75`

- Khi `hover` vào các item có nội dung **About us** và **Portfolio** chưa hiển thị dropdown tương ứng.

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- Chiều rộng của SubMenu đang nhỏ hơn so với giao diện mẫu.

- Đây là phần header của một trang, do đó nên sử dụng thẻ `header` để bao bọc nội dung. Thẻ `header` được thiết kế để chứa các phần tử như tiêu đề, logo, và các điều hướng chính.

- [x] **Bài 2:**

`Điểm: 8.5`

- Các thẻ `input` và `button` trong bài làm không kế thừa thuộc tính `font-family` của thẻ `body` do vậy cần thêm thuộc tính `font-family: "Nunito", sans-serif;` cho các thẻ `input` và `button`.

- Việc sử dụng thẻ `h2` cho logo 'JL' và thẻ `span` cho tên 'Just Log' không đúng về mặt ngữ nghĩa (semantic). Nên sử dụng các thẻ phù hợp để tăng cường tính ngữ nghĩa và truy cập của trang web. Ví dụ, sử dụng thẻ `img` cho logo nếu nó là một hình ảnh và thẻ `h1` hoặc `h2` cho tên thương hiệu.

- [x] **Điểm mạnh:**

- Vẫn duy trì được một vài điểm mạnh của các buổi trước.

- [x] **Điểm yếu:**

- Chưa cẩn thận trong việc kiểm tra kỹ yêu cầu và giao diện mẫu của bài tập.

- Chưa thực sự hiểu về `semantic`.

- [x] **Đánh giá chung:** Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn. Việc viết toàn bộ mã HTML và CSS trong một file có thể gây khó khăn cho việc bảo trì và quản lý mã. Bạn nên tách riêng HTML và CSS thành các file riêng biệt. Điều này giúp mã dễ đọc hơn, dễ bảo trì hơn.

`Điểm tổng kết: 8.125`

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em, để em kiểm tra lại nha.`

## [Nguyen The Han](https://nguyenthehanf8.github.io/F8-Fullstack-Ofline/Day-7/)

- [x] **Bài 1:**

`Điểm: 9.5`

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- [x] **Bài 2:**

`Điểm: 6`

- Giao diện của bài làm đang không giống với giao diện mẫu do `width` của `.container` đang có giá trị là **80%** nên chiều rộng bị co lại, nên sửa lại `width: 100%`.

- Chiều rộng social facebook nhỏ hơn so với social còn lại

  ![alt text](./images/NTHan.png)

- Chưa có bóng mờ phía sau các trường nhập dữ liệu **email** và **password**.

- Các thẻ `input` và `button` thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Các thẻ `input` và `button` trong bài làm không kế thừa thuộc tính `font-family` của thẻ `html` do vậy cần thêm thuộc tính `font-family: "Nunito", sans-serif;` cho các thẻ `input` và `button`.

- [x] **Điểm mạnh:**

- Vẫn duy trì được điểm mạnh của các buổi trước.

- [x] **Điểm yếu:**

- Chưa cẩn thận trong việc kiểm tra kỹ yêu cầu và giao diện mẫu của bài tập.

- [x] **Đánh giá chung:** Bài làm khá tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Điểm tổng kết: 7.75`

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình, để mình kiểm tra lại nha.`

## [Hoang Thanh Huy](https://huyhtf88188.github.io/f8_fullstack/)

- [x] **Bài 1:**

`Điểm: 7`

- Chưa có đường ngăn cách giữa các item trong SubMenu.

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- Đây là phần header của một trang, do đó nên sử dụng thẻ `header` để bao bọc nội dung. Thẻ `header` được thiết kế để chứa các phần tử như tiêu đề, logo, và các điều hướng chính.

- Hiện tại font chữ trong bài làm đang là `system-ui` do thứ tự các font trong thuộc tính `font-family`.

- Font `Open Sans` không có sẵn trên tất cả các thiết bị và trình duyệt và sẽ không thể sử dụng trực tiếp như trong bài làm, thay vào đó có thể `import` font `Open Sans` từ `Google Fonts` trong file `CSS`.

  Đề xuất sửa:

  ```css
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  ```

- [x] **Bài 2:**

`Điểm: 8`

- Chiều rộng của các liên kết mạng xã hội không giống nhau

  ![alt text](./images/HTH.png)

- Kích thước của logo trong bài làm đang nhỏ hơn so với giao diện mẫu.

- Chưa có bo góc và bóng mờ phía sau các trường nhập dữ liệu **email** và **password**.

- Các thẻ `input` và `button` trong bài làm không kế thừa thuộc tính `font-family` của thẻ `body` do vậy cần thêm thuộc tính `font-family: "Nunito", sans-serif;` cho các thẻ `input` và `button`.

- [x] **Điểm mạnh:**

- Vẫn duy trì được một vài điểm mạnh của các buổi trước.

- [x] **Điểm yếu:**

- Chưa hiểu về cách sử dụng font chữ.

- Chưa cẩn thận trong việc kiểm tra kỹ yêu cầu và giao diện mẫu của bài tập.

- [x] **Đánh giá chung:** Bài làm tương đối tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

`Điểm tổng kết: 7.5`

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## [Nguyen Hai Duong](https://github.com/tenk22/F8_fullstacks/blob/main/btvnb7/b1.html)

- [x] **Bài 1:**

`Điểm: 6`

- Khi `hover` vào từng item thì background màu xanh đang để sát viền nhưng bản mẫu sẽ không sát viền như vậy, cần điều chỉnh lại.

- Hiển thị SubMenu chưa giống với giao diện mẫu.

- Đây là phần header của một trang, do đó nên sử dụng thẻ `header` để bao bọc nội dung. Thẻ `header` được thiết kế để chứa các phần tử như tiêu đề, logo, và các điều hướng chính.

- Các dấu lớn hơn và nhỏ hơn của các thẻ đóng và thẻ mở cần nằm trên cùng một dòng

  ![alt text](./images/NHD_01.png)

- [x] **Bài 2:**

`Điểm: 6.5`

- Giao diện trong bài làm chưa giống với giao diện mẫu.

- Nhận xét về trình bày code HTML tương tự bài 1.

- Thụt lề chưa hợp lý

  ![alt text](./images/NHD_02.png)

- Các thẻ `input` và `button` trong bài làm không kế thừa thuộc tính `font-family` của thẻ `body` do vậy cần thêm thuộc tính `font-family: "Nunito", sans-serif;` cho các thẻ `input` và `button`.

- [x] **Điểm mạnh:**

- Vẫn duy trì được một vài điểm mạnh của các buổi trước.

- [x] **Điểm yếu:**

- Chưa cẩn thận trong việc kiểm tra kỹ yêu cầu và giao diện mẫu của bài tập.

- Trình bày `css` chưa tốt.

- [x] **Đánh giá chung:** Cần chú ý thực hiện đúng yêu cầu bài tập, chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

`Điểm tổng kết: 6.25`

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em, để em kiểm tra lại nha.`

## [Nguyen Trung Hieu](https://hieuvsgithub.github.io/Nop_bai_tap/Day_7/)

- [x] **Bài 1:**

`Điểm: 6`

- Khi `hover` vào 1 item để xuất hiện SubMenu thì khi di chuyển chuột qua khoảng cách giữa item đó đến menu cấp con thì sẽ bị mất menu con do mất sự kiện `hover`.

- Hiển thị SubMenu chưa giống với giao diện mẫu.

- Thẻ `ul` trong bài làm là một danh sách chứa các liên kết chuyển hướng vậy nên cần bọc thẻ `nav` ra ngoài thẻ `ul`.

- Không để thừa các khoảng cách

  ![alt text](./images/NTHieu.png)

- Font `Open Sans` không có sẵn trên tất cả các thiết bị và trình duyệt và sẽ không thể sử dụng trực tiếp như trong bài làm, thay vào đó có thể `import` font `Open Sans` từ `Google Fonts` trong file `CSS`.

  Đề xuất sửa:

  ```css
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  ```

- [x] **Bài 2:**

`Điểm: 5`

- Thuộc tính `background-image` không hoạt động là do `URL` không được đặt trong dấu ngoặc kép. Để giải quyết vấn đề này, hãy thêm dấu ngoặc kép xung quanh `URL`.

- **Just Log** ở đây mang ý nghĩa là một tiêu đề vậy nên cần sử dụng thẻ **heading** để bọc.

- Các thẻ `input` và `button` thuộc trong nhóm thẻ `form` và đây cũng là một biểu mẫu vậy nên cần được bọc trong thẻ `form`.

- Nhận xét về việc sử dụng font chữ và trình bày `css` tương tự bài 1.

- **Login to your account** chưa có phần gạch dưới.

- Chưa có bóng mờ phía sau các trường nhập dữ liệu **email** và **password**.

- Đoạn văn bản dưới tiêu đề **Just Log** chưa được căn giữa (có thể sử dụng `text-align: center;`).

- Các icon thể hiện liên kết mạng xã hội chưa có màu giống như trong giao diện mẫu.

- Mũi tên đang không được đặt đúng vị trí (tìm hiểu thuộc tính `position` để hoàn thành giao diện mẫu theo yêu cầu).

- [x] **Điểm yếu:**

- Chưa khắc phục được điểm yếu của các buổi trước.

- Chưa cẩn thận trong việc kiểm tra kỹ yêu cầu và giao diện mẫu của bài tập.

- [x] **Đánh giá chung:** Cần dành nhiều thời gian hơn cho bài tập, chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

`Điểm tổng kết: 5.5`

`Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình, để mình kiểm tra lại nha.`
