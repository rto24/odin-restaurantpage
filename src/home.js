import { createHtml, mainContent } from "./index";

function renderItems() {
  const title = createHtml('h1', null, 'title', 'Restaurant Name');
  const subTitle = createHtml('h3', null, 'sub-title', 'Welcome');
}

export { renderItems as renderHome };