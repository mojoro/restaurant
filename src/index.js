import './styles.css';
import Logo from './logo-transparent-horizontal.png';
import { homeContent } from './homeContent';

document.querySelector('img').src = Logo;
const main = document.getElementById('mainbg');
main.appendChild(homeContent());

