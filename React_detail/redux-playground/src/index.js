import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'react';
import { Provider } from 'react-redux';
import CounterReducer from './Reducers/CounterReducer';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const Store = createStore(CounterReducer);
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, // la virgule car y a deux arguments provider et getElementById
  document.getElementById("root")
);
// le reducer et la fonction appler à chaque fois qu'on modifie le state
// le provider alimenter à l'appli depuis le store