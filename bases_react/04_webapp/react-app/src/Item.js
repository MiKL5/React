import { useState } from "react";

function Item(props) {
    const [itemState, setItemState] = useState('Item State !')
    console.log("Mise à jour"); // s'il y a un bogue, il ne se met pas à jour
    return (
        <div>
            <h1>{props.num}</h1>
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