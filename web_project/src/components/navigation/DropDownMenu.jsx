import React from "react";
import './DropDownMenu.css';

const DropDownItem = (props) => {

   if (props.isText)
     return <p className='search-drop-down-text'>Search for {props.keyword}</p>;

   return (
     <div className='search-drop-down-item'>
       <p className='search-drop-down-link'>
         <span className='search-drop-down-link-header'>
           {props.department}
           {props.courseNum}
         </span>
         <span>{props.title}</span>
       </p>
     </div>
   );
};

const DropDownMenu = (props) => {
  return <div className='search-drop-down-menu'>
      <DropDownItem isText keyword={props.searchText}/>
      {props.candidate.map((x, i)=>{
        return <DropDownItem key={i} department={x.department} courseNum={x.num} title={x.title}/>;
      })}
  </div>;
};

export default DropDownMenu;
