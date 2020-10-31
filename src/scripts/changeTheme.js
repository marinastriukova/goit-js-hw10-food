import {body} from './domEl';
import Theme from './colorTheme';

export default function changeTheme(evt) {
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
