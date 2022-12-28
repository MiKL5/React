import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import bg from "./images/yanivCohen.jpg";

function App() {
  return (
    <div className="App" /*style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat" }} */ >
      <h1 className="text-center mt-3">To do list</h1>
      <Form />
    </div>
  );
}

export default App;
