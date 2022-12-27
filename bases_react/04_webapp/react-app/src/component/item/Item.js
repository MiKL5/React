import { useState } from "react";
import './Item.css'

function Item(props) {
    const [itemState, setItemState] = useState('Item State !')
    console.log("Mise à jour"); // s'il y a un bogue, il ne se met pas à jour
    const toggle = false; // si toggle est faux, la fonction ternaire l'affichera en vert et permettra plus tard l'apparition d'éléments, il est srtt utiliser sur les classe complète pour les animations
    const styleCSS = {color:toggle ? "crimson":"greenyellow"}
    return (
        <div>
            <h1 style={{color:toggle ? "crimson":"greenyellow", fontSize:"50px"}}>{props.num}</h1>
            <h2 style={styleCSS}>Hello</h2>
            <h3>Hello index.css !</h3>
            <h3 class="title4">Hello index.css !</h3>
            <button onCLick={() => props.func(itemState)}>Change state</button>
        </div>
    )
}
export default Item;
// props signifie propritété
// L'objets contients les "props" que le parent donne à l'enfant (le parent est "app.js")
// si un props que l'on render au composant se met à jour, le composant sse met à jour

// Cette syntaxe peut embrouyé
// function Item({number}) {
//    return <h1>{number}</h1>
// }
// Le déstructuring n'est pas toujours la solution surtout pour les débutants
// Les généralemnts dons un dossier éponyme et si les ficfiers sont déplacés les liens peuvent êtres mis à jour