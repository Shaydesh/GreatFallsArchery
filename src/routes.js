import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import App from './App.js';
import NavBar from './NavBar/NavBar';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <App />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

      </Switch>
    </div>
  );
};