import './styles.css';
import menu from './menu.json';
import itemsTemplate from './templates/itemsTemplate.hbs';

const listRef = document.querySelector('.js-menu');
const body = document.querySelector('body');
const inputEl = document.querySelector('#theme-switch-toggle');

const markup = itemsTemplate(menu);
listRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function checkUpTheme() {
  if (localStorage['Theme'] === 'dark-theme') {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    inputEl.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
}

checkUpTheme();
inputEl.addEventListener('change', changeTheme);

function changeTheme(evt) {
  if (evt.target.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
