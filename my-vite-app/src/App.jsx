import React, { useState } from 'react'
import Main from "./components/Main"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Background from './pages/Background'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './components/Header'

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  const themeToggle = () => {
    setDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <Router>
      <div className={darkTheme ? "bg-gradient-to-b from-gray-900 to-gray-800 bg-white text-white" : "bg-white text-black"}>
        <Header themeToggle={themeToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
