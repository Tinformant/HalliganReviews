import React from "react";
import "./SelectBox.css";

function setOperation(value) {
  return <option className="option-color" key={value.key}>{value}</option>;
}

function SelectBox(props) {
  return (
    <form className="review-header-form">
      <div className="row review-header-form-row">
        <div className="col-4 review-header-form-col to-left">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Semester"
          >
            {props.data.instructor.map(setOperation)}
          </select>
        </div>
        <div className="col-4 review-header-form-col to-center">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Year"
          >
            {props.data.instructor.map(setOperation)}
          </select>
        </div>
        <div className="col-4 review-header-form-col to-right">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Instructor"
          >
            {props.data.instructor.map(setOperation)}{" "}
          </select>
        </div>
      </div>
    </form>
  );
}

export default SelectBox;
