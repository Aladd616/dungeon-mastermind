// ================================================
//  Main is the Main Router that determines which
// sub-page should be loaded.
// ================================================
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';

export default function Main(props) {
  return (
    <Router>
      <Header />
      <Navigation {...props} />
      <Switch>
        <Route exact path="/">
          <p>Combat Tracker goes here</p>
        </Route>
        <Route path="/dice">
          <p>Dice goes here</p>
        </Route>
        <Route path="/characters">
          <p>Characters Goes here</p>
        </Route>
        <Route path="/abilities">
          <p>abilities goes here</p>
        </Route>
        <Route path="/settings">
          <p>settings goes here</p>
        </Route>
      </Switch>
    </Router>
  );
}
