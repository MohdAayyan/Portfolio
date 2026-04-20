import { useEffect } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./index.css"
import About from "./components/About"
import Skills from "./components/Skills"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}


export default App