import React from "react";
import Header from "./Header";
import Result from "./Result";



// const filterData = (data, filter) => {
//   if (filter.semester) {
    
//   }
// }

// implemetation of the setFIlter 
// (prev) => ({...prev, {...prev[title], id:!isActive} })



const getFilteredResult = (data, filter) => {
  const semester = filter.semester;
  const level = filter.level;
  
  const d = data.filter((x) => {
    for (let v in level) {
      const [v1, v2] = [parseInt(v), parseInt(x.number)];
      if (level[v] && v2 >= v1 && v2 < v1 + 100) {
        return true;
      }
    }
    if (level["0300"] && x.number >= "0300") {
        return true;
    }
    return false;
  });

  const newData = d.map((x)=>{
    const newAvailOption = x.availOption.filter((option)=>{
      for (let v in semester) {
        if (semester[v]  &&  option.semester.toLowerCase() === v){
          return true;
        }
      }
      return false;
    })
    return {...x, availOption: newAvailOption};
  })
  return newData.filter((x)=>{
    return x.availOption.length !== 0;
  })
};

const SearchBody = (props) => {
  const [filter, setFilter] = React.useState({
    semester: { "spring": true, "summer": true, "fall": true },
    level: { "0000": true, "0100": true, "0200": true, "0300": true },
  });

  const data = getFilteredResult(props.data, filter);
  console.log(data);

  return (
    <div className='search-body'>
      <Header
        data={data}
        searchKeyword={props.searchKeyword}
        setFilter={setFilter}
      />
      <Result data={data} />
    </div>
  );
};

export default SearchBody;

