// ================================================
//  The main dice tab, handles the dice logic and
// dice roll display
// ================================================
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import QuickDiceWrapper from './QuickDiceWrapper';
import AdvancedDiceWrapper from './AdvancedDiceWrapper';
import DiceHistory from './DiceHistory';

export const DiceWrapper = () => {
  const [state, setState] = useState({ history: [] });

  // Handles quick dice logic
  // -----------------------------------------------------------------
  async function rollQuickDice(size) {
    let apiURL = `/api/dice/${size}`;

    const response = await fetch(apiURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.json();

    addHistory('Quick Dice: ' + result);
    return result;
  }

  // Handles submission of advanced dice formula to the server
  // -----------------------------------------------------------------
  async function rollAdvancedDice(formula) {
    if (!formula) {
      return null;
    }

    const response = await fetch('/api/dice', {
      method: 'POST',
      body: JSON.stringify({
        dice: formula,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.json();
    addHistory(result.string);
  }

  // Adds a new element to the dice roll history
  // -----------------------------------------------------------------
  function addHistory(input) {
    let newHistory = state.history;
    newHistory.push(input);

    if (newHistory.length > 10) {
      newHistory.shift();
    }
    console.log(newHistory);
    setState({ ...state, history: newHistory });
  }

  return (
    <Box>
      <QuickDiceWrapper roller={rollQuickDice} />
      <AdvancedDiceWrapper roller={rollAdvancedDice} />
      <DiceHistory history={state.history}></DiceHistory>
    </Box>
  );
};

export default DiceWrapper;
