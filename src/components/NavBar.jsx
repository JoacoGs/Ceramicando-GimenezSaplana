import React from "react";
import logo from "./images/logo.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function BasicNavBar() {
  return (
    <div className="contenedor-NavBar">
      <Navbar  expand="lg">
        <Container>
        <Link className="navbar-brand " to="/productos"><img src={logo} width="60" alt="Logo" /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className="nav-link " to="/productos">Incio</Link>
            <Link className="nav-link " to="/contacto">Contacto</Link>
            <NavDropdown title="Vajilla" id="basic-nav-dropdown">
            <Link className="dropdown-item " to="/productos/bowls">Bowls</Link >
            <Link className="dropdown-item " to="/productos/cuencos">Cuencos</Link>
            <Link className="dropdown-item " to="/productos/tazas">Tazas</Link>
            <Link className="dropdown-item " to="/productos/mates">Mates</Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget/>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>  
  );
}

export default BasicNavBar;