const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const savedTheme = localStorage.getItem('Theme');

if (savedTheme) {
  refs.body.classList.add(savedTheme);
  if (savedTheme === Theme.DARK) {
    refs.themeSwitch.checked = true;
  }
}

refs.themeSwitch.addEventListener('change', onThemeSwitchClick);

function onThemeSwitchClick() {
  if (refs.themeSwitch.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
  // event.preventDefault();
  // if ((refs.themeSwitch.checked = true)) {
  //   refs.body.classList.add(Theme.DARK);
  // }
  // if ((refs.themeSwitch.checked = false)) {
  //   refs.body.classList.add(Theme.LIGHT);
  // }
  // console.log('megohuy');
  // if (JSON.parse(savedTheme) === null) {
  //   darkTheme();
  // }
  // if (JSON.parse(savedTheme) === Theme.DARK) {
  //   lightTheme();
  // }
  // if (JSON.parse(savedTheme) === Theme.LIGHT) {
  //   darkTheme();
  // }
  // if (JSON.parse(savedTheme) === ) {
  //   lightTheme();
  // }
  // if ((themeSwitchRef.checked = true)) {
  //   darkTheme();
  // }
}

// function darkTheme() {
//   // localStorage.removeItem('Theme');
//   bodyRef.classList.remove(Theme.LIGHT);
//   bodyRef.classList.add(Theme.DARK);
//   // themeSwitchRef.checked = true;
//   localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
// }

// function lightTheme() {
//   // localStorage.removeItem('Theme');
//   bodyRef.classList.remove(Theme.DARK);
//   bodyRef.classList.add(Theme.LIGHT);
//   // themeSwitchRef.checked = false;
//   localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
// }
