var productTable = document.querySelector("#product_table");
var products = [
  {
    name: "Sản phẩm 1",
    price: "1000",
  },
  {
    name: "Sản phẩm 2",
    price: "2000",
  },
  {
    name: "Sản phẩm 3",
    price: "3000",
  },
];
var productIndex = 1;
var inputId = 1;
// var buttonId = 1;

//Tạo danh sách sản phẩm
var newProduct = {
  createElement: function (tag, attributes = {}, ...children) {
    var element = document.createElement(tag);
    if (children.length) {
      children.forEach(function (item) {
        element.append(item);
      });
    }
    if (Object.keys(attributes).length) {
      Object.keys(attributes).forEach(function (attribute) {
        var value = attributes[attribute];
        element.setAttribute(attribute, value);
      });
    }
    return element;
  },
};

products.forEach(function (product) {
  var addProduct = newProduct.createElement(
    "tbody",
    {},
    newProduct.createElement(
      "tr",
      {},
      newProduct.createElement("td", {}, productIndex++),
      newProduct.createElement("td", {}, product.name),
      newProduct.createElement("td", {}, product.price),
      newProduct.createElement(
        "td",
        {},
        newProduct.createElement("input", {
          type: "number",
          id: "quantity_" + inputId++,
          value: "1",
          style: "display: block; width: 90%; margin: 0 auto",
        }),
        newProduct.createElement(
          "button",
          {
            type: "button",
            id: "add_to_cart",
            style: "width: 100%",
          },
          "Thêm vào giỏ"
        )
      )
    )
  );
  productTable.append(addProduct);
});

//Thêm vào giỏ hàng
var cartCount = 1;
var cart = [];
var addProductBtn = document.querySelectorAll("#add_to_cart");
addProductBtn.forEach(function (productBtn) {
  productBtn.addEventListener("click", function () {
    if (!cart.length) {
      cart.push({
        id: cartCount++,
        name: productBtn.parentElement.previousElementSibling
          .previousElementSibling.innerText,
        quantity: Number(productBtn.previousElementSibling.value),
        price: Number(
          productBtn.parentElement.previousElementSibling.innerText
        ),
      });
    } else {
      var check = 0;
      cart.forEach(function (item) {
        check++;
        if (
          item.name ===
          productBtn.parentElement.previousElementSibling.previousElementSibling
            .innerText
        ) {
          item.quantity += Number(productBtn.previousElementSibling.value);
          check--;
        } else {
          if (check === cart.length) {
            cart.push({
              id: cartCount++,
              name: productBtn.parentElement.previousElementSibling
                .previousElementSibling.innerText,
              quantity: Number(productBtn.previousElementSibling.value),
              price: Number(
                productBtn.parentElement.previousElementSibling.innerText
              ),
            });
          }
        }
      });
    }
    if (checkTable) {
      createCart();
      addCart();
      checkTable = false;
    } else {
      addCart();
    }
  });
});
var checkTable = true;

//Tạo cart_table
var cartData = document.querySelector("#cart_data");
var cartTable = document.querySelector("#cart_table");
var totalProduct = 0,
  totalPrice = 0;
var cartTable = newProduct.createElement(
  "table",
  {
    width: "100%",
    border: "1",
    id: "cart_table",
    cellpadding: "0",
    cellspacing: "0",
  },
  newProduct.createElement(
    "thead",
    {},
    newProduct.createElement(
      "tr",
      {},
      newProduct.createElement("th", { width: "5%" }, "STT"),
      newProduct.createElement("th", {}, "Tên Sản phẩm"),
      newProduct.createElement("th", { width: "20%" }, "Giá"),
      newProduct.createElement("th", { width: "20%" }, "Số lượng"),
      newProduct.createElement("th", { width: "20%" }, "Thành tiền"),
      newProduct.createElement("th", { width: "5%" }, "Xóa")
    )
  ),
  newProduct.createElement(
    "tbody",
    {},
    newProduct.createElement(
      "tr",
      {},
      newProduct.createElement("td", { colspan: "3" }, "Tổng"),
      newProduct.createElement("td", {}, totalProduct),
      newProduct.createElement("td", { colspan: "2" }, totalPrice)
    )
  )
);
var checkTable = true;

//Tạo cart-table
var createCart = function () {
  checkTable = false;
  cartData.innerText = "";
  cartData.append(cartTable);

  var hr = document.createElement("hr");
  cartData.append(hr);
  var updateBtn = newProduct.createElement(
    "button",
    { type: "button", id: "update_cart" },
    "Cập nhật giỏ hàng"
  );
  var deleteBtn = newProduct.createElement(
    "button",
    { type: "button", id: "delete_cart" },
    "Xóa giỏ hàng"
  );
  cartData.append(deleteBtn);
  cartData.append(updateBtn);
};

//Thêm product vào cart_table
var addCart = function () {
  console.log(cart, cartTable);
  cart.forEach(function (item) {
    var cartProduct = newProduct.createElement(
      "tbody",
      {},
      newProduct.createElement(
        "tr",
        {},
        newProduct.createElement("td", {}, item.id),
        newProduct.createElement("td", {}, item.name),
        newProduct.createElement("td", {}, item.price),
        newProduct.createElement(
          "td",
          {},
          newProduct.createElement("input", {
            type: "number",
            class: "quantity",
            value: item.quantity,
            id: "data" + item.id,
          })
        ),
        newProduct.createElement(
          "td",
          { class: "product-price" },
          item.quantity * item.price
        ),
        newProduct.createElement(
          "td",
          {},
          newProduct.createElement(
            "button",
            { type: "button", class: "delete-item" },
            "Xóa"
          )
        )
      )
    );
    cartTable.insertBefore(cartProduct, cartTable.lastChild);
  });
};
