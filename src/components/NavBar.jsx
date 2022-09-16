import React from "react";
import logo from "./images/logo.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";
import CartWidget from "./CartWidget";

function BasicNavBar() {
  return (
    <div className="contenedor-NavBar">
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="/productos"><img src={logo} width="60" alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/productos">Incio</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Vajilla" id="basic-nav-dropdown">
                <NavDropdown.Item href="/productos/bowls">Bowls</NavDropdown.Item>
                <NavDropdown.Item href="/productos/cuencos">Cuencos</NavDropdown.Item>
                <NavDropdown.Item href="/productos/tazas">Tazas</NavDropdown.Item>
                <NavDropdown.Item href="/productos/mates">Mates</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>  
  );
}

export default BasicNavBar;