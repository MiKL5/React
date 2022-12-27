// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './component/item/Item'

function App() {

  const [toggle, setToogle] = useState(true);
  const changeState = () => {
    setToggle(!toggle)
  }
  let toggleContenu;

  if(toogle){
    toggleContent = <h1>State true</h1>
  } else {
    toggleContent = <h1>State false</h1>
  } // ça reduit la taille du if d'en dessous, est c'est plus clair si y a bcp de lignes dans un if

  if(toggle){ // c'est comme if (toggle === true)
    return (
      <div className="app">
        {toggleContent}
        <button onClick={changeState}>Change state</button>
      </div>
    );
  } else if(toggle === false) {
    return (
      <div className="app">
        {toggleContent}
        <button onClick={changeState}>Change state</button>
      </div>
    );
  }
}

export default App;
// le composant se met à jour quend son état change et quand les proporétés qu'on lui passe changes
// dans item num, txt, ou ce qui précéde = est la propriété d'Item
// remonter le state se fait de haut en bas
// dans {myState} ou {modifyState}, je peux faire passer des chiffres, des caractères et des fonctions
// two ways data binding car la 1re façon la value et la 2de l'évênement pour lier les données