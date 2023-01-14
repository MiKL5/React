import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; // ce hook de React-redux permet l'accés aux données

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  const cart = useSelector(state => state.cart) // avec cette fonction call back ce hook permet de se connecter directement au store pour utiliser directemt le state
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
          <h1>Votre panier à {cart} articles</h1>
          {/* <button onClick={decrFunc}>-1</button>
          <button onClick={incrFunc}>+1</button> */}
          <input value={cartData} 
          onInput={e => setCartData(e.target.value)} // e = évênement
          type="number" />
          <br />
          <button onClick={addToCartFunc}>Ajouter au panier</button>
      </div>
  )
}