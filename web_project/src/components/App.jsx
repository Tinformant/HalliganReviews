<<<<<<< HEAD
import React from 'react';
import NavigationBar from './NavigationBar';
// import 'bootstrap/dist/css/bootstap.min.css';
=======
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Navbar";
import Header from "./Header";
import Review from "./Review";
>>>>>>> f91cf3a0539ab4e9e3c0b2579966c64bcee63903

function App() {
  const data = {
    comment: ["Comment1", "Comment2", "Comment3"],
    course: [4, 5, 6],
    instructor: [1, 2, 3],
  };

  return (
    <div>
      <NavigationBar />
    </div>
  );
}

export default App;

