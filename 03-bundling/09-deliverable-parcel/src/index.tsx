import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hello } from './hello.component';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello />
  </div>
);
