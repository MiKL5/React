import {useState} from 'react'
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
  // vérif dans la console que ça fonctionne
  console.log("mise à jour");

  return (
    <div className="App">
      <Content>
        <h1>Titre de l'article 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia dolores pariatur fugiat accusantium veniam iure perferendis, quae officiis quis voluptatum exercitationem repellendus maiores alias tempore dignissimos minima, laudantium expedita?</p>
      </Content><Content>
        <h1>Titre de l'article 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia dolores pariatur fugiat accusantium veniam iure perferendis, quae officiis quis voluptatum exercitationem repellendus maiores alias tempore dignissimos minima, laudantium expedita?</p>
      </Content><Content>
        <h1>Titre de l'article 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia dolores pariatur fugiat accusantium veniam iure perferendis, quae officiis quis voluptatum exercitationem repellendus maiores alias tempore dignissimos minima, laudantium expedita?</p>
      </Content>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
// une constante empêche la réassignation d'une aleur primitive, en plus de React qui ne le permet pas directement