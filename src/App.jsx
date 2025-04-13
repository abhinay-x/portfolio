import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Navbar darkMode={darkMode} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero darkMode={darkMode} />
              <Skills darkMode={darkMode} />
            </>
          } />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/certifications" element={<Certifications darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
}

export default App;
