import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [dataComponent, setDataComponent] = useState(1);
  const [dataComponent1, setDataComponent1] = useState(1);
  const [dataComponent2, setDataComponent2] = useState(1);
  useEffect(() => {
    console.log("dataComponent changed");
  }, [dataComponent]) // le tableau est à surveiller s'il est vide ; il n'est pas surveiller
  const changeState = () => {
    setDataComponent2(dataComponent2 + 1);
  }
  return (
    <div className="App">
      <h1>Le state est {dataComponent2}</h1>
      <button onClick={changeState}>Change State</button>
    </div>
  );
}

export default App;
