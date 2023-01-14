// le dossier redux est en minuscule pour être différencier des autres
// le store n'est pas vraiement un composant
import { createStore, combineReducers } from "redux"; // combineReducers est une méthode pour combiner les reducers
import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/addCartReducer";

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
    CounterReducer,
    AddCartReducer
})

const store = createStore(rootReducer);

export default store;
// au lieu mettre tout les reducers dans un dossier Reducers on peux créer dans Redux des dossier nominatifs comme articles pannier srtt quand il y a bcp de reducers pour gérer la logique plus intuitivement