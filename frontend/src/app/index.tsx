import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import Login from "../pages/login";
import ProductDetail from "../pages/product/detail";

const PageNotFound = () => {
  return (
    <>
      <div>page not found</div>
    </>
  );
};

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
          <Route
            path="/product/detail/:id"
            exact={true}
            component={ProductDetail}
          />
          <Route path="/login" exact={true} component={Login} />
          <Route exact={false} component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
