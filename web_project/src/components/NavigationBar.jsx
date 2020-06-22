import React from "react";
import { Navbar, Row, Col, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import UserOption from "./UserOption";

function NavigationBar() {
  return (
    <Navbar className="navbar-expand-lg fixed-top" variant="none">
      <div className="navbar-container container-fluid">
        <div className="row">
          <div className="col-3">
            <a href="#" className="navbar-brand">
              Halligan Reveiws
            </a>
          </div>
          <div className="col-6">
            <SearchBar />
          </div>
          <div className="col-3">
            <UserOption />
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
