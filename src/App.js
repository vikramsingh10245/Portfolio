
import React ,{useEffect}from 'react';
import './App.css'
import AppNavbar from './Components/AppNavbar/AppNavbar';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Sideicons from './Components/Sideicons/Sideicons';


function App() {
  useEffect(()=>{
    document.title="My Portfolio"
},[])
  return (
   
      <div className="App">

        <AppNavbar />
        <Home />
        <Sideicons />
         <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
   
  );
}

export default App;
