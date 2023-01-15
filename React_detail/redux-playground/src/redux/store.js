// le dossier redux est en minuscule pour être différencier des autres
// le store n'est pas vraiement un composant
import { createStore, combineReducers, applyMiddleware } from "redux"; // combineReducers est une méthode pour combiner les reducers
import counterReducer from "./reducers/counterReducer";
import addCartReducer from "./reducers/addCartReducer";
import dataImgReducer from "./reducers/dataImgReducer";
import thunk from "redux-thunk"

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
    counterReducer,
    addCartReducer,
    dataImgReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
// au lieu mettre tout les reducers dans un dossier Reducers on peux créer dans Redux des dossier nominatifs comme articles panier srtt quand il y a bcp de reducers pour gérer la logique plus intuitivement