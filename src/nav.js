import { createHtml, mainContent } from "./index";

function renderItems() {
  const navItem = ['home', 'menu', 'about']
  const list = document.createElement('ul');

  navItem.forEach((item) => 
    list.appendChild(createHtml('li', null, null, item))
  );

  const navCont = document.createElement('div');
  navCont.classList.add('navBar');
  mainContent.appendChild(navCont);
  navCont.appendChild(list);
  
}

export { renderItems as renderNav };
