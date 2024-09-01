# Review bài tập về nhà buổi 38 - Lớp FullStack K9

## Thái Việt Hoàn

Bài làm rất tốt

## Đinh Tiến Thành

- Bài làm chưa xử lý được case khi mở Dev Tools vẫn không lấy được link do bài làm chỉ đang kiểm tra trường hợp nếu thẻ `button` có `class="btn"` có thuộc tính `disabled = false` thì mới lấy được link tuy nhiên nếu người dùng bật Dev Tools và xóa thuộc tính `disabled` khỏi thẻ `button` thì sẽ lấy được link do lúc này thẻ button đã không còn thuộc tính `disabled` nữa hay lúc này thuộc tính `disabled` của thẻ `button` có giá trị là `false`.

  Đề xuất sửa:

  ```js
  function updateCountdown(currentTime) {
    if (!lastTime) {
      lastTime = currentTime;
    }

    const deltaTime = currentTime - lastTime;

    if (deltaTime >= 1000) {
      countdown--;
      counterEl.textContent = countdown;
      lastTime = currentTime;

      if (countdown <= 0) {
        counterEl.textContent = 0;
        btnEl.disabled = false;
        btnEl.addEventListener("click", handleGetLink);
        return;
      }
    }

    requestAnimationFrame(updateCountdown);
  }
  btnEl.disabled = true;

  requestAnimationFrame(updateCountdown);

  var handleGetLink = function () {
    if (!btnEl.disabled) {
      window.location.href = "https://fullstack.edu.vn";
    }
  };
  ```

Đánh giá chung: Bài làm tương đối tốt, tuy nhiên cần chú ý kiểm tra kỹ những trường hợp có thể xảy ra.

Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.

## Đỗ Trung Kiên

Bài làm rất tốt

## Nguyễn Xuân Hoàng

- Chưa xử lý được case trong thời gian chờ đợi, nếu chuyển sang tab khác => Bộ đếm sẽ dừng lại.

  Đề xuất sửa:

  ```html
  ...
  <span class="counter">30</span>
  ...
  ```

  ```js
  "use strict";

  const counter = document.querySelector(".counter");
  const btn = document.querySelector(".btn");

  let time = +counter.innerText;
  let check = false;
  let timeCheck = 60;

  const countDown = () => {
    --timeCheck;
    if (timeCheck === 0) {
      --time;
      counter.innerText = time;
      timeCheck = 60;
    }
    if (time === 0) {
      btn.style.cursor = "pointer";
      check = true;
      btn.removeAttribute("disabled");
    }
    if (time > 0) {
      window.requestAnimationFrame(countDown);
    }
  };

  btn.addEventListener("click", () => {
    if (check) {
      window.location.href = "https://fullstack.edu.vn/";
    }
  });

  window.requestAnimationFrame(countDown);
  ```

Đánh giá chung: Bài làm tương đối tốt, tuy nhiên cần chú ý một góp ý nêu trên để hoàn thiện hơn.

Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.

## Mạnh Vũ

- Xử lý case đếm ngược thời gian không đúng với yêu cầu.

- Chưa xử lý được case trong thời gian chờ đợi, nếu chuyển sang tab khác => Bộ đếm sẽ dừng lại.

- Bài làm chưa xử lý được case khi mở Dev Tools vẫn không lấy được link do bài làm chỉ đang kiểm tra trường hợp nếu thẻ `button` có `class="btn"` có thuộc tính `disabled = false` thì mới lấy được link tuy nhiên nếu người dùng bật Dev Tools và xóa thuộc tính `disabled` khỏi thẻ `button` thì sẽ lấy được link do lúc này thẻ button đã không còn thuộc tính `disabled` nữa hay lúc này thuộc tính `disabled` của thẻ `button` có giá trị là `false`.

  Đề xuất sửa:

  ```js
  "use strict";

  const counter = document.querySelector(".counter");
  const btn = document.querySelector(".btn");

  let time = +counter.innerText;
  let check = false;
  let timeCheck = 60;

  const countDown = () => {
    --timeCheck;
    if (timeCheck === 0) {
      --time;
      counter.innerText = time;
      timeCheck = 60;
    }
    if (time === 0) {
      btn.style.cursor = "pointer";
      check = true;
      btn.removeAttribute("disabled");
    }
    if (time > 0) {
      window.requestAnimationFrame(countDown);
    }
  };

  btn.addEventListener("click", () => {
    if (check) {
      window.location.href = "https://fullstack.edu.vn/";
    }
  });

  window.requestAnimationFrame(countDown);
  ```

Đánh giá chung: Bài làm chưa tốt, cần dành nhiều thời gian hơn cho bài tập và chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.

## Trần Hồng Sơn

- Chưa xử lý được case trong thời gian chờ đợi, nếu chuyển sang tab khác => Bộ đếm sẽ dừng lại.

- Bài làm đang sử dụng `setInterval` trong khi yêu cầu bài tập là `Không được sử dụng: setInterval, setTimeout`.

Đề xuất sửa:

```js
"use strict";

const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");

let time = +counter.innerText;
let check = false;
let timeCheck = 60;

const countDown = () => {
  --timeCheck;
  if (timeCheck === 0) {
    --time;
    counter.innerText = time;
    timeCheck = 60;
  }
  if (time === 0) {
    btn.style.cursor = "pointer";
    check = true;
    btn.removeAttribute("disabled");
  }
  if (time > 0) {
    window.requestAnimationFrame(countDown);
  }
};

btn.addEventListener("click", () => {
  if (check) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});

window.requestAnimationFrame(countDown);
```

Đánh giá chung: Cần dành nhiều thời gian hơn cho bài tập, chú ý đọc kỹ yêu cầu và chủ động đặt câu hỏi cho trợ giảng để có thể giải quyết bài tập một cách tốt nhất.

Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.

##
