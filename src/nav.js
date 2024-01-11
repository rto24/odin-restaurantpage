import { createHtml, content } from "./index";

function renderItems() {
  const navItem = ['home', 'menu', 'about']
  const list = document.createElement('ul');

  navItem.forEach((navItem) => 
    list.appendChild(createHtml('li', null, null, navItem))
  );

  const navCont = document.createElement('div');
  navCont.appendChild(list);
  content.appendChild(navCont);
}

export { renderItems as renderNav };
