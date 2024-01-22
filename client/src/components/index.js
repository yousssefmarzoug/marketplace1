import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import useAuthentication from "../lib/hooks/useAuthentication";
import Home from "./Home";
import Admin from "./Admin";
import About from "./Misc/About";
import Help from "./Misc/Help";
import Deals from "./Misc/Deals";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Checkout from "./Checkout";
import Success from "./Checkout/Success";
import Cancel from "./Checkout/Cancel";
import Cart from "./Cart";
import Layout from "./Layout";

const App = () => {
  const dispatch = useDispatch();
  const { handleAuthentication } = useAuthentication(dispatch);
  useEffect(() => {
    handleAuthentication();
  }, []);
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />

      <Route path="/help" component={Help} />
      <Route path="/deals" component={Deals} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />

      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/success" component={Success} />
      <Route path="/cancel" component={Cancel} />
    </Layout>
  );
};
export default App;
