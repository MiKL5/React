import {useState} from 'react'
import Item from './Item'

function App() {
  // console.log(useState);

  const [monState, setMonState] = useState(10)
  console.log(setMonState);

  return (
  <div className="app">
    <h1>Hello react</h1>
    <Item />
    {monState}
  </div>
  );
}

export default App;
