import { createHtml, content } from "./index";

function renderItems() {
  const navItem = ['home', 'menu', 'about']
  const list = document.createElement('ul');

  navItem.forEach((navItem) => 
    list.appendChild(createHtml('li', null, null, navItem))
  );
}