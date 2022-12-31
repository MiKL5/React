import {useState, useMemo, useCallback} from 'react'
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
    return toggle
  }, []) // il ne se recréer plus à chaque affichage du parent // si le tableau de suveillance et vide plus de réaffichage
  //useCallback est un hook qui permet de ne pas metre à jour les enfants si cette fonciton ne change pas et donc ne pas la recréer
  const foo = useCallback(() => {
    console.log('click');
  }, []) // ce tableau vide pour l'écoûte // C'estutilse pour les grande fonction qui met du temps avec bcp de calculs par ex.

  return (
    <div className="App">
      <Content num={tableau} foo={foo} />
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
// une constante empêche la réassignation d'une aleur primitive, en plus de React qui ne le permet pas directement
// useMemo (mémorisation) permet d'améliorer les performances d'une application React
// 'props.children' est mis à jour à chaque mise à jour de son parent même s'il ne change pas et pour palier, la mémorisation entre en jeu
// useMemo fonctionne avec tous les autres props SAUF 'props.children'
// 'React.memo' pour les valeurs primitive et 'useMemo' pour les valeurs de référence
// ne pas abuser de 'useMemo' eet 'useCallback' car si on les utilise partout on perd en performance
// et 'UseMemo' s'il y a bcp de composants
// il n'y a des màj que si je passe des propos
// IMMPOSSIBLE D'EMPÊCHER 'props.children' DE SE METTRE À JOUR