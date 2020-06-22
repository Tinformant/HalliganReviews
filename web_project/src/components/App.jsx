import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Navbar";
import Header from "./Header";
import Review from "./Review";

function App() {
  const data = {
    comment: ["Comment1", "Comment2", "Comment3"],
    course: [4, 5, 6],
    instructor: [1, 2, 3],
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Review data={data}/>
    </div>
  );
}

export default App;
