# Huy review bài tập về nhà buổi 20 - Lớp Fullstack K5

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-20/)

- **Bài làm rất tốt**

- Bài làm đang có 2 biến là `box` và `highlightWord` chưa được khai báo.

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Cần chú ý hơn trong việc khai báo biến.

## [Tran The Vi](https://tranthevink.github.io/f8_fullstack_k5/Homework/day18_2/ex-01.html)

- **Bài làm rất tốt\***

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Nguyen Tuan Hung](https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN-no20/)

- **Bài làm chưa tốt**

- Đề bài yêu cầu không được sử dụng mảng trong khi bài làm đang sử dụng mảng.

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Yêu cầu đọc kỹ đề bài.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-20/)

- **Bài làm rất tốt\***

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/FSK5/day_20/)

- **Bài làm chưa tốt**

- Đề bài yêu cầu không được sử dụng mảng trong khi bài làm đang sử dụng mảng.

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Yêu cầu đọc kỹ đề bài.

## [Luu Ngoc Duong](https://duongluu9898.github.io/f8-duongluu-fullstack-k5/day20/)

- **Bài làm chưa tốt**

- Bài làm đang có 2 biến là `content` và `highlightWord` chưa được khai báo.

- Đề bài yêu cầu sau khi highlight đến chữ cuối cùng thì sẽ quay lại về highlight chữ đầu tiền và vòng lặp như vậy sẽ liên tục diễn ra tuy nhiên trong bài làm khi highlight đến chữ cuối cùng thì dừng lại do khi `index` tăng dần và lớn hơn `thisString.length` chưa set `index` lại về giá trị 0.

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần chú ý hơn trong việc khai báo biến và yêu cầu của đề bài.

## [Nguyen Ngoc Minh](https://minhhnguyenn.github.io/F8_Fullstack_BTVN/Btvnbuoi20/Btvnbuoi20)

- **Bài làm rất tốt\***

- Có thể tham khảo cách sau đây:

  ```js
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.
