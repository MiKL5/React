import React, {useContext} from 'react'
import './BtnToggle.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function BtnToggle() {
    // chgt du bouton
    const {toggleTheme, theme} = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme} className={theme ? "btn-toggle" : "btn-toggle dark-btn"}>{/* Si le thème est true (sombre) envoyer light sinon la classe 'dark-btn' */}
            {theme ? "LUMOS" : "NOX"}
        </button>
    )
}
