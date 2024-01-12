import { createHtml, mainContent } from "./index";

function renderItems() {
  const menuCont = document.createElement('div');
  const menuItems = ['pasta', 'pizza', 'pesto'];
  const menuList = document.createElement('ul');

  menuItems.forEach((item) =>
    menuList.appendChild(createHtml('li', null, ['menu-items'], item))
  );
}

export { renderItems as renderMenu };