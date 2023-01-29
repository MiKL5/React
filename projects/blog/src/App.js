import './App.css';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}