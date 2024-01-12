import { createHtml, mainContent } from "./index";

function renderItems() {
  const aboutHeader = createHtml(
    'h1', 
    null, 
    ['about-header'], 
    'ABOUT'
  );

  const aboutDesc = createHtml(
    'p', 
    null, 
    ['about-desc'], 
    'Restaurant description goes here'
  );

  const aboutCont = createHtml(
    'div',
    null,
    ['about-container'],
    null
  );

  mainContent.appendChild(aboutCont);
  aboutCont.appendChild(aboutHeader);
  aboutCont.appendChild(aboutDesc);
}

export { renderItems as renderAbout };