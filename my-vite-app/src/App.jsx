import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Background from './pages/Background'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './components/Header'
import { useEffect } from "react"
import useThemeStore from "./store/themeStore"

function App() {

  const { lightMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
  }, [lightMode])

  return (
    <Router>
      <div style={{ backgroundImage: 'var(--bg)', color: 'var(--text)', }}>
        <Header />
        <Home />
        <Background />
        <Portfolio />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
