import { createHtml, mainContent } from "./index";

function renderItems() {
  const titleCont = document.createElement('div');
  titleCont.classList.add('title-cont');

  // Titles
  const title = createHtml('h1', null, ['title'], 'Restaurant Name');
  const subTitle = createHtml('h3', null, ['sub-title'], 'Welcome');

  // Menu button
  const menuBtn = createHtml('button', null, ['menu-btn'], 'Menu');

  mainContent.appendChild(titleCont);

  titleCont.appendChild(title);
  titleCont.appendChild(subTitle);
  titleCont.appendChild(menuBtn);
}

export { renderItems as renderHome };