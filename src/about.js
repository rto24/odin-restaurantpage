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
}

export { renderItems as renderAbout };