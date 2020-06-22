import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import MainBody from "./MainBody";
import NavigationBar from './navigation/NavigationBar';
import Writer from "./writeReview/Writer";
import data from "../data.js";
// import'bootstrap/dist/css/bootstap.min.css';

function App() {

  return (
    <div>
      <NavigationBar />
      <Writer />
      <MainBody data={data}/>
    </div>
  );
}

export default App;

