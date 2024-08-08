var products = [
  { id: 1, name: "Sản phẩm 1", price: 1000, value: 1 },
  { id: 2, name: "Sản phẩm 2", price: 2000, value: 1 },
  { id: 3, name: "Sản phẩm 3", price: 3000, value: 1 },
  { id: 4, name: "Sản phẩm 4", price: 4000, value: 1 },
];

var carts = [];
var table = document.querySelector("#product_table");
var tbody = table.querySelector("tbody");
var cartTable = document.querySelector("#cart_table");
var tbodyTable = cartTable.querySelector("tbody");

// rende
var html = products
  .map(function (product, index) {
    return `
          <tbody>
            <tr data-index="${index}">
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>
                <input
                  type="number"
                  id="quantity_${product.id}"
                  value="${product.value}"
                  style="width: 90%; display: block; margin: 0 auto"
                />
                <button
                  type="button"
                  style="width: 100%"
                  id="add_to_cart_${product.id}"
                >
                  Thêm vào giỏ
                </button>
              </td>
            </tr>
          </tbody>
        `;
  })
  .join("");
tbody.innerHTML = html;

// Show cart
var showCart = function () {
  var cartHTML = carts
    .map(function (cart, cartIndex) {
      return `
            <tr data-index="${cartIndex}">
              <td>${cart.id}</td>
              <td>${cart.name}</td>
              <td>${cart.price}</td>
              <td>
                <input
                  type="number"
                  class="quantity"
                  data-id="${cartIndex}"
                  value="${cart.value}"
                />
              </td>
              <td>${cart.price * cart.value}</td>
              <td>
                <button type="button" class="delete-item">Xoá</button>
              </td>
            </tr>
          `;
    })
    .join("");

  tbodyTable.innerHTML = cartHTML;
  updateTotal();
};

// cnhat số lượng
var updateTotal = function () {
  var totalQuantity = carts.reduce(function (sum, cart) {
    return sum + cart.value;
  }, 0);

  var totalAmount = carts.reduce(function (sum, cart) {
    return sum + cart.price * cart.value;
  }, 0);

  var totalRow = `
        <tr>
          <td colspan="3">Tổng</td>
          <td>${totalQuantity}</td>
          <td colspan="2">${totalAmount}</td>
        </tr>
      `;

  if (
    tbodyTable
      .querySelector("tr:last-child")
      .querySelector("td")
      .textContent.trim() === "Tổng"
  ) {
    tbodyTable.querySelector("tr:last-child").outerHTML = totalRow;
  } else {
    tbodyTable.insertAdjacentHTML("beforeend", totalRow);
  }
};

// thêm
tbody.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.localName === "button") {
    var row = e.target.closest("tr");
    var index = row.dataset.index;
    var valueInput = row.querySelector("input").value;
    var product = products[index];

    var existingProductIndex = carts.findIndex(function (cart) {
      return cart.id === product.id;
    });
    if (existingProductIndex !== -1) {
      console.log("ok1");

      carts[existingProductIndex].value = Number(valueInput);
    } else {
      console.log("ok");

      var newProduct = { ...product, value: Number(valueInput) };
      carts.push(newProduct);
    }

    showCart();
  }
});
// cập nhật chưa hoàn thành
// cartTable.addEventListener("change", function (e) {
//   if (e.target.classList.contains("quantity")) {
//     var index = e.target.dataset.id;

//     showCart();
//   }
// });

document.querySelector("#delete_cart").addEventListener("click", function () {
  carts = [];
  showCart();
});
// xóa mảng
cartTable.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-item")) {
    var row = e.target.closest("tr");
    var index = row.dataset.index;
    carts.splice(index, 1);
    showCart();
  }
});
