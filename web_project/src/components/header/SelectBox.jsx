import React from "react";
import "./SelectBox.css";

function setOperation(value,index) {
  return <option key={index} className="option-color">{value}</option>;
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
            defaultValue={props.data.info.semester[0]}
          >
            {props.data.info.semester.map(setOperation)}
          </select>
        </div>
        <div className="col-4 review-header-form-col to-center">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Year"
            defaultValue={props.data.info.year[0]}
          >
            {props.data.info.year.map(setOperation)}
          </select>
        </div>
        <div className="col-4 review-header-form-col to-right">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Instructor"
            defaultValue={props.data.info.instructor[0]}
          >
            {props.data.info.instructor.map(setOperation)}{" "}
          </select>
        </div>
      </div>
    </form>
  );
}

export default SelectBox;
