import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MainBody from "./mainBody/MainBody";
import MainBody from "./main-body";

import NavigationBar from './navigation/index';
import rawData from "../data.js";

// import'bootstrap/dist/css/bootstap.min.css';

function App() {
  // const [state, setState]

  const [val, setVal] = React.useState({
    searchKeyword: "",
    isSearch: false,
    data: rawData
  });
  // const [isSearch, setIsSearch] = React.useState(false);
  // const [data, setData] = React.useState(rawData);

  return (
    <div>
      <NavigationBar onUpdate={setVal} />
      <MainBody
        onUpdate={setVal}
        isSearch={val.isSearch}
        searchKeyword={val.searchKeyword}
        data={val.data}
      />
    </div>
  );
}

export default App;

