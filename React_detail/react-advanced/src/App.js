import {useState, useEffect, useRef} from 'react'
import './App.css';
import Video from './video.mp4';

export default function App() {
  const [toggle, setToggle] = useState(true);

  // retour d'un objet de ce que j'ai sélectionner en valeur de première propriété qui s'appel current
  const ref = useRef();
  console.log(ref); // ici c'est undéfini car rien n'a envore été afficher

  //toujours useEffect à la fin du 1er affichage pour rappeler
  useEffect(() => {
    console.log(ref); // contient la vidéo
    console.log(ref.current); // contient les détails de la vidéo
    // mettre en pause aprés 1,5 seonde avec la fonction js pause()
    setTimeout(() => {
      ref.current.pause();
    }, 1500);
  })

  // le bouton supprime le timer
  const toggleFunc = () => {
    setToggle(!toggle)
  }


  return (
    <div className="App">
      <video ref={ref}  width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
// autoplay fonctionne queés'il n'y a pas de son
// useRef pour use référence
// ref est lié dans video ligne 25
// useRef est rarement utiliser, il est srtt utile pour les animations, on peut faire un site entier sans s'en servir