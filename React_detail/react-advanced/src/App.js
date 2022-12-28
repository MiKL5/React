import {useState, useEffect} from 'react' // sert svt à faire appel à une api
import './App.css';

function App() {
  const [timer, setTimer] = useState(1)
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const intervalID=  setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    // useEffect peut retourner une focntion, ici une cleanup function
    return () => {// supprimer l'interval pour ne pas surcharger la mémoire
      clearInterval(intervalID);
    }
  }, [])

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">      
      <h1>{timer}</h1>
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle ? "True" : "False"}</h2>
    </div>
  );
}

export default App;
