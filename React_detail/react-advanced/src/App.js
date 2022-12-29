import {useState} from 'react'
import './App.css';

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
  // vérif dans la console que ça fonctionne
  console.log("mise à jour");

  return (
    <div className="App">
      <h1>{toggle}</h1>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}