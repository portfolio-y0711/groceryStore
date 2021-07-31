import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
import ProductDetail from "../pages/product/detail";
import NavBar from "./Navbar";
import { AuthContext, initialState, reducer } from "../store/index";

import PageNotFound from '../pages/notfound'

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          store,
          dispatch,
        }}
      >
        <Router>
          <NavBar />
          <Switch>
              <Route
                path="/product/:category/:id"
                exact={true}
                component={ProductDetail}
              />
              <Route path="/product/:category" exact={true} component={Product} />
              <Route path="/product" exact={true} component={Product} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
