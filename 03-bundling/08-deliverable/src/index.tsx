import React from 'react';
import { createRoot } from 'react-dom/client';
import logo from './content/logo_1.png';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hello World!</h1>
    <img src={logo} />
  </div>
);
