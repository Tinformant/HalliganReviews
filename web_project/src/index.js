import React from 'react';
import ReactDOM from 'react-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import "./styles.css";

// ReactDOM.render( 
//     <Router>
//         <App/> 
//     </Router>
//     , document.getElementById('root')
// );
ReactDOM.render( 
        <App/> 
    , document.getElementById('root')
);
