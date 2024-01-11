import { createHtml, mainContent } from "./index";

function renderItems() {
  const titleCont = document.createElement('div');
  const title = createHtml('h1', null, ['title'], 'Restaurant Name');
  const subTitle = createHtml('h3', null, ['sub-title'], 'Welcome');

  mainContent.appendChild(titleCont);

  titleCont.appendChild(title);
  titleCont.appendChild(subTitle);
}

export { renderItems as renderHome };