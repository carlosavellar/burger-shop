import React, { useState } from "react";

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
  DropdownItem,
  NavbarText,
  NavbarProps,
} from "reactstrap";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./NavMenu.scss";

function NavMenu(args: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} className="">
      <span></span>
      <div className="title-app">Menu</div>
      <NavbarToggler onClick={toggle} className="custom-toggler">
        <RiMenuLine />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <NavbarText className="me-auto">
          <Link to="/allergy-information" className="nav-link">
            Entrar
          </Link>
          <Link to="/allergy-information" className="nav-link">
            Menu
          </Link>
          <Link to="/allergy-information" className="nav-link">
            Contato
          </Link>
          <Link to={`/foods/${242403}`} className="nav-link">
            Burgers
          </Link>
        </NavbarText>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default NavMenu;
