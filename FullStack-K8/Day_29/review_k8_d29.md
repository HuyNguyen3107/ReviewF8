# Review bài tập về nhà buổi 29 - Lớp FullStack K8

## [Le Xuan Phong](https://xuanphong03.github.io/Fullstack-F8-Javascript/dom/exercise/day-04/index.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Đánh giá chung: **Bài làm rất tốt**.

## [Nguyen Van Tien Hai](https://nvthai0611.github.io/HaiNVTHE172670/index.html)

**Chưa làm đúng yêu cầu đề bài. Hiện bài làm đang sử dụng thư viện đề làm carousel.**

## [Trung Tuyen](https://ptt-fullstack.github.io/JavaScript-F8/DAY-29/index.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Đánh giá chung: **Bài làm rất tốt**.

## [Vu Thi Hoai Thu](https://hoaithu222.github.io/f8_offline_k8/homework/Day-29/ex01.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Khi slide cuối cùng được hiển thị và sau đó người dùng tiếp tục bấm vào nút next slide thì quay lại slide đầu tiên và ngược lại do khi hàm `changeSlide` được gọi nếu đối số truyền vào (`index`) lớn hơn hoặc bằng tổng slide thì `index` sẽ là vị trí của slide đầu tiên còn khi `index` nhỏ hơn `0` thì `index` sẽ bằng vị trí của slide cuối cùng điều này không đúng với yêu cầu đề bài.

- Khi click vào các `dot` thì slide tại các vị trí tương ứng không được hiển thị điều này là do khi chạy vòng lặp để tạo các `dot` có gán sự kiện `click` vào `dot` đó với đối số thứ 2 truyền vào là một `function` và trong `function` này lại gọi hàm `changeSlide` với đối số truyền vào là biến `i` mà `i` lại tăng lên một đơn vị qua mỗi lần lặp vậy nên khi vòng lặp kết thúc giá trị của `i` sẽ là `5` và do đó mỗi khi người dùng click vào `dot` thì hàm `changeSlide` sẽ được gọi với đối số truyền vào chính là giá trị cuối cùng của biến `i` sau khi vòng lặp kết thúc kết hợp với việc trong hàm `changeSlide` có kiểm tra điều kiện nếu `index >= totalSlides` thì `index` sẽ bằng `0` do đó sẽ luôn hiển thị slide đầu tiên.

  Đề xuất sửa:

  ```js
  dot.addEventListener("click", function () {
    changeSlide(+this.getAttribute("data-slide"));
  });
  ```

- Nên chuyển `background-color` của `dot` hiện tại `#bbb` thành màu khác dễ nhìn hơn

- [x] Đánh giá chung: **Bài làm tốt**, tuy nhiên cần thực hiện đúng yêu cầu đề bài và chú ý một số lỗi nhỏ để hoàn thiện hơn.

## [Nguyen Duc Nhat](https://nhat0712.github.io/F8-ex/Buoi_29/index.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Chưa thực hiện tính năng vuốt chuyển slide.

- [x] Đánh giá chung: Bài làm rất tốt phần chức năng chuyển slide thông qua việc click vào các dot hoặc bấm vào các nút pre hay next, tuy nhiên chưa thực hiện chuyển bằng việc vuốt slide.

## [Bui Duc Duong](https://buiduong2.github.io/F8-Javascript/lession28/)

**Bài làm rất tốt**

## [Cu Tien Thinh](https://thinh060903.github.io/F8-Fullstack-K8/Day-29/index.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Hiện bài làm đang không thực hiện được tính năng vuốt chuyển slide do khi lắng nghe sự kiện `mousedown` từ phía người dùng chưa thực hiện việc ngăn chặn hành vi mặc định (kéo thả hình ảnh) khi người dùng nhấn và giữ chuột trên một thẻ `img` .

  Đề xuất sửa:

  ```js
  carousel.addEventListener("mousedown", function (e) {
    e.preventDefault();
    ...
  });
  ```

- [x] Đánh giá chung: Bài làm rất tốt phần chức năng chuyển slide thông qua việc click vào các dot hoặc bấm vào các nút pre hay next, tuy nhiên chưa thực hiện tốt chuyển bằng việc vuốt slide.

## [Lam Hoang](https://nvhlam2211.github.io/BTVN-F8/Day-29/ex.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Không để thừa các khoảng cách như dưới đây

  ![alt text](./images/LH_01.png)
  (Tương tự các trường hợp bên dưới)

- Nên viết riêng một hàm dùng để kiểm tra xem `dot` nào đang được active rồi sau đó highlight lên và xóa bỏ highlight của `dot` được active trước đó thay vì gọi hàm `renderDots`(dùng để tạo `dot`, render lên trình duyệt và gán sự kiện cho các `dot`) quá nhiều.

- Các biến `position` và `index` đang được gán giá trị khi khai báo vậy nên cần phải đưa việc khai báo và gán giá trị 2 biến này lên trước đoạn mã có sử dụng 2 biến đó vì cơ chế `hoisting`(là cơ chế mặc định của `JavaScript`) sẽ di chuyển tất cả các biến và hàm (Function declaration) khi khai báo lên đầu scope trước khi chúng được thực thi, tuy nhiên đối với cơ chế này nó chỉ di chuyển khai báo, còn việc gán giá trị thì giữ nguyên và giá trị của các biến được di chuyển lên sẽ là `undefined` điều đó có thể dẫn đến những lỗi không mong muốn.

- Đánh giá chung: **Bài làm tốt**, cần chú ý một số lỗi nêu trên để hoàn thiện hơn.

## [Nhung Le](https://nhunglt1801.github.io/f8-fullstack-k8-exercise/day-29/index.html)

- Các nút action khi click không còn tác dụng, nên thêm 1 trạng thái disabled cho nó để user dễ nhận biết hơn.

- Nên tạo khoảng cách tại những vị trí sau để bài làm được đồng nhất về cách trình bày

  ![alt text](./images/NL_01.png)

- Bài làm chưa thực hiện chức năng vuốt chuyển slide

- [x] Đánh giá chung: Bài làm rất tốt phần chức năng chuyển slide thông qua việc click vào các dot hoặc bấm vào các nút pre hay next, tuy nhiên chưa thực hiện chuyển bằng việc vuốt slide.

## [Vu Tri Tung](https://tungv62333.github.io/f8-offline-k8/Javascript/Lesson-29/ex01.html)

- Khi slide cuối cùng được hiển thị và sau đó người dùng tiếp tục bấm vào nút next slide thì quay lại slide đầu tiên và ngược lại điều này là sai với yêu cầu đề bài.

- Bài làm chưa thực hiện chức năng vuốt chuyển slide

- [x] Đánh giá chung: Bài làm rất tốt phần chức năng chuyển slide thông qua việc click vào các dot hoặc bấm vào các nút pre hay next, tuy nhiên cần thực hiện đúng yêu cầu đề bài và. Chưa thực hiện chuyển bằng việc vuốt slide.
