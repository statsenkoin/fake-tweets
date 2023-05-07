import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components';
import './assets/styles/common.css';
import './assets/styles/variables.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/fake-tweets">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
