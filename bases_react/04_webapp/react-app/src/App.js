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
    <Item num={myState} />
    <Item txt={"Hello Italy"} />
    <Item txt={"Hello Japan"} />
  </div>
  );
}

export default App;
// le composant se met à jour quend son état change et quand les proporétés qu'on lui passe changes
// dans item num, txt, ou ce qui précéde = est la propriété d'Item