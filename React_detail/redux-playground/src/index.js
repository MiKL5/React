import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render( // render met l'appli dans la div root
  <Provider store={store}>
    <App />
  </Provider>, // la virgule car y a deux arguments provider et getElementById
  document.getElementById("root")
  );
// le reducer et la fonction appler à chaque fois qu'on modifie le state
// le provider alimenter à l'appli depuis le store