import React from 'react';
import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Nav />
            <Banner/>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
