// src/App.jsx
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import FrontEnd from './pages/FrontEnd';
import BackEnd from './pages/BackEnd';
import Challenges from './pages/Challenges';
import CoreFullStack from './pages/CoreFullStack';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/front-end" element={<FrontEnd />} />
        <Route path="/portfolio/back-end" element={<BackEnd />} />
        <Route path="/portfolio/challenges" element={<Challenges />} />
        <Route path="/portfolio/core-full-stack" element={<CoreFullStack />} />
      </Routes>
    </Router>
  );
}

export default App;

