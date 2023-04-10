import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "/Users/learnacademy/Desktop/cat-tinder-frontend/src/assests/logo.png";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <div className="nav-bar">
        <Navbar color="faded" light>
          <NavLink>
            <img
              src={logo}
              alt="logo for celeb tinder"
              className="celeb-logo"
            />
          </NavLink>
          <NavbarBrand href="/" className="me-auto">
            Celebrity Tinder!
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/celebrityindex" className="nav-link">
                  Meet Our Stars
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/catnew" className="nav-link">
                  Add a Star
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
