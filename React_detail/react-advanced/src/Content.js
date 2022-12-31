import React from 'react'

export default function content(props) {
    console.log(props); // il y a dans la console un objett children contenant un tableau avec les h1, p et leurs contenus
    // aficher el contenu à l'écran cf dans la div
    return (
        <div className="content">
            {props.children}
        </div>
    )
}
// Les props.children sont utiles quand on ne sait pas ce qu'on va recevoir, mais qu'on veut l'avoir à un endroit prédis.