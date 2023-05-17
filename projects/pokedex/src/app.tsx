import React, { FunctionComponent } from 'react';

const App: FunctionComponent = () => { // le destructuring d'ES6 permet d'extraire le composant FunctionComponent du paquet React, c'est plus lisible est moins fatiguant à lire.
    const name: String = 'React'; // une variable de type string contenant la valeur React
    
    return ( // la valeur sera afficher dans le dom virtuel grace à jsx
        <h1>Bonjour, {name} !</h1>
    )
}

export default App;

// Les composants sous forme de conction sont plus lisbles et plus performant mais certaines fonctinnalités sont limitées.
// La constante contient une fonction fléchée, c'est une fonction, et ça évite les confusions avec this et d'autres inconveniants de la fonction traditionelle.