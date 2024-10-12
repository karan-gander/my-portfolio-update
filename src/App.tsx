import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import  IconCloudDemo  from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <IconCloudDemo iconSlugs={["typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "firebase",
  "git",
  "github",
  "visualstudiocode",
  "tailwindcss",
  "mysql",
  "mongodb",
  "typescript",
  "redux",
  "postman",
  "mongoose",
  "npm",
  "python",
  "c","sql"
  ,

  ]} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
