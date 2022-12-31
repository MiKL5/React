import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // appmique le style sur toute l'appli, pas besoin de l'importer ailleurs
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);