import React from "react";
//import {Button} from 'reactstrap';
import './App.css';  
import Login from './Login';  
import Reg from './Registration';  

import 'bootstrap/dist/css/bootstrap.min.css';

import "hammerjs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DrawerRouterContainer from "./layout/DrawerRouterContainer";
import Dashboard from "./Dashboard";
import Home from "./Home";
import "./App.scss";

function App() {
  return (
    <Router>
   <div>
     {
     <DrawerRouterContainer>
       
     </DrawerRouterContainer>
     }
    {/* <Login/>  */}
    
  </div> 
    
  </Router>
    // <Router>
    //  <DrawerRouterContainer> 
       
    //  </DrawerRouterContainer>
    // </Router>
   
  );
}

export default App;
