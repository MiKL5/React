import React, {useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from './chevron.svg'

export default function Accord() {

    const [toggle, setToggle] = useState(false); // false pour maqué
    const [heightEl, setHeightEl] = useState(); // contiendra pa hauteur de l'élément
    const toggleState = () => { // écrire les foncion fléchés avec des accoaldes permet de mieux  se repéré
        setToggle(!toggle);
    }
    const refHeight = useRef();

    useEffect(() => { // la 1èrre fois que le composant s'affiche on prend sa hauteur
        setHeightEl(`${refHeight.current.scrollHeight}px`) // sans les backticks ça ne fonctionne pas. L'élément séléciionner.la hauteur de l'élément piexl à la fin
    }, [])
    
    return (
        <div className="accord">
            <div onClick={toggleState} className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down" />
            </div>
            <div  ref={refHeight} className={toggle ? 'accord-toggle animated' : 'accord-toggle'} style={{height: toggle ? `${heightEl}` : "0px"}}>
                {/* Accessibilité pour lire le texte, le atributs aria prennent des tirets en React, ce sont les atributs qui n'ont pas de camel case */}
                <p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis consectetur. Nam at numquam voluptatum eos ex labore placeat rerum, repellat atque dolorum, perferendis a sint cumque laudantium deserunt itaque?</p>
                {/* Les lecteurs d'écran lisent le texte s'il est affiché */}
            </div>{/*  le inline styling est indipensable pour prendre la hauteur dans la logique et le besoin du toggle dans le style */}
        </div>
    )
}