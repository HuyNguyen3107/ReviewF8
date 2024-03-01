Array.prototype.filter2 = function (callback) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    var check = callback(this[i], i, this);
    if (check) {
      result.push(this[i]);
    }
  }
  return result;
};
var arr = [1, 2, 3, 4, 5];
var result = arr.filter2(function (number) {
  if (number % 2 !== 0) {
    return true;
  }
});
console.log(result);
