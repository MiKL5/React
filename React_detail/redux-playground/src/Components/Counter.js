import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // ce hook de React-redux permet l'accés aux données

export default function Counter() {
  const count = useSelector(state => state.count) // avec cette fonction call back ce hook permet de se connecter directement au store pour utiliser directemt le state
  const dispatch = useDispatch(); // cette méthode retuourn la fonction dispatch pour envoyer un action
  const incrFunc = () => { // action d'incrémentation
    dispatch({
      type: "INCR"
    })
  }
  const decrFunc = () => { // décrémentaiton
    dispatch({
      type: "DECR"
    })
  }
  return (
      <div>
          <h1>Les données : {count}</h1>
          <button onClick={decrFunc}>-1</button>
          <button onClick={incrFunc}>+1</button>
      </div>
  )
}