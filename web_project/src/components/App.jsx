import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import MainBody from "./MainBody";
import NavigationBar from './navigation/NavigationBar';
import rawData from "../data.js";

// import'bootstrap/dist/css/bootstap.min.css';

function App() {
  const [val, setVal] = React.useState("");

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
      {val && <MainBody data={data}/>}
    </div>
  );
}

export default App;

