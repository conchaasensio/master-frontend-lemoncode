import './styles.scss';
import logoImg from './content/logo_1.png';

const averageScore = '90';
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);
