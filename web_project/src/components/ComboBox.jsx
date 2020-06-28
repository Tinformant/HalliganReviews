import React from "react";

import "./ComboBox.css";

import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

function setOperation(value, index) {
  return (
    <MenuItem value={value} key={index} className="option-color">
      {value}
    </MenuItem>
  );
}

function ComboBox(props) {
  const [value, setValue] = React.useState(props.defaultValue);
  return (
    <FormControl variant="outlined">
      {/* <InputLabel id="label">{props.placehoder}</InputLabel> */}
      <Select
        // className="selectpicker"
        // className="selectpicker show-tick"
        // data-style={props.btnStyle}
        // data-live-search={props.search}
        // data-actions-box="true"
        className="combobox"
        labelId="label"
        id="combobox-select"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {props.availableOption.map(setOperation)}
      </Select>
    </FormControl>
  );
}

export default ComboBox;
