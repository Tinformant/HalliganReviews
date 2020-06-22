import React from "react";
import { Nav } from "react-bootstrap";
import './NavigationBar.css';

function UserOption() {
  return (
    <Nav className="ml-auto">
      <Nav.Link href="#" className="log-in-link navbar-link">
        LOG IN
      </Nav.Link>
      <Nav.Link href="#" className="sign-up-link navbar-link">
        SIGN UP
      </Nav.Link>
    </Nav>
  );
}

export default UserOption;
