// Le state c'est les donn'es d'un composant.
import {useState} from 'react'
import Item from './component/item/Item'

function App() {

  const [dataArr, setDataArr] = useState([
    {nom: "Juliette"},
    {nom: "John"},
    {nom: "Joris"}
  ])

    return (
      <div className="app">
        {dataArr.map((item, index) => {
          console.log(index); // affiche les index dans la console
          return <p Key={index}>{item.nom}</p>} ) }

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
// l'objet map "Array.prototype.map()" : la méthode créer un nouveau tableau avec les résultats de l'appel d'un fonction sur chaque élément du tableau appelant, donc retourne avec à chaque ligne un paragraphe à l'intérieur
// Avec React quand à la création d'une liste de donénes il faut une clé unique par élément