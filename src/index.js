import './styles.css';
import Logo from './logo-transparent-horizontal.png';
import { homeContent } from './homeContent';
import { addListeners } from './addListeners';

document.querySelector('img').src = Logo;

export const main = document.getElementById('mainbg');
main.appendChild(homeContent());

addListeners();