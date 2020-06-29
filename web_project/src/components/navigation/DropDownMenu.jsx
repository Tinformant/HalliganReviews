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
      <div
        className='search-drop-down-text'
        onClick={(e) => {
          props.onUpdate((prev) => ({
            ...prev,
            searchKeyword: props.attributes.queryStr,
            isSearch: true,
            data: props.candidate,
          }));
          resetAttribute();
        }}>
        Search for {props.attributes.queryStr}
      </div>
    );

  const info = props.data.info;

  return (
    <div
      className='search-drop-down-link'
      onClick={(e) => {
        props.onUpdate((prev) => ({
          ...prev,
          isSearch: false,
          data: props.data,
        }));
        resetAttribute();
      }}>
      <span className='search-drop-down-link-header'>
        {info.department}
        {info.number}
      </span>
      <span>{info.title}</span>
    </div>
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
      onClick={(e) => {
        console.log("load");
      }}>
      <DropDownItem
        isText
        candidate={props.candidate}
        onUpdate={props.onUpdate}
        attributes={props.attributes}
        setAttributes={props.setAttributes}
      />
      {props.candidate.map((x, i) => {
        return (
          <DropDownItem
            key={i}
            data={x}
            onUpdate={props.onUpdate}
            attributes={props.attributes}
            setAttributes={props.setAttributes}
          />
        );
      })}
    </div>
  );
};

export default DropDownMenu;
