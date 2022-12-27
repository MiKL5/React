// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './component/item/Item'

function App() {

  const [toggle, setToogle] = useState(true);
  const changeState = () => {
    setToggle(!toggle)
  }

    return (
      <div className="app">

        <div className={toggle ? "box-animated" : "box"}></div>
        {/* <div className="box" style={{backgroundColor: toggle ? "yellowgreen" : "#00DCFF"}}></div> */}

        <button onClick={changeState}>Change state</button>
      </div>
    );
}

export default App;
// le composant se met à jour quend son état change et quand les proporétés qu'on lui passe changes
// dans item num, txt, ou ce qui précéde = est la propriété d'Item
// remonter le state se fait de haut en bas
// dans {myState} ou {modifyState}, je peux faire passer des chiffres, des caractères et des fonctions
// two ways data binding car la 1re façon la value et la 2de l'évênement pour lier les données
// {toggle ? <h1>State true</h1> : <h1>State false</h1>} car c'est directemnt une valeur