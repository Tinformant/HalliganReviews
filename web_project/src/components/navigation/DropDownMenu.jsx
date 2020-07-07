import React from "react";

import "./DropDownMenu.css";

const DropDownItem = (props) => {
  const resetAttribute = () => {
    props.setAttributes((prev) => ({
      ...prev,
      queryStr: "",
      showCancelButton: "hidden",
      showDropDown: false,
    }));
  };
  if (props.isText)
    return (
      <a
        href={`/search/${props.attributes.queryStr}`.toLowerCase()}
        className='search-drop-down-text'
        onClick={() => {
          resetAttribute();
        }}>
        Search for {props.attributes.queryStr}
      </a>
    );

  const {
    department,
    number,
    subnumber,
    title,
  } = props.data;
    
  const { semester, year } = props.data.availOption[0];

  return (
    <a
      href={`/course/${department}/${number}/${subnumber}/${year}/${semester}`.toLowerCase()}
      className='search-drop-down-link'
      onClick={(e) => {
        resetAttribute();
      }}>
      <span className='search-drop-down-link-header'>
        {department}
        {number}
      </span>
      <span>{title}</span>
    </a>
  );
};

const DropDownMenu = (props) => {
  const wrapperRef = React.useRef(null);
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.setAttributes((prev) => ({
          ...prev,
          showDropDown: false,
        }));
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <div
      ref={wrapperRef}
      className='search-drop-down-menu'
      >
      <DropDownItem
        isText
        candidate={props.candidate}
        attributes={props.attributes}
        setAttributes={props.setAttributes}
      />
      {props.candidate.map((x, i) => {
        return (
          <DropDownItem
            key={i}
            data={x}
            attributes={props.attributes}
            setAttributes={props.setAttributes}
          />
        );
      })}
    </div>
  );
};

export default DropDownMenu;
