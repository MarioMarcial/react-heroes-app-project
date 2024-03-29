import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import { HeroesApp } from './HeroesApp';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);
