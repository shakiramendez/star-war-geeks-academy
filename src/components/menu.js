import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import {Link, Route, Switch} from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Star Wars</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/pelicula">Peliculas</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/personaje">Personajes</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/planeta">Planetas</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/vehiculo">Vehiculos</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/crucero">Cruceros</Link>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>

    </div>


  )
}