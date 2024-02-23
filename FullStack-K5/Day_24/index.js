function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
}

const data = [];

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Thông tin không đầy đủ, vui lòng kiểm tra lại.");
    return;
  }

  const existingUsers = data.filter((user) => user.email === email);
  if (existingUsers.length > 0) {
    console.log("Email đã tồn tại.");
    return existingUsers;
  }

  const newUser = new User(name, password, email);
  data.push(newUser);
  return newUser;
}

function handleLogin(email, password) {
  const user = data.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ.");
    return;
  }
}

const dataRegister1 = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log("data =", data);
console.log("dataLogin =", dataLogin);
