// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './Item'

function App() {
  // console.log(useState);
  console.log("MISE À JOUR !"); // Des que le state d'un composant change, le state est réexécuté

  const [myState, setMyState] = useState(10);
  console.log(myState);
  console.log(setMyState);
  const modifyState = () => {
    setMyState(20);
  }
 // Les évênements en lower camel case
  return (
  <div className="app">
    <h1>Hello state : {myState}</h1>
    <button onCLick={modifyState}>Change state</button>
    <Item txt={"Hello Item"} />
  </div>
  );
}

export default App;
