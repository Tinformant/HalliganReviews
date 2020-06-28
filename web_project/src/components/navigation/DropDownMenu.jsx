import React from "react";
import "./DropDownMenu.css";

const DropDownItem = (props) => {
  if (props.isText)
    return (
      <div
        className='search-drop-down-text'
        onClick={(e) => {
          props.setShowDropDown(false);
          props.onUpdate((prev) => ({
            ...prev,
            isSearch: true,
            data: props.candidate,
          }));
        }}>
        Search for {props.keyword}
      </div>
    );

  const info = props.data.info;
  // console.log(props.data);

  return (
    <div
      className='search-drop-down-link'
      onClick={(e) => {
        props.setShowDropDown(false);
        props.onUpdate((prev) => ({
          ...prev,
          isSearch: false,
          data: props.data,
        }));
      }}>
      <span className='search-drop-down-link-header'>
        {info.department}
        {info.number}
      </span>
      <span>{info.title}</span>
    </div>
  );
};
// <div className='search-drop-down-item'>
/* </div> */
function useOutsideAlerter(ref) {}

const DropDownMenu = (props) => {
  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef);
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.setShowDropDown(false);
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
        keyword={props.searchText}
        candidate={props.candidate}
        onUpdate={props.onUpdate}
        setShowDropDown={props.setShowDropDown}
      />
      {props.candidate.map((x, i) => {
        return <DropDownItem key={i} data={x} onUpdate={props.onUpdate} setShowDropDown={props.setShowDropDown}/>;
      })}
    </div>
  );
};

export default DropDownMenu;
