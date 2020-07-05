import React from "react";
import Header from "./Header";
import Result from "./Result";



// const filterData = (data, filter) => {
//   if (filter.semester) {
//     ["fall", "spring"]

//     {...prev, fall: true}
//   }
// }

const SearchBody = (props) => {
  const [filter, setFilter] = React.useState({});

  return (
    <div className='search-body'>
      <Header
        data={props.data}
        searchKeyword={props.searchKeyword}
        setFilter={setFilter}
      />
      <Result data={props.data} filter={filter}/>
    </div>
  );
};

export default SearchBody;

