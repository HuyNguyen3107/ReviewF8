var n = 10;
function fibonacci(n, f1, f2) {
  if (n > 0 && n % 1 === 0) {
    console.log(get(n, 0, 1, 0));
  } else if (n === 2) {
    console.log(f1);
    console.log(f2);
  } else if (n === 1) {
    console.log(f1);
  } else if (count <= 0) {
    console.log("moi nhap lai: ");
  }
}
function get(n, f1, f2, fn) {
  if (n > 0 && n % 1 === 0) {
    console.log(fn);
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
    get(n - 1, f1, f2, fn);
  }
}

console.log(fibonacci(n, 0, 1));
