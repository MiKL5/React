import {useState, useMemo} from 'react'
import './App.css'
import Content from './Content'

export default function App() {
  const [toggle, setToggle] = useState([1,2,3]);

  // le bouton supprime le timer
  const toggleFunc = () => {
    // pour modifier il faut recopier les valeurs
    const newArr = [...toggle];
    newArr.push(4);
    //toggle.push(4);
    //console.log(toggle); // ça fonctionne dans la console
    // setToggle(toggle) // avec React on ne peut pas modifier le state directment, en anglaiś on peut voir la phrase "NEVER MUTATE STATE DIRECTLY" donc il faut recopier les valeurs pour modifier.
    setToggle(newArr);
  };
  // useMemo c'est pour les valeur de référence, il va avoir une fonction callback qui va retourner le tableau
  const tableau = useMemo(() => {
    return [1,2,3,4]
  }, []) // il ne se recréer plus à chaque affichage du parent

  return (
    <div className="App">
      <Content num={tableau} />
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
// une constante empêche la réassignation d'une aleur primitive, en plus de React qui ne le permet pas directement
// useMemo (mémorisation) permet d'améliorer les performances d'une application React
// 'props.children' est mis à jour à chaque mise à jour de son parent même s'il ne change pas et pour palier, la mémorisation entre en jeu
// useMemo fonctionne avec tous les autres props SAUF 'props.children'
// 'React.memo' pour les valeurs primitive et 'useMemo' pour les valeurs de référence