import { homeContent } from './homeContent';
import { menuContent } from './menuContent';
import { contactContent } from './contactContent';
import { main } from '.';

export function addListeners() {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  function printHome() {
    clearContent();
    main.appendChild(homeContent());
  }
  function printMenu() {
    clearContent();
    main.appendChild(menuContent());
  }
  function printContact() {
    clearContent();
    main.appendChild(contactContent());
  }

  function clearContent() {
    main.innerHTML = '';
  }

  home.addEventListener('click', printHome);
  menu.addEventListener('click', printMenu);
  contact.addEventListener('click', printContact);
}
