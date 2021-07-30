import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import Login from "../pages/login";
import ProductDetail from "../pages/product/detail";
import NavBar from "./Navbar";
import { INav } from "../typings/index";

const PageNotFound = () => {
  return (
    <>
      <div>page not found</div>
    </>
  );
};

const navTables: INav[] = [
  {
    href: "/login",
    name: "login",
  },
  {
    href: "/product",
    name: "product",
  },
];

interface IRoute {
  path: string;
  exact: boolean;
  component: (props?: any) => JSX.Element;
}
const routeTables: IRoute[] = [
  {
    path: "/product/:category/:id",
    exact: true,
    component: ProductDetail,
  },
  {
    path: "/product/:category",
    exact: true,
    component: Product,
  },
  {
    path: "/product",
    exact: true,
    component: Product,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route
            path="/product/:category/:id"
            exact={true}
            component={ProductDetail}
          />
          <Route path="/product/:category" exact={true} component={Product} />
          <Route path="/product" exact={true} component={Product} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/" exact={true} component={Home} />
          <Route exact={false} component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
