import {useState, useEffect, useRef} from 'react'
import './App.css';
import Video from './video.mp4';

export default function App() {
  const [toggle, setToggle] = useState(true);

  // retour d'un objet de ce que j'ai sélectionner en valeur de première propriété qui s'appel current
  const ref = useRef([]);

  //toujours useEffect à la fin du 1er affichage pour rappeler
  useEffect(() => {
    // addEventListener s'utilise tjrs dans useEffect()
    window.addEventListener('resize', actionResize);
    function actionResize(){
      console.log("Resized!!!!")
    }
    // pour économiser de la mémoire la cleanup function
    return () => {
      window.removeEventListener('resize', actionResize)
    }
  })

  // le bouton supprime le timer
  const toggleFunc = () => {
    setToggle(!toggle)
  }

  // ref oassera ci-dessous
  const addToRef = el => { //el pour élément
    console.log(el);
    // vérif si el est tjrs là
    if(el && !ref.current.includes(el)){ // est-ce que le tableau inclu l'élément ?
      ref.current.push(el); //si ce'est faux' le mettre au tableau
    }
  }

  return (
    <div className="App">
      <video ref={addToRef}  width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>

      <video ref={addToRef}  width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>

      <video ref={addToRef}  width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}