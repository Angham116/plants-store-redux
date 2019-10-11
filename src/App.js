import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  LandingPage,
  Login,
  Header,
  Home, 
  Cart, 
  ProductDetails
} from './Components';

import {
  loginUrl,
  homeUrl,
  landingUrl, 
  cartUrl,
  productUrl
} from './urls';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={landingUrl} component={LandingPage} />
        <Route exact path={loginUrl} component={Login} />
        {/* protected routes */}
        <Route exact path={homeUrl} component={Home}/>
        <Route exact path={cartUrl} component={Cart}/>
        <Route exact path={productUrl} component={ProductDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
