import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import ChooseGod from "./component/CreateRequest/ChooseGod";
import ChooseRequest from "./component/CreateRequest/ChooseRequest";
import ChooseOffering from "./component/CreateRequest/ChooseOffering";
import ChoosePickUp from "./component/CreateRequest/ChoosePickUp";
import RequestSummary from "./component/RequestSummary/RequestSummary";
import "./App.css";
import "./styles/css/variables.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/choosegod' component={ChooseGod} />
        <Route path='/chooserequest' component={ChooseRequest} />
        <Route path='/chooseoffering' component={ChooseOffering} />
        <Route path='/choosepickup' component={ChoosePickUp} />
        <Route path='/requestsummary' component={RequestSummary} />
      </Switch>
    </div>
  );
}

export default App;
