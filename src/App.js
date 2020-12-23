import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import router from "./router";

function App() {
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {router.map((route) => (
            <Route path={route.path} component={route.component} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
