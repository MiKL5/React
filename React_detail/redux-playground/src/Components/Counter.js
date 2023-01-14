import React from 'react';
import { useSelector } from 'react-redux'; // ce hook de React-redux permet l'accés aux données

export default function Counter() {
  const count = useSelector(state => state.count) // avec cette fonction call back ce hook permet de se connecter directement au store pour utiliser directemt le state
  return (
      <div>
          <h1>Les données : {count}</h1>        
      </div>
  )
}