// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './Item'

function App() {
  // console.log(useState);
  console.log("MISE À JOUR !"); // Des que le state d'un composant change, le state est réexécuté

  const [monState, setMonState] = useState(10);
  // console.log(MonState);
  // console.log(setMonState);
  const modifyState = () => {
    setMonState(20);
  }
 // Les évênements en lower camel case
  return (
  <div className="app">
    <h1>Hello state : {monState}</h1>
    <button onCLick={modifyState}>Change state</button>
    <Item />
  </div>
  );
}

export default App;
