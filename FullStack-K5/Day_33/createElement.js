/** @format */

var Blue = {
  createElement: function (tag, attributes = {}, ...children) {
    var element = document.createElement(tag);
    if (children.length) {
      children.forEach((item) => {
        element.append(item);
      });
    }

    if (Object.keys(attributes).length) {
      Object.keys(attributes).forEach((key) => {
        if (key.startsWith("on")) {
          var event = key.replace("on", "").toLocaleLowerCase();
          element.addEventListener(event, attributes[key]);
        } else if (key.startsWith("data")) {
          var dataset = key.replace("data-", "");
          element.dataset[dataset] = attributes[key];
        } else {
          element.setAttribute(key, attributes[key]);
        }
      });
    }
    return element;
  },
};

export default Blue;
