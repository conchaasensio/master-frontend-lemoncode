import React from 'react';
import { createRoot } from 'react-dom/client';
import logo from './content/logo_1.png';
import './styles.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>¡Hola, mundo!</h1>
    <img src={logo} />
  </div>
);
