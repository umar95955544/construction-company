import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Project from './Pages/Project/Project';
import BlogSec from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import Service from './Pages/Service/Service';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { DarkModeContext } from './Assets/Context/DarkModeContext';
import FooterRouter from './Components/FooterRouter/FooterRouter';
import './App.scss';


function App() {
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `Container-dark` : `Container-light`}>
    <Router>
      <Header/>
       <Routes>
        <Route path='/' element={<Main />} />
       <Route path="project" element={<Project />} />
        <Route path="blog" element={<BlogSec />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="service" element={<Service />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Routes> 
      <FooterRouter />
    </Router>
    </div>
  );
}

export default App;
