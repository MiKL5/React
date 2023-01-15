    import React, {useState, useEffect} from 'react'
    import './Navbar.css'

    export default function Navbar() {
        const[toggleMenu, setToggleMenu] = useState(false);
        const[largeur, setLargeur] = useState(window.innerWidth); // afficher par défaut aux grand écrans, alors capture de la largeur
        const toggleNav = () => {
            setToggleMenu(!toggleMenu)
        }

        useEffect(() => {
    
            const changeWidth = () => {
                setLargeur(window.innerWidth);
            }
    
            window.addEventListener('resize', changeWidth);
    
            return () => {
                window.removeEventListener('resize', changeWidth);
            }
    
    
        }, [])
    
        return (
            <nav>
                {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Écrire</li>
                    <li className="items">Contact</li>
                </ul>
            )}
          <button onClick={toggleNav} className="btn">BTN</button>{/* mettre plus tard une icône de menu hamberger */}
        </nav>
    )
}
/* il estpréféreble de metre les () pour plusiers ligne même si jsx les repères */