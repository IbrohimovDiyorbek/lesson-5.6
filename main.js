let test = prompt("Enter your name!");
let style1 = prompt("Enter your bg color!");
let style = prompt("Enter your color!");
const title = document.createElement("h1");
const text = document.createTextNode(test);
title.appendChild(text);
const main = document.querySelector("body");
main.appendChild(title);
title.style.color = style;
main.style.background = style1;
title.style.textAlign = "center";
title.style.marginTop = "250px";
title.style.fontSize = "200px";