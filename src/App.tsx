
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white bg-transparent">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
