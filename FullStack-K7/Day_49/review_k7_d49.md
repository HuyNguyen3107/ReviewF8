# Review bài tập về nhà buổi 49 - Lớp Fullstack K7

## Công Anh Dũng

Chức năng đăng nhập

- Bài làm chưa thực hiện `validate` khi người dùng không nhập email hoặc nhập email không đúng định dạng.

- Chưa có thông báo khi người dùng nhập một email không tồn tại trong cở sở dữ liệu.

Chức năng thêm todo

- Khi thêm todo thành công bằng phương thức `POST` thì không cần gọi lại todo bằng phương thức `GET` để `render` ra giao diện mà chỉ cần cập nhật `state` **listTodos** để `render` lại là được, tương tự khi sửa, cập nhật và xóa todo.

Chức năng sửa, cập nhật todo

- Bài làm chưa xử lý case nếu người dùng sửa todo thành input trống rồi update thì cần `validate` giá trị sau khi sửa để tránh lỗi logic.

Chức năng xóa todo

- Bài làm xử lý rất tốt chức năng này.

Chức năng tìm kiếm

- Sử dụng kỹ thuật debounce để thực hiện tìm kiếm chưa chính xác

  Đề xuất sửa:

  ```js
  const handleSearchTodo = debounce((e) => {
    getTodos(Cookies.get(API_KEY), e.target.value);
  });

  let timerId;
  const debounce = (e) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      handleSearchTodo(e);
      timerId = null;
    }, 300);
  };

  ...

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo(value);
    if (isSearching) {
      debounce(e);
    }
  };
  ```

Đánh giá chung: Bài làm tốt, tuy nhiên cần lưu ý một số góp ý nêu trên để hoàn thiện hơn.

Note: Bạn sửa lại bài làm theo nhận xét rồi sau đó báo lại cho mình để mình kiểm tra lại nha.
