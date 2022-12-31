import React from 'react'

function Content(props) {
    console.log("Mise à jour"); // il y a dans la console un objett children contenant un tableau avec les h1, p et leurs contenus
    // aficher el contenu à l'écran cf dans la div
    return (
        <div className="content">
            {props.num}
        </div>
    )
}
export default React.memo(Content); // export default descend afin de wraper le composant avec le méthode React 'memo'
// fonctionne comme ça sauf pour un tableau, c'est une valeur de référence alors qu'un nombre est une valeur primitive, c'est là que 'useMemo' entre en jeu
// Les props.children sont utiles quand on ne sait pas ce qu'on va recevoir, mais qu'on veut l'avoir à un endroit prédis.