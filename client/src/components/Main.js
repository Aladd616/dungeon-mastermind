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
import CombatTracker from './CombatTracker';
import Login from './Login';
import SignUp from './SignUp';
import AbilitiesWrapper from './AbilitiesWrapper';
import { Box } from '@chakra-ui/layout';

export default function Main(props) {
  return (
    <Router>
      <Box
        backgroundImage="/images/wood-board.jpg"
        backgroundPosition="center"
        minHeight="100vh"
        height="100%"
      >
        <Box
          backgroundImage="/images/graph-paper-header.png"
          backgroundPosition="bottom"
          height="300px"
        >
          <Header />
          <Navigation {...props} />
        </Box>
        <Box p={12} mx={12} bgColor="white">
          <Switch>
            <Route exact path="/">
              <CombatTracker />
            </Route>
            <Route path="/dice">
              <DiceWrapper />
            </Route>
            <Route path="/characters/:id" component={CharacterWrapper}></Route>
            <Route path="/characters">
              <CharacterWrapper />
            </Route>
            <Route path="/abilities/:id" component={AbilitiesWrapper}></Route>
            <Route path="/abilities">
              <AbilitiesWrapper />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
