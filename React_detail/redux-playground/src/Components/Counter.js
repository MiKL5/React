import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; // ce hook de React-redux permet l'accés aux données

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  // le destructuring permet de créer les contante (cart et count) et deretourner un objet contenant d'autre objets (AddCartReducer et CounterReducer)
  const {cart, count} = useSelector(state => ({// parenthèse car il y a du JS sur plusieurs lignes
    ...state.AddCartReducer,
    ...state.CounterReducer
  }))
  const dispatch = useDispatch(); // cette méthode retuourn la fonction dispatch pour envoyer un action
  const incrFunc = () => { // action d'incrémentation
    dispatch({
      type: "INCR" // aucune donnée ne part car il n'y a pas de payload
    })
  }
  const decrFunc = () => { // décrémentaiton
    dispatch({
      type: "DECR"
    })
  }
  const addToCartFunc = () => {
    dispatch({
        type: "ADDCART",
        payload: cartData
    })
}
  return (
      <div>
        <h1>Articles : {count}</h1>
        <button onClick={decrFunc}>-1</button>
        <button onClick={incrFunc}>+1</button>
        <h1>Votre panier à {cart} articles</h1>
        <input value={cartData} 
        onInput={e => setCartData(e.target.value)} // e = évênement
        type="number" />
        <br />
        <button onClick={addToCartFunc}>Ajouter au panier</button>
      </div>
  )
}