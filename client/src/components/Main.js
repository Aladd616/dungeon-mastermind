// ================================================
//  Main is the Main Router that determines which
// sub-page should be loaded.
// ================================================
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DiceWrapper from './DiceWrapper';
import Navigation from './Navigation';
import Header from './Header';
import CharacterWrapper from './CharacterWrapper';
import Login from './Login';
import SignUp from './SignUp';
import AbilitiesWrapper from './AbilitiesWrapper';

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
          <DiceWrapper />
        </Route>
        <Route path="/characters">
          <CharacterWrapper />
        </Route>
        <Route path="/abilities">
          <AbilitiesWrapper />
        </Route>
        <Route path="/settings">
          <p>settings goes here</p>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
