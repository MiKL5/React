import {useState, useEffect} from 'react' // sert svt à faire appel à une api
import './App.css';

function App() {
  const [dataImg, setDataImg] = useState();
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      console.log(response);
      return response.json;
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url);
    })
  }, [])

  return (// afficher quand l'image est reçu pour éviter le lien cassé
    <div className="App">      
      {dataImg && <img src={dataImg} alt="Is it a cat?" style={{width: "500px"}}/>}
    </div>
  );
}

export default App;
