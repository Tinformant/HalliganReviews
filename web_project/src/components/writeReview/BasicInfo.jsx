import React from "react";
import ComboBox from "../ComboBox";
// import "./QuerySheet.css"
import { Col, Row} from "react-bootstrap";

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function BasicInfo() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const yearLength = 5;
  const yearRange = range(currentYear-yearLength, currentYear);
  const semester = ["Spring", "Summer", "Fall"];
  console.log(yearRange);
  return (
    <form>
      <Row noGutters={true}>
        <Col>
          <ComboBox
            btnStyle="select-style"
            defaultValue={yearRange[0]}
            availableOption={yearRange}
            search={false}
          />
        </Col>
        <Col>
          <ComboBox
            btnStyle='select-style'
            defaultValue={semester[0]}
            availableOption={semester}
          />
        </Col>
      </Row>
    </form>
  );
}

export default BasicInfo;
