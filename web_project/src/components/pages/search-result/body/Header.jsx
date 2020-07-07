import React from "react";

import "./Header.css";

const Filter = (props) => {
  return(
    <div className="search-filter">
      <p className="search-filter-header">Filter Options</p>
      {props.filterOption.map((x,i)=>{
        return <FilterItem key={i} title={x.title} tagList={x.tagList} setFilter={props.setFilter} />;
      })}
    </div>
  );
};

const FilterItem = (props) => {
  return (
    <div className='search-filter-item'>
      <span className='search-filter-item-header'>{props.title}</span>
      {props.tagList.map((x, i) => {
        return <FilterItemTag key={i} name={x} title={props.title} setFilter={props.setFilter} />;
      })}
    </div>
  );
};

const FilterItemTag = (props) => {
  const [isActive, setActive] = React.useState(true);
  const prefix = "search-filter-option-";
  const title = props.title.toLowerCase();
  const name = props.name.toLowerCase();
  return (
    <span
      id={prefix + props.name.toLowerCase()}
      className={"search-filter-item-tag " + (isActive && "active")}
      onClick={(e) => {
        console.log(e.target.id);
        setActive(!isActive);
        props.setFilter((prev)=>({
          ...prev, [title]:{...prev[title], [name]: !isActive}
        }))
      }}>
      {props.name}
    </span>
  );
};

const Header = (props) => {
  // console.log(props);
  // const thisYear = new Date().getFullYear();
  // const yearList = [thisYear, thisYear-1,thisYear-2, thisYear-3];
  const semesterList = ["Fall", "Spring", "Summer"];
  const levelList = ["0000", "0100", "0200", "0300+"];

  const filterOption = [
    // {title: "Year", tagList: yearList },
    { title: "Semester", tagList: semesterList },
    { title: "Level", tagList: levelList },
  ];

  return (
    <div className='search-body-header'>
      {props.data ? (
        <p> Found {props.data.length} items for keyword "{props.searchKeyword}"</p>
      ) : (
        <p>No results found</p>
      )}
      <Filter filterOption={filterOption} setFilter={props.setFilter}/>
    </div>
  );
};

export default Header;

