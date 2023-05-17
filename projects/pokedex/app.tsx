import React from 'react';

const App: React.FC = () => { // typé avec React.FC c'est-à-dire Function Componet, composant pouvant être écrit sous la forme d'une fonction
    const name: String = 'React'; // une variable de type string contenant la valeur React
    
    return ( // la valeur sera afficher dans le dom virtuel grace à jsx
        <h1>Hello, {name} !</h1>
    )
}

export default App;

// Les composants sous forme de conction sont plus lisbles et plus performant mais certaines fonctinnalités sont limitées.
// La constante contient une fonction fléchée, c'est une fonction, et ça évite les confusions avec this et d'autres inconveniants de la fonction traditionelle.