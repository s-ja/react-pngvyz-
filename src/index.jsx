import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './ES/class.syntax';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App message="hi likelion" />
  </StrictMode>
);
