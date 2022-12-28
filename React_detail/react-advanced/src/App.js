import {useState, useEffect} from 'react' // sert svt à faire appel à une api
import './App.css';
import Timer from './Timer';

export default function App() {
  const [toggle, setToggle] = useState(true);

  // le bouton supprime le timer
  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      <h1>{toggle && <Timer/>}</h1>
    </div>
  );
}
