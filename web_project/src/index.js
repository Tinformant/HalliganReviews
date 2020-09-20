import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import "./styles.css";

ReactDOM.render( 
    <Router>
        <App/> 
    </Router>
    , document.getElementById('root')
);


// import fakeBackEnd from "./fakeBackEnd";

// const cmdData = {
//   type: "data",
//   query: {
//     department: "COMP",
//     number: "0135",
//     subnumber: "01",
//     semester: "Fall",
//     year: "2019",
//   },
// };

// const cmdSearch = {
//   type: "search",
//   query: {
//     queryString: "comp", // query string typed in the search bar
//     order: "relevant", // sorting order
//   },
// };


// const response = {};

// fakeBackEnd.get(cmdSearch, response);
// console.log(response);

