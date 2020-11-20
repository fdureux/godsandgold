import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import ChooseGod from "./component/CreateRequest/ChooseGod";
import ChooseRequest from "./component/CreateRequest/ChooseRequest";
import ChooseOffering from "./component/CreateRequest/ChooseOffering";
import ChoosePickUp from "./component/CreateRequest/ChoosePickUp";
import RequestSummary from "./component/RequestSummary/RequestSummary";
import GodDelivery from "./component/Gods/GodDelivery";
import "./App.css";
import "./styles/css/variables.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/choosegod" component={ChooseGod} />
        <Route path="/chooserequest" component={ChooseRequest} />
        <Route path="/chooseoffering" component={ChooseOffering} />
        <Route path="/choosepickup" component={ChoosePickUp} />
        <Route path="/requestsummary" component={RequestSummary} />
        <Route path="/goddelivery" component={GodDelivery} />
      </Switch>
    </div>
  );
}

export default App;
