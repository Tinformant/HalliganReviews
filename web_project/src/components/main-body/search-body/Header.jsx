import React from "react";
import {Row, Col} from "react-bootstrap";
import ComboBox from "../../ComboBox";

import "./Header.css";

const Header = (props) => {
  console.log(props);
  return (
    props.data ? <div className='search-body-header'>
      <p>Found {props.data.length} items for keyword "{props.searchKeyword}"</p>
      <Row noGutters>
        <Col className='to-left'>
          <ComboBox
            aligned="to-left"
            availableOption={[2020]}
            itemName="Year"
          />
        </Col>
        <Col className='to-center'>
          <ComboBox
            aligned="to-center"
            availableOption={["Fall"]}
            itemName="Semester"
          />
        </Col>
        <Col className='to-right'>
          <ComboBox
            aligned="to-right"
            availableOption={[2020]}
            itemName="Instructor"
          />
        </Col>
      </Row>
    </div>
    : 
    <div className='search-body-header'>
      <p>No results found</p>
    </div>
  );
};

export default Header;

