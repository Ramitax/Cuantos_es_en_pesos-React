import { Navbar, Nav  } from "react-bootstrap";
import React from "react";
import "./NavMenu.css";
import Switch from "react-switch";

const NavMenu = ( {toggleTheme, theme}) => {
  return (
    <Navbar className="nav-menu d-flex justify-content-between align-items-center">
        <Navbar.Brand className="text-dark-mode" href="#home">¿ Cuantos es en pesos ?</Navbar.Brand>
        <Nav className="nav">
          <Nav.Link className="nav-link" href="#blue">Blue</Nav.Link>
          <Nav.Link className="nav-link" href="#tarjeta">Tarjeta</Nav.Link>
          <Nav.Link className="nav-link" href="#oficial">Oficial</Nav.Link>
          <Nav.Link className="nav-link" href="#liqui">Contado con Liqui</Nav.Link>
          <Nav.Link className="nav-link" href="#bolsa">Dolar Bolsa</Nav.Link>
        </Nav>
        <Switch onChange={toggleTheme} checked={theme === "dark"}/>
    </Navbar>
  );
};

export default NavMenu;
