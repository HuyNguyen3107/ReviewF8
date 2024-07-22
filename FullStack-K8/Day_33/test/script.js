var list = document.querySelector(".list");
var listItem = list.querySelectorAll(".list-item");
var lessonIndex = 0;
var moduleIndex = 0;
function render(rootEl) {
  var childArray = Array.from(rootEl.children);
  childArray.forEach(function (child) {
    child.draggable = true;
    var title = "Bài";
    var text = child.children[0].innerText;
    if (child.classList.contains("active")) {
      title = "Module";
      moduleIndex++;
    } else {
      lessonIndex++;
    }
    child.innerHTML = `${title} ${
      title === "Module" ? moduleIndex : lessonIndex
    }: <span>${text}</span>`;
  });
}

function getMouseOffset(el) {
  const temp = el;
  var boundingRect = el.getBoundingClientRect();
  return temp.pageY - boundingRect.top;
}
function getHalfHeight(el) {
  var boundingRect = el.getBoundingClientRect();
  return (boundingRect.bottom - boundingRect.top) / 2;
}
function sortable(rootEl, onUpdate) {
  var draggedItem;
  render(rootEl);

  rootEl.addEventListener("dragstart", function (e) {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", draggedItem.textContent);
    draggedItem.classList.add("dragging");
    rootEl.addEventListener("dragover", handleDragOver);
    rootEl.addEventListener("dragend", handleDragEnd);
  });
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    var targetItem = e.target;
    if (
      targetItem !== draggedItem &&
      targetItem.classList.contains("list-item")
    ) {
      console.log(targetItem);
      var offsetY = getMouseOffset(targetItem);
      var middleY = getHalfHeight(targetItem);
      // console.log(offsetY, middleY);
      if (offsetY > middleY) {
        targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
      } else {
        targetItem.parentNode.insertBefore(draggedItem, targetItem);
      }
    }
  }
  function handleDragEnd(e) {
    e.preventDefault();
    rootEl.removeEventListener("dragover", handleDragOver);
    rootEl.removeEventListener("dragend", handleDragEnd);
    draggedItem.classList.remove("dragging");
    onUpdate(draggedItem);
  }
}
sortable(list, function () {
  lessonIndex = 0;
  moduleIndex = 0;
  render(list);
});
