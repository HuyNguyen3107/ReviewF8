var arr = [
  {
    img: "https://picsum.photos/200",
    title: "title 1",
    desc: "desc 1",
  },
  {
    img: "https://picsum.photos/200",
    title: "title 2",
    desc: "desc 2",
  },
  {
    img: "https://picsum.photos/200",
    title: "title 3",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ex at fugiat consequuntur rem obcaecati autem a harum saepe temporibus. Nemo laboriosam odio vero deleniti explicabo. Nulla quos repellat porro delectus, commodi rem voluptas non ipsa saepe? Ducimus eum voluptate harum deserunt laudantium delectus ipsum, accusantium repellat, fuga neque possimus.",
  },
];

var container = document.querySelector(".container");
console.log(container);
arr.map(function (item) {
  var div = document.createElement("div");
  div.className = "item";
  div.innerHTML = ` <img src=${item.img} alt="img" />
    <div class="content">
      <span class="title">${item.title}</span>
      <p class="desc">${item.desc}</p>
    </div>`;
  container.appendChild(div);
});
