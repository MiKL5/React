import {useState, useEffect} from 'react' // sert svt à faire appel à une api
import './App.css';

function App() {
  const [timer, setTimer] = useState(1)
  useEffect(() => {
    const intervalID=  setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    // useEffect peut retourner une focntion, ici une cleanup function
    return () => {// supprimer l'interval pour ne pas surcharger la mémoire
      clearInterval(intervalID);
    }
  }, [])
  return (
    <div className="App">      
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
