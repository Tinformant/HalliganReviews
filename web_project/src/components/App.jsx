import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MainBody from "./mainBody/MainBody";
import MainBody from "./main-body";

import NavigationBar from './navigation/index';
import rawData from "../data.js";

// import'bootstrap/dist/css/bootstap.min.css';

function App() {
  const [val, setVal] = React.useState("Test");

  const [data, setData] = React.useState(rawData);

  const updateVal = (x) => {
    rawData.info.title = x;
    setVal(x);
    setData(rawData);
    console.log(x);
  };



  return (
    <div>
      <NavigationBar onUpdate={updateVal}/>
      <MainBody data={data}/>
      {/* {val && <MainBody isSearch={val} data={data}/>} */}
      {/* {val && <SearchResult keyword={val}/>} */}

    </div>
  );
}

export default App;

