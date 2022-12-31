import {useState, useMemo, useCallback} from 'react'
import './App.css'
import useDimension from './useDimension';

export default function App() {
  // je l'uilise comme tout les autres hook (comme une méthode)
  const browerwidth = useDimension();
  console.log(browerwidth);

  if(browerwidth > 772) {
    console.log("Grand écran");
  } else {
    console.log("Petit écran");
  }

  return (
    <div className="App">

    </div>
  );
}
