// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './Item'

function App() {
  // console.log(useState);
  console.log("MISE À JOUR !"); // Des que le state d'un composant change, le state est réexécuté

  const [myState, setMyState] = useState(10);
  console.log(myState);
  console.log(setMyState);
  const modifyState = (data) => {
    // console.log(data);
    setMyState(data);
  }
 // Les évênements en lower camel case
  return (
  <div className="app">
    <h1>Hello state : {myState}</h1>
    <Item func={modifyState} />
  </div>
  );
}

export default App;
// le composant se met à jour quend son état change et quand les proporétés qu'on lui passe changes
// dans item num, txt, ou ce qui précéde = est la propriété d'Item
// remonter le state se fait de haut en bas
// dans {myState} ou {modifyState}, je peux faire passer des chiffres, des caractères et des fonctions