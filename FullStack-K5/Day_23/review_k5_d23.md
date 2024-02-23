# Review bài tập về nhà buổi 22 - Lớp Fullstack K5

## [Le Tung Duong](https://github.com/duong1801/f8-fullstack-k5/blob/main/Day-22/main.js)

**[x] Bài 1:**

- **Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp nếu như một trong hai biến `arrA, arrB` không phải là mảng

- Với mảng trả về kết quả giao giữa hai mảng không nên có các phần tử trùng nhau

- Có thể tham khảo đoạn code sau:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
  ```

**[x] Bài 2:**

- **Bài làm rất tốt**

- Bài làm chưa kiếm tra trường hợp biến `arr` không phải làm một mảng

- Có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

**[x] Bài 3:**

- **Bài làm rất tốt**

- Bài làm chưa kiếm tra trường hợp biến `arr` không phải làm một mảng

- Có thể tham khảo đoạn code sau:

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, []);
      var result = [];
      for (var index in array) result.push(array[index]);
      return result;
    } else return "không phải mảng.";
  })(arr);
  console.log("result", result);
  ```

**[x] Bài 4:**

- **Bài làm chưa tốt**

- Bài làm thiết kế rất tốt mảng phù hợp để đổ dữ liệu lên giao diện tuy nhiên bài làm chưa đổ dữ liệu lên giao diện.

**[x] Đánh giá chung:** **Bài làm tốt**, cần chú ý kiểm tra các trường hợp có thể xảy ra ở các bài và hoàn thiện việc đổ dữ liệu lên giao diện ở bài 4.

## [Nguyen Tien Dat](https://github.com/tiendat211294/f8_offline_k5/blob/main/buoi-22/script.js)

**[x] Bài 1:**

- **Bài làm rất tốt**

- Có thể tham khảo đoạn code sau:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
  ```

**[x] Bài 2:**

- **Bài làm rất tốt**

- Có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

**[x] Bài 3:**

- **Bài làm rất tốt**

- Có thể tham khảo đoạn code sau:

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, []);
      var result = [];
      for (var index in array) result.push(array[index]);
      return result;
    } else return "không phải mảng.";
  })(arr);
  console.log("result", result);
  ```

**[x] Bài 4:**

- **Bài làm tốt**

- Bài làm thiết kế tốt mảng phù hợp để đổ dữ liệu lên giao diện và đã đổ dữ liệu lên giao diện tuy nhiên giao diện chưa đúng với yêu cầu đề bài

- Có thể tham khảo đoạn code sau:

**CSS**

```css
.posts .post-item {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}

.posts .post-item.post-right {
  flex-direction: row-reverse;
}
```

**Javascript**

```js
var posts = [
  {
    title: "Tiêu đề bài viết 1",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 2",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 3",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 4",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 5",
    image:
      "https://fastly.picsum.photos/id/223/536/354.jpg?hmac=-b1ZzaPJzoKI2MeDwuhFxq5haxwKO6WiL4Jdo7BC_O4",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },
];

var html = `<div class="posts">
  ${posts
    .map(function (post, index) {
      return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
          <img src="${post.image}" alt="">
          <div>
            <h2>${post.title}</h2>
            <p>
              ${post.description}
            </p>
          </div>
        </div>
        <!--End .post-item-->`;
    })
    .join("")}
  </div>`;

document.write(html);
//Client Side Rendering
```

**[x] Đánh giá chung:** **Bài làm rất tốt**, cần chú ý làm đúng yêu cầu giao diện của bài 4.

## [Ngo Hoang Kim](https://github.com/kzau1612/FSK5/blob/backup/FSK5/day_22/js)

**[x] Bài 1:**

- **Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp nếu như một trong hai biến `arrA, arrB` không phải là mảng

- Với mảng trả về kết quả giao giữa hai mảng không nên có các phần tử trùng nhau

- Có thể tham khảo đoạn code sau:

  ```js
  var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
  var arrB = [5, 2, 6, 7, 1, 3];
  function filter(array) {
    return array.reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, []);
  }
  function filterIncludes(arrA, arrB) {
    if (Array.isArray(arrA) && Array.isArray(arrB))
      return filter(arrA.filter((n) => arrB.includes(n)));
    else return "arrA hoặc arrB không phải mảng";
  }
  console.log(filterIncludes(arrA, arrB));
  ```

**[x] Bài 2:**

- **Bài làm tốt**

- Bài làm chưa kiếm tra trường hợp biến `arr` không phải làm một mảng

- Bài làm chỉ đúng khi toàn bộ dữ liệu trong mảng đều thuộc kiểu dữ liệu `number` do khi sử dụng hàm `map` để trả về một mảng mới `return` của `callback` trả về giá trị sau khi đã được ép kiểu dữ liệu sang kiểu dữ liệu `number`

- Có thể tham khảo phương thức `flat` sẽ trả về một mảng mới đã được làm phẳng.Tham số truyền vào cho phương thức này là độ sâu tối đa mà nó sẽ làm phẳng mảng.Trong trường hợp này, nếu muốn làm phẳng mảng đến cấp độ tối đa nên truyền vào giá trị `Infinity`

  ```js
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var result = (function () {
    if (Array.isArray(arr)) return arr.flat(Infinity);
    else "arr không phải mảng";
  })();
  console.log("result", result);
  ```

**[x] Bài 3:**

- **Bài làm tốt**

- Bài làm chưa kiểm tra trường hợp biến `arr` không phải là mảng

- Bài làm chỉ đúng khi các phần tử của mảng `arr` đểu là mảng

- Cách giải quyết bài toán đang là **quá thủ công**

- Có thể tham khảo đoạn code sau:

  ```js
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
    [null, undefined, function () {}],
    [[], null, undefined, function () {}],
  ];
  const result = (function (arr) {
    if (Array.isArray(arr)) {
      var array = arr.flat(Infinity).reduce((acc, item) => {
        var type = typeof item;
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      }, []);
      var result = [];
      for (var index in array) result.push(array[index]);
      return result;
    } else return "không phải mảng.";
  })(arr);
  console.log("result", result);
  ```

**[x] Bài 4:**

- **Bài làm rất tốt**

**[x] Đánh giá chung:** **Bài làm tốt**, cần chú ý kiểm tra các trường hợp có thể xảy ra ở các bài và có thể sử dụng một số phương thức cho trước hoặc các phương thức đơn giản hơn để làm bài một cách dễ hiểu hơn.
