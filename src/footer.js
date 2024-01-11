import { createHtml, mainContent } from "./index";

function renderItems() {
  const footerCont = document.createElement('div');
  footerCont.classList.add('footer');
  const footer = createHtml(
    'p', 
    null, 
    ['footer-text'], 
    'Developed by rto24 for The Odin Project'
    );

  mainContent.appendChild(footerCont);

  footerCont.appendChild(footer);
}

export { renderItems as renderFooter };