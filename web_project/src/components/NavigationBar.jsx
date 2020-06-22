import React from "react";
import { Navbar} from "react-bootstrap";
import SearchBar from "./SearchBar";
import UserOption from "./UserOption";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar bg="none" expand="lg" variant="none">
      <Navbar.Brand href="#">Halligan Reviews</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <SearchBar/>
        <UserOption/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
