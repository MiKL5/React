import React, {createContext, useState} from 'react'

// init
export const ThemeContext = createContext();
// Création du composant avec du state à partaer avec TLM
// Apporter
const ThemeContextProvider  = props => {
    // la variable contient le state
    const [theme, setTheme] = useState('Hello Contexte')
    return (
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
// ThemeContext.Provider vent de la création deu context, provider apporte toute les données dans toute l'appli.
// le provider englobe toute l'appli
// et affiche tous les enfants englobés via 'props.children'.
// childrenn, c'est quand on ne sait pas ce qu"il va y avoir dans le comlément, on me l'endroit ou on veut qu'ils apparaissent.
export default ThemeContextProvider;