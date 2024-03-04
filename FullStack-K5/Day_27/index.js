var passes = document.querySelectorAll(".pass");
var eyes = document.querySelectorAll(".eye");
console.log(eyes, passes);
for (let i = 0; i < eyes.length; i++) {
  console.log(eyes[i], passes[i]);
  eyes[i].addEventListener("click", function () {
    var check = eyes[i].innerHTML;
    console.log(check === '<i class="fa-regular fa-eye"></i>');
    if (check === '<i class="fa-regular fa-eye"></i>') {
      console.log("1");
      console.log(eyes[i], passes[i]);
      eyes[i].innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      passes[i].type = "password";
    } else {
      console.log("2");
      console.log(eyes[i], passes[i]);
      eyes[i].innerHTML = '<i class="fa-regular fa-eye"></i>';
      passes[i].type = "text";
    }
  });
}
