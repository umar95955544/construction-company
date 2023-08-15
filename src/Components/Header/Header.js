import React, {useContext} from 'react';
import { BiSolidCart } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DarkModeContext } from '../../Assets/Context/DarkModeContext';
import { Link } from 'react-router-dom';
import Styles from './Header.module.scss'

function Header() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
  return (
    
    <Navbar expand="lg" className={darkMode ?  `navbar-dark`:`navbar-light`}>
      <Container>
      <Navbar.Brand as={Link} to="/" className={Styles.NavBrand}>Construction Company Landing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/project">Project</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/service">Service</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/about">About</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className={darkMode ?  `text-white`:`text-dark`} as={Link} to="/"><BiSolidCart size={30}/></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <div className='text-center'>
        <img src={darkMode ? 
            `../img/dark-light.png` : `../img/dark-fill.png`} alt="Lightswitch on" onClick={handleClick} />
        </div>
      </Container>
    </Navbar>
  )
}

export default Header