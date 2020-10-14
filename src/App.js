import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home";
import Users from "./Users";
import Meteo from "./Meteo";
import Mappemonde from "./Mappemonde";

const history = createBrowserHistory();

const App = () => {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Router history={history}>
        <div>
          {/* Chemins d'acces */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Users">
              <Users />
            </Route>
            <Route exact path="/Meteo">
              <Meteo />
            </Route>
            <Route exact path="/Mappemonde">
              <Mappemonde />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
