import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import './styles.css';


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

function NavigationBar(props) {
  return (
    <Navbar bg="none" expand="lg" variant="none" fixed="top">
      <Navbar.Brand href="/">Halligan Reviews</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <SearchBar onUpdate={props.onUpdate} />
        <UserOption/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
