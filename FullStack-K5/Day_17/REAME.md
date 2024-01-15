# Huy review dự án HTML & CSS - Lớp Fullstack K5

## [Ngo Hoang Kim](https://kzau1612.github.io/project-htmlcss/)

**Ngoài phần Header ra còn lại bài làm đang làm sai yêu cầu của bài tập**

### Header

- Thẻ `img` nên được bọc trong thẻ `a` để người dùng có thể dễ dàng chuyển về trang chủ khi click vào logo điều này giúp tăng trải nghiệm người dùng.

  - Bài làm:

  ```html
  <img src="./assets/logo/logo.png" alt="logo" class="logo" />
  ```

  - Đề xuất sửa thành:

  ```html
  <a href="(Đường dẫn về trang chủ)">
    <img src="./assets/logo/logo.png" alt="logo" class="logo" />
  </a>
  ```

- Phần tử giả `before` của thẻ `li` có `class` là **active** đang không ở đúng vị trí là phần sát mép dưới của **header** do thuộc tính `bottom: -3.47rem;` đề xuất sửa thành `bottom: -4rem;`.

- Nên thêm phần tử giả `before` với `css` tương tự như thẻ `li` có `class` là **active** khi `hover` vào các thẻ `a` có `class` là **nav-link**.

- Nên thêm `padding: 4rem;` vào thẻ `a` có `class` là **nav-link** để khi người dùng di chuyển con trỏ chuột trong khoảng giữa nội dung của thẻ `a` và phần từ giả `before` thì vẫn giữ được hiệu ứng khi `hover`.

**_Bài làm chưa có responsive cho header_**

### Section sản phẩm

#### Section Hero

**[x] Màn hình Desktop**

- Không nên đặt tên `class` là **section** vì nó không mang một ý nghĩa cụ thể nào. Ở **section** này ta nên đặt tên cho `class` là **hero**, tương tự với thẻ `p` có `class` là **section-title**.

- Không nên dùng thẻ `p` ở đây vì nó là tiêu đề chính của trang và không phải là một đoạn văn bản. Nên dùng thẻ `h1` để thay thế:

  - Bài làm:

  ```html
  <p class="section-title">Sản phẩm</p>
  ```

  - Đề xuất sửa thành:

  ```html
  <h1>Sản phẩm</h1>
  ```

**_Bài làm chưa có responsive cho section hero_**

#### Section Product

**[x] Màn hình Desktop**

- Thẻ `p` **chỉ được dùng để thể hiện một đoạn văn bản**. Những nội dung của thẻ có `class` có tên **product-item\_\_title**, **product-item\_\_price** đều không phải là một đoạn văn bản vì thế không nên đặt trong thẻ `p` mà nên thay vào đó lần lượt các thẻ `h3` và `span`:

  - Bài làm:

  ```html
  <p class="product-item__title">Combo Quán ăn</p>
  <p class="product-item__desc">1 Thùng 1000 đôi</p>
  <p class="product-item__price">Giá: <span>600.000</span> vnd</p>
  ```

  - Đề xuất sửa thành:

  ```html
  <h3 class="product-item__title">Combo Quán ăn</h3>
  <p class="product-item__desc">1 Thùng 1000 đôi</p>
  <span class="product-item__price">Giá: <span>600.000</span> vnd</span>
  ```

- Có thể thêm thuộc tính `cursor: pointer;` vào thẻ `button` có `class` **product-item\_\_btn** và đổi màu `background` khi `hover` để tăng trải nghiệm người dùng.

**_Bài làm chưa có responsive cho section product_**

#### Section About

**[x] Màn hình Desktop**

**Bài làm rất tốt**

**_Bài làm chưa có responsive cho section about_**

#### Section Quality

**[x] Màn hình Desktop**

- **Section** này đang đề cập đến chất lượng của sản phẩm vì vậy nên đặt tên `class` của thẻ `section` là **quality** thay vì **info**

- Nội dung của thẻ `p` có `class` tên là **info\_\_desc** đang hiển thị trên 1 dòng trong khi ở bản thiết kế là 2 do đó có thể sử dụng thẻ `br` để xuống dòng.

  - Bài làm:

  ```html
  <p class="info__desc">
    Mỗi đôi đũa GreenChop gồm 2 phần thân đũa và đầu đũa. Người dùng có thể dễ
    dàng tách rời hoặc gắn liền 2 phần này với nhau
  </p>
  ```

  - Đề xuất sửa thành:

  ```html
  <p class="info__desc">
    Mỗi đôi đũa GreenChop gồm 2 phần thân đũa và đầu đũa. <br />
    Người dùng có thể dễ dàng tách rời hoặc gắn liền 2 phần này với nhau
  </p>
  ```

**_Bài làm chưa có responsive cho section quality_**

