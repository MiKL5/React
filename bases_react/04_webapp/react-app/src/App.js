// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './component/item/Item'

function App() {

  const [inputData, setInputData] = useState();

  const changeInput = (e) => {
    // console.log(e);
    setInputData(e)
  }
  console.log(inputData); // pour voir si ça fonctionne

 // Les évênements en lower camel case
  return (
  <div className="app">
    <h1>Hello App</h1>
    <input type="text" value={inputData} onInput={e => changeInput(e.target.value)} />
  </div>
  );
}

export default App;
// le composant se met à jour quend son état change et quand les proporétés qu'on lui passe changes
// dans item num, txt, ou ce qui précéde = est la propriété d'Item
// remonter le state se fait de haut en bas
// dans {myState} ou {modifyState}, je peux faire passer des chiffres, des caractères et des fonctions
// two ways data binding car la 1re façon la value et la 2de l'évênement pour lier les données