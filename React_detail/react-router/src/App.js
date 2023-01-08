import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'; // chemins dynamyques
import NotFound from './components/NotFourd/NotFound'; //Second type de chemin dynomyque
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Development from './components/Services/Development/Development';
import Cybersecurity from './components/Services/Cybersecurity/Cybersecurity';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/developpement" element={<Development/>} />
          <Route path="/services/cybersecurite" element={<Cybersecurity/>} />
        </Route>
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}