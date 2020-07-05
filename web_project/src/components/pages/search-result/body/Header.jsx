import React from "react";

import "./Header.css";

const Filter = (props) => {
  return(
    <div className="search-filter">
      <p className="search-filter-header">Filter Options</p>
      {props.filterOption.map((x,i)=>{
        return <FilterItem key={i} title={x.title} tagList={x.tagList} />;
      })}
    </div>
  );
};

const FilterItem = (props) => {
  return(
    <div className="search-filter-item">
      <span className="search-filter-item-header">{props.title}</span>
      {props.tagList.map((x,i)=>{
        return <FilterItemTag key={i} name={x} />;
      })}
    </div>
  );
};

const FilterItemTag = (props) => {
  const [isActive, setActive] = React.useState(true);

  return (
    <span
      className={"search-filter-item-tag " + (isActive && "active")}
      onClick={() => {
        setActive(!isActive);
      }}>
      {props.name}
    </span>
  );
};

const Header = (props) => {
  // console.log(props);
  // const thisYear = new Date().getFullYear();
  // const yearList = [thisYear, thisYear-1,thisYear-2, thisYear-3];
  const semesterList = ["Fall","Spring","Summer"];
  const levelList = ["000","0100","0200", "0300+"];
  
  const filterOption = [
    // {title: "Year", tagList: yearList },
    {title: "Semester", tagList: semesterList},
    {title: "Level", tagList: levelList },
  ];

  return (
    props.data ? <div className='search-body-header'>
      <p>
        Found {props.data.length} items for keyword "{props.searchKeyword}"
      </p>
      <Filter filterOption={filterOption}/>
    </div>
    : 
    <div className='search-body-header'>
      <p>No results found</p>
      <Filter filterOption={filterOption}/>
    </div>
  );
};

export default Header;

