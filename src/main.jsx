import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import { HeroesApp } from './HeroesApp';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <HeroesApp />
    </HashRouter>
  </React.StrictMode>
);
