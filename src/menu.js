import { createHtml, mainContent } from "./index";

function renderItems() {
  const menuItems = ['pasta', 'pizza', 'pesto'];
  const menuList = document.createElement('ul');

  menuItems.forEach((item) =>
    menuList.appendChild(createHtml('li', null, ['menu-items'], item))
  );

  const menuCont = document.createElement('div');
  menuCont.classList.add('menu');
  mainContent.appendChild(menuCont);
  menuCont.appendChild(menuList);

}

export { renderItems as renderMenu };