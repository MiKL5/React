import { useState } from "react";
import './Item.css'
import building from './building.jpg'
import img from '../../assets/img.jpg'
// import leo from './leopard.svg'
import { ReactComponent as leo} from './leopard.svg'; // les svg peuvent êtres importer comme composants

function Item(props) {
    const [itemState, setItemState] = useState('Item State !')
    console.log("Mise à jour"); // s'il y a un bogue, il ne se met pas à jour
    const toggle = false; // si toggle est faux, la fonction ternaire l'affichera en vert et permettra plus tard l'apparition d'éléments, il est srtt utiliser sur les classe complète pour les animations
    const styleCSS = {color:toggle ? "crimson":"greenyellow"}
    const myletter = "g"
    const photo = "jpg"
    return (
        <div>
            <h1 style={{color:toggle ? "crimson":"greenyellow", fontSize:"50px"}}>{props.num}</h1>
            <h2 style={styleCSS}>Hello</h2>
            <h3>Hello index.css !</h3>
            <h3 class="title4">Hello index.css !</h3>
            <button onCLick={() => props.func(itemState)}>Change state</button>
        </div>,
        <div>
            <img src={"https://images.unsplash.com/photo-1672107097540-897c4a8440ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"} alt="image via unsplash" />
            <img src={"https://images.unsplash.com/photo-1672108654202-9f632dc907fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"} alt="" />
            <img src={building} alt="building" />
            <img src={img} alt="building" />
            <img src={process.env.PUBLIC_URL+'/images/cliff.${photo}'} alt="cliff" />
            {/* <img src="{leo}" alt="léopard" /> */}
            <leo />
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
// Les généralemnts dons un dossier éponyme et si les fichiers sont déplacés les liens peuvent êtres mis à jour

// Les acolades autour des chemins des images évitent les erreurs de compilation par webpack
// il est d'usage de mettre les images dans le dossier source, soit dans le dossier du composant, soit dans 'assets' si elles sont utiliseées à plusieurs endroits car elles viennent très souvent backend ou d'une api
// Les images vont dans public pour utiliser les chemins dynamiques
// process.env.PUBLIC_URL+ permet d'obtenir le nom du site avant l'arborescence que l'on à construit, C'est l'équivalent de %PUBLIC_URL%  dans public