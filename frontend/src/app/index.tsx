import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import Login from "../pages/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <li>
          <a href="/home">home</a>
        </li>
        <li>
          <a href="/product">product</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
      </header>
      <Router>
        <Switch>
          <Route path="/home" exact={true} component={Home} />
          <Route path="/product" exact={true} component={Product} />
          <Route path="/login" exact={true} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
