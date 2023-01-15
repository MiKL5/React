import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'; // ce hook de React-redux permet l'accés aux données
import { getCatImg } from '../redux/reducers/dataImgReducer'; // entre accolages quand ce n'est pas un export default

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  // le destructuring permet de créer les contante (cart et count) et deretourner un objet contenant d'autre objets (AddCartReducer et CounterReducer)
  const {cart, count, imgURL} = useSelector(state => ({// parenthèse car il y a du JS sur plusieurs lignes
    ...state.AddCartReducer,
    ...state.CounterReducer,
    ...state.dataImgReduc
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
  // se lancera lord du 1er affichage du composant
  useEffect(() => {
    dispatch(getCatImg())
  }, [])
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
        {imgURL && <img style={{width: "300px"}} src={imgURL} />}
      </div>
  )
}