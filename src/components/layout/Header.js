import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Header.css';


function Header() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#002348', height: '80px' }}
      variant="dark"
    >
      <Container>
        <Nav.Link
          href="/home"
          className="text-white d-flex align-items-center custom-nav-link"
        >
          <img
            src={require('./Authentification.png')}
            alt="Tableau de bord"
            style={{ width: '30px', marginRight: '20px' }}
          />
          ProAdmin
          <img
            src={require('./logoutt.png')}
            alt="Déconnexion"
            style={{ width: '30px', marginLeft: '20px' }}
          />
          Logout
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

