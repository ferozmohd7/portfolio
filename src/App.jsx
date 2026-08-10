import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* Cinematic opening */}
      <Intro />

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio */}
      <main>

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Certificates */}
        <Certificates />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

      </main>
    </>
  );
}

export default App;