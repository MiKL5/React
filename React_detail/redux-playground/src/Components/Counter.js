import React from 'react';
import { useSelector } from 'react-redux'; // permet l'accés aux données

export default function Counter() {
    const count = useSelector(state => state.count)
  return (
    <div>
      <h1>Les données : {count}</h1>
    </div>
  )
}