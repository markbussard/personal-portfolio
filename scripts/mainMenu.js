const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


function main () {
  const mainMenu = $('.main-menu');
  const mainMenuButton = $('.main-menu-button');
  const mainMenuNavItems = $$('header menu nav a');

  mainMenuButton.addEventListener('click', (e) => {
    e.preventDefault();
    mainMenu.classList.toggle('mobile-open');
    mainMenuButton.classList.toggle('transform');
  });

  mainMenuNavItems.forEach((navItem)=> {
    navItem.addEventListener('click', () => {
      if (mainMenu.classList.contains('mobile-open')) {
        mainMenu.classList.toggle('mobile-open');
        mainMenuButton.classList.toggle('transform');
      }
    })
  })
}

window.onload = () => main();
