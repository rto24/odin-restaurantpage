import { renderNav } from "./nav";
import { renderHome } from "./home";

const mainContent = document.getElementById("content");

function createHtml(type, id, classList, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classList)
    classList.forEach((thisClass) => element.classList.add(thisClass));
  if (content) element.textContent = content;

  return element;
}

renderNav();
renderHome();

export { createHtml, mainContent };
