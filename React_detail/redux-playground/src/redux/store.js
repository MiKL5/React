// le dossier redux est en minuscule pour être différencier des autres
// le store n'est pas vraiement un composant
import { createStore, combineReducers, applyMiddleware } from "redux"; // combineReducers est une méthode pour combiner les reducers
import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/addCartReducer";

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
    CounterReducer,
    AddCartReducer
})
// ce qui suit est de la purification, c'est à dirr plusiers fonction se retournent à la suite, ça sert à avec à toutes les fonction dans le corps de fonciton
const customMiddleware = store => next => action => {
    console.log(store); // donne le state avant que le dispatch ne soit effectué
    console.log(next); //  est une fonction appelée quand le travail est fini dans le middleware
    console.log(action); // c'est l'action du dispatch

    const actionModif ={
        type: "ADDCART",
        payload: 789
    }
    next(actionModif) // donne une nouvelle action
}

const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;
// au lieu mettre tout les reducers dans un dossier Reducers on peux créer dans Redux des dossier nominatifs comme articles panier srtt quand il y a bcp de reducers pour gérer la logique plus intuitivement