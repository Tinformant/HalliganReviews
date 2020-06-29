import React from "react";
import Select from "react-select";
import "./ComboBox.css";

// import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

// function setOperation(value, index) {
//   return (
//     <MenuItem value={value} key={index} className="option-color">
//       {value}
//     </MenuItem>
//   );
// }

function generateOption(items) {
  var option = [];
  items.forEach((element) => {
    option.push({ value: [element], label: [element] });
  });
  return option;
}

function ComboBox(props) {
  const options = generateOption(props.availableOption);
  function handleChange(event) {
    console.log(event.value);
    console.log("changed");
  }

  return (
    <Select
      className={"combobox "+ props.aligned}
      placeholder={props.itemName}
      options={options}
      onChange={handleChange}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#5191ce',
          primary: '#012f62',
        },
      })}
    />
  );
}

// function ComboBox(props) {
//   const [value, setValue] = React.useState(props.defaultValue);
//   return (
//     // <FormControl variant="outlined">
//       {/* <InputLabel id="label">{props.placehoder}</InputLabel> */}
//       <Select
//         // className="selectpicker"
//         // className="selectpicker show-tick"
//         // data-style={props.btnStyle}
//         // data-live-search={props.search}
//         // data-actions-box="true"
//         className="combobox"
//         labelId="label"
//         id="combobox-select"
//         value={value}
//         onChange={(event) => {
//           setValue(event.target.value);
//         }}
//       >
//         {props.availableOption.map(setOperation)}
//       </Select>
//     // </FormControl>
//   );
// }

export default ComboBox;
