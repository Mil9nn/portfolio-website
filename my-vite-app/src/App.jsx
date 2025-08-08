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
      <div style={{ backgroundImage: 'var(--bg)', color: 'var(--text)', }}>
        <Header />
        <Home />
        <Background />
        <Portfolio />
        <Contact />
      </div>
  );
}

export default App;
