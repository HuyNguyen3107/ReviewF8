Number.prototype.getCurrency = function (currencyUnit) {
  return this.toLocaleString("vi-VN") + " " + currencyUnit;
};

String.prototype.getCurrency = function (currencyUnit) {
  var numberValue = parseFloat(this);
  if (!isNaN(numberValue)) {
    return numberValue.toLocaleString("vi-VN") + " " + currencyUnit;
  } else {
    return "Invalid number";
  }
};

var price1 = true;
console.log(price1.getCurrency("đ")); // Hiển thị: 12,000 đ

var price2 = "1200000";
console.log(price2.getCurrency("đ")); // Hiển thị: 12,000,000 đ
