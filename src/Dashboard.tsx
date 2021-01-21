import React from "react";

import Home from "./Home";

import InfoPanel from "./panels/InfoPanel";
import AllocationPanel from "./panels/AllocationPanel";
import PerformancePanel from "./panels/PerformancePanel";
import PositionsPanel from "./panels/PositionsPanel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DrawerRouterContainer from "./layout/DrawerRouterContainer";
//import Dashboard from "./Dashboard";

export default function Dashboard() {
  return (
<Router>
    <div className="panels">
    <div className="panel-info">
        <InfoPanel />
      </div>
      <div className="panel-allocation">
        <AllocationPanel />
      </div>
      <div className="panel-balance">
        <PerformancePanel />
      </div>
      <div className="panel-positions">
        <PositionsPanel />
      </div>
    </div>
    
</Router>
    
  )
}
