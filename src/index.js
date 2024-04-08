import './styles.css';
import Logo from './logo-transparent-horizontal.png';
import { homeContent } from './homeContent';
import { menuContent } from './menuContent';

document.querySelector('img').src = Logo;
const main = document.getElementById('mainbg');

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

function printHome() {
  clearContent();
  main.appendChild(homeContent());
}
function printMenu() {
  clearContent();
  main.appendChild(menuContent())
}
function printContact() {
  clearContent();
}

function clearContent() {
  main.innerHTML = '';
}

home.addEventListener('click', printHome);
menu.addEventListener('click', printMenu);
contact.addEventListener('click', printContact);