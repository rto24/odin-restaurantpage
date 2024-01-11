import { renderNav } from "./nav";
import { renderHome } from "./home";
import { renderFooter } from "./footer";

const mainContent = document.getElementById("content");

function createHtml(type, id, classList, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classList)
    classList.forEach((thisClass) => element.classList.add(thisClass));
  if (content) element.textContent = content;

  return element;
}

function homePage() {
  content.innerHTML = "";
  renderNav();
  renderHome();
  renderFooter();
};

function menuPage() {
  content.innerHTML = "";
}

function aboutPage() {
  content.innerHTML = "";
}

homePage();

export { createHtml, mainContent };
