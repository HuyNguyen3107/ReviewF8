Array.prototype.reduce2 = function (callback, initialValue) {
  var index = 0;
  var value = initialValue;
  if (!initialValue) {
    value = this[0];
    index = 1;
  }
  for (; index < this.length; index++) {
    value = callback.call(this, value, this[index], index);
  }
  return value;
};
var arr = ["a", 1, true, undefined];
console.log(
  arr.reduce2(function (a, b) {
    console.log(a, b);
    return a + b;
  })
);
