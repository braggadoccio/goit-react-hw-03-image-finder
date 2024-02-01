import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BASE_URL, options } from './pixabay-api.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
