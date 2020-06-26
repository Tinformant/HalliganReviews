import React from "react";

import "./ComboBox.css";

function setOperation(value, index) {
  return (
    <option key={index} className="option-color">
      {value}
    </option>
  );
}

function ComboBox(props) {
  return (
    <select
      // className="selectpicker"
      className="selectpicker show-tick"
      data-style={props.btnStyle}
      data-live-search={props.search}
      data-actions-box="true"
      defaultValue={props.defaultValue}
    >
      {props.availableOption.map(setOperation)}
    </select>
  );
}

export default ComboBox;
