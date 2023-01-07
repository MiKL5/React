import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'; // chemins dynamyques
import NotFound from './components/NotFourd/NotFound'; //Second type de chemin dynomyque
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}