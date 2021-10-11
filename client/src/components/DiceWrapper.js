// ================================================
//  The main dice tab, handles the dice logic and
// dice roll display
// ================================================
import React from 'react';
import { Box } from '@chakra-ui/react';
import QuickDiceWrapper from './QuickDiceWrapper';
import AdvancedDiceWrapper from './AdvancedDiceWrapper';

export const DiceWrapper = () => {
  // Handles quick dice logic
  async function rollQuickDice(size) {
    let apiURL = `/api/dice/${size}`;

    const response = await fetch(apiURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.json();

    return result;
  }

  // Handles submission of advanced dice formula to the server
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
    console.log(result);
  }

  return (
    <Box>
      <QuickDiceWrapper roller={rollQuickDice} />
      <AdvancedDiceWrapper roller={rollAdvancedDice} />
    </Box>
  );
};

export default DiceWrapper;
