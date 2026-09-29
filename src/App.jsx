import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-page text-ink">
      <a
        href="#work"
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 focus:translate-y-0"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
