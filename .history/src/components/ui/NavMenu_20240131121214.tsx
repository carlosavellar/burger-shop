import React, { ReactElement, useEffect, useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarProps,
  Container,
} from "reactstrap";
import { RiMenuLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

import "./NavMenu.scss";

function NavMenu(args: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const toggle = () => setIsOpen(!isOpen);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add event listener for window resize
  window.addEventListener("resize", updateWindowWidth);

  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);

  const navbarCollapse: ReactElement = (
    <>
      <span></span>
      <div className="title-app">
        <Link to="/" className="link-home">
          Menu
        </Link>
      </div>
      <NavbarToggler onClick={toggle} className="custom-toggler">
        <RiMenuLine />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <NavbarText className="me-auto">
          <Link to="/login" className="nav-link">
            Entrar
            <span className="bar"></span>
          </Link>
          <Link to="/allergy-information" className="nav-link">
            Contato
          </Link>
        </NavbarText>
      </Collapse>
    </>
  );

  const navBar: ReactElement = (
    <Nav pills centered className="m-auto">
      <NavItem>
        <NavLink to="/" className="mr-4">
          Menu
          <span className="bar"></span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/login" className="mr-4">
          Entrar
          <span className="bar"></span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/allergy-information">
          Contato
          <span className="bar"></span>
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <Navbar {...args} className="">
      {args}
      {/* {navbarCollapse} */}
      {windowWidth < 768 && navbarCollapse}
      {windowWidth > 768 && navBar}
    </Navbar>
  );
}

export default NavMenu;
