import {body, inputEl} from './domEl';
import Theme from './colorTheme';


export default function checkUpTheme() {
    if (localStorage['Theme'] === 'dark-theme') {
      body.classList.add(Theme.DARK);
      body.classList.remove(Theme.LIGHT);
      inputEl.checked = true;
    } else {
      body.classList.add(Theme.LIGHT);
      body.classList.remove(Theme.DARK);
    }
  }

