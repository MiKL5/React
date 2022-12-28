import {useState, useEffect} from 'react' // sert svt à faire appel à une api
import './App.css';

function App() {
  const [timer, setTimer] = useState(1)
  useEffect(() => {
    setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }, [])
  return (
    <div className="App">      
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
