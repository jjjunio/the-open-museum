import React from "react";
import "./App.css";
import Nav from "./Nav";
import Banner2 from "./Banner2";
import RowCollection from "./RowCollection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Nav />
            <Banner2 />
            <RowCollection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