**[x] Đánh giá chung bài tập về nhà:** **Bài làm chưa có responsive**, sai yêu cầu bài tập, cần chú ý nhiều hơn đến **senmatic**. Nên set cho thẻ `body` thuộc tính `overflow-x: hidden;` để tránh việc chiều rộng của một số thành phần trong trang quá lớn dẫn đến việc hiển thị thanh cuộn ngang. Nên tách riêng scss của các **section** ra thành từng file(ví dụ: \_hero.scss, \_quality.scss,..) và đặt chúng trong **folder** chứa các file scss của cả trang đó cụ thể ở đây ta có thể tạo một folder tên là product trong folder page trong folder scss và đặt trong đó, cuối cùng là `import` các file scss được tách ra vào một file scss duy nhất cụ thể ở bài làm là file style.scss tuy nhiên đây là scss của trang sản phẩm vật nên cần tạo file product.scss trong folder scss rồi sau đó thực hiện `import`, còn file scss của phần **header** có thể tạo folder layouts trong folder scss rồi đặt trong đó.

## [Luu Ngoc Duong](https://duongluu9898.github.io/f8-duongluu-fullstack-k5/day18/)

### Header

**[x] Màn hình Desktop**

- Thẻ `img` nên được bọc trong thẻ `a` để người dùng có thể dễ dàng chuyển về trang chủ khi click vào logo điều này giúp tăng trải nghiệm người dùng.

  - Bài làm:

  ```html
  <img src="./images/logo.png" alt="greenchop" class="logo" />
  ```

  - Đề xuất sửa thành:

  ```html
  <a href="(Đường dẫn về trang chủ)">
    <img src="./images/logo.png" alt="greenchop" class="logo" />
  </a>
  ```

- Khoảng cách của các thẻ `li` nằm trong thẻ `ul` nằm trong thẻ `nav` có `class` tên là **nav** trong `header` đang là `30px` nhỏ hơn trong bản thiết kế `20px`, tương tự với khoảng cách giữa thẻ `nav` và thẻ `div` có class là **icons-right**. Sửa lại thuộc tính `column-gap: 30px;` của thẻ `ul` thành `column-gap: 50px;` và thuộc tính `margin-right: 30px;` của thẻ `nav` sửa lại thành `margin-right: 50px;`.

- Nên thêm `class` có tên **active** vào thẻ li nào có thẻ `a` có nội dung là tên trang mà người dùng đang truy cập và thẻ `li` đó sẽ có phần tử giả `after` và đổi màu chữ thẻ `a` như khi được `hover`.

- Nên thêm `padding: 4rem;` vào thẻ `a` có `class` là **nav-link** để khi người dùng di chuyển con trỏ chuột trong khoảng giữa nội dung của thẻ `a` và phần từ giả `before` thì vẫn giữ được hiệu ứng khi `hover`.

- Thêm các thuộc tính sau vào thẻ `header` để cố định vị trí của **header** với **viewport** điều này giúp người dùng có thể dễ dàng truy cập vào các trang khác, giỏ hàng, tìm kiếm,...

  ```css
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;
  }
  ```

**[x] Màn hình Tablet**

- **Tương tự như một vài nhận xét màn hình desktop**

**[x] Màn hình Mobile**

- **Tương tự như một vài nhận xét màn hình desktop**

### Trang chủ

#### Section Hero

**[x] Màn hình Desktop**

- Khoảng cách thẻ `p` có `class`là **hero-slogan** và thẻ `p` có `class` là **hero-desc** đang là `20px` nhỏ hơn so với bản thiết kế, sửa lại thuộc tính của thẻ `p` có `class` là **hero-desc** thành `margin-top: 26.667px;`.

- Ở một số kích thước màn hình chữ **GIỮA** trong nội dung của thẻ `p` có `class`là **hero-slogan** chưa xuống dòng có thể khắc phục bằng thẻ `br`.

- Phần **hero-image** đang bị lệch rất nhiều so với bản thiết kết

**[x] Màn hình Tablet**

- Chữ **GREENCHOP** có thể xoay lại về trạng tháy ban đầu về hiển thị ở dưới thẻ `img` có `class` là **main-img** thay vì để đè lên nhau như trong bài làm

- Nên giảm `font-size` của các thẻ có `class` là **hero-slogan** và **hero-heading**.

**[x] Màn hình Mobile**

- Nhận xét tương tự như màn hình Tablet.

#### Section Counter

- **Chưa làm**

#### Section Product

**[x] Màn hình Desktop**

- Thẻ `p` **chỉ được dùng để thể hiện một đoạn văn bản**. Nội dung của thẻ có `class` có tên **item-price** không phải là một đoạn văn bản vì thế không nên đặt trong thẻ `p` mà nên thay vào đó thẻ `span`:

**[x] Màn hình Tablet**

- **Nhận xét tượng tự như màn hình Desktop**

**[x] Màn hình Mobile**

- **Nhận xét tượng tự như màn hình Desktop**

**[x] Đánh giá chung bài tập về nhà**: Bài làm còn thiếu **section counter**, cần xem lại phần **header** và đặc biệt là màn hình desktop của **section hero**, cần chú ý đến **senmatic**. Nên áp dụng **grid-system** để `responsive` dễ dàng và hiệu quả hơn. File \_header.scss nên đặt ở trong folder components trong folder scss thay vì đặt ở trong folder home. Nên thay đổi `favicon` và nội dung của thẻ `title` để giúp cho trang web chuyên nghiệp và hỗ trợ quá trình SEO một cách hiệu quả.
