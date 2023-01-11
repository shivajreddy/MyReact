import {Nav, Navbar as NavbarBs} from "react-bootstrap";
import React from "react";
import {NavLink} from "react-router-dom";

export function Navbar() {

  return (
    <div>

      <NavbarBs>

        <Nav>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>

      </NavbarBs>

    </div>
  )

}
