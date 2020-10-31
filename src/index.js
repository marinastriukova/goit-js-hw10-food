import './styles.css';

import menu from './menu.json';
import itemsTemplate from './templates/itemsTemplate.hbs';
import {listRef, inputEl} from './scripts/domEl';
import checkUpTheme from './scripts/checkUpTheme';
import changeTheme from './scripts/changeTheme';


const markup = itemsTemplate(menu);
listRef.insertAdjacentHTML('beforeend', markup);

checkUpTheme();
inputEl.addEventListener('change', changeTheme);


