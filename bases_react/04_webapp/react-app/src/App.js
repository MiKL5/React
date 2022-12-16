import {useState} from 'react'

function App() {
  // console.log(useState);

  const [monState, setMonState] = useState(10)
  console.log(setMonState);

  return (
  <div className="app">

    <h1>Hello state : {monState}</h1>
    <Item />
    <button>Change state</button>
  </div>
  );
}

export default App;
