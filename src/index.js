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
  renderNav();
  renderFooter();
};

function aboutPage() {
  content.innerHTML = "";
  renderNav();
  renderFooter();
};

homePage();

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if (target === 'HOME') {
    homePage();
  } else if (target === 'MENU') {
    menuPage();
  } else if (target === 'ABOUT') {
    aboutPage();
  }
});

export { createHtml, mainContent };
