import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = ({ toggleTheme, theme }) => {
  return (
    <Navbar
      expand="xxl"
      className="nav-menu d-flex justify-content-between align-items-center"
    >
      <Navbar.Brand className="text-dark-mode responsive-brand">
        <Link className="nav-link text-dark-mode active text-light-mode" to="/">
          ¿Cuantos es en pesos?
        </Link>
      </Navbar.Brand>
      <Nav className="nav-list-link">
        <Link className="nav-link" to="/blue">
          Blue
        </Link>
        <Link className="nav-link" to="/tarjeta">
          Tarjeta
        </Link>
        <Link className="nav-link" to="/oficial">
          Oficial
        </Link>
        <Link className="nav-link" to="/liqui">
          Contado con Liqui
        </Link>
        <Link className="nav-link" to="/bolsa">
          Dolar Bolsa
        </Link>
      </Nav>
      <Nav className="nav nav-switch">
        <Switch onChange={toggleTheme} checked={theme === "dark"} />
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
