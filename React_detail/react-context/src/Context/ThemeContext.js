import React, {createContext, useState} from 'react'

// init
export const ThemeContext = createContext();
// Création du composant avec du state à partaer avec TLM
// Apporter
const ThemeContextProvider  = props => {
    // on peut passer des données comme 'hello' ou ici 'false' et des foncitons
    // la variable contient le state
    const [theme, setTheme] = useState('false') // light
    const toggleTheme = () => {
        setTheme(!theme)
    }
    // changement du body (car y a pas bcp de contenu) reste qu'à changer le bouton
    if(theme){
        document.body.classList.add('dark-body'); // Classe CSS (index.css)
    } else {
        document.body.classList.remove("dark-body");
    }
    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
// ThemeContext.Provider vent de la création deu context, provider apporte toute les données dans toute l'appli.
// le provider englobe toute l'appli
// et affiche tous les enfants englobés via 'props.children'.
// childrenn, c'est quand on ne sait pas ce qu"il va y avoir dans le comlément, on me l'endroit ou on veut qu'ils apparaissent.
export default ThemeContextProvider;