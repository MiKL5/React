import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'; // chemins dynamyques
import NotFound from './components/NotFourd/NotFound'; //Second type de chemin dynomyque

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}