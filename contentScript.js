var lastTitle = "";
let div = document.createElement('div');
div.id = "title-extension"
div.style.fontSize = '27px';
div.style.color = 'WHITE';
div.style.position = "absolute";
div.style.padding = "10px";
document.body.appendChild(div);

setInterval(() => {
  let textElement = document.querySelector('.medium.default-ltr-cache-m1ta4i');
  if(textElement !== null) {
    lastTitle = textElement.textContent;
  };
  div.textContent = textElement ? textElement.textContent : lastTitle;
}, 100);