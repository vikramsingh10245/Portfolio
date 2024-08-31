import React, { useEffect, useState } from 'react';
import './App.css';
import AppNavbar from './Components/AppNavbar/AppNavbar';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Sideicons from './Components/Sideicons/Sideicons';
import { HashLoader } from 'react-spinners';

function App() {
  useEffect(() => {
    document.title = "Vikram Singh";
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Add a delay of 3 seconds 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-wrapper">
          <HashLoader size={300} color="#f9025d" loading={isLoading} />
        </div>
      ) : (
        <div className="content">
          <AppNavbar />
          <Home />
          <Sideicons />
          <Project />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
