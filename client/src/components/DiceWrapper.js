import React from 'react';
import { Box } from '@chakra-ui/react';
import QuickDiceWrapper from './QuickDiceWrapper';
import AdvancedDiceWrapper from './AdvancedDiceWrapper';

export const DiceWrapper = () => {
  // Dice logic needs to go here
  async function rollQuickDice(size) {
    let apiURL = `/api/dice/${size}`;

    const response = await fetch(apiURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.json();

    return result;
  }

  function rollAdvancedDice() {
    // Quick dice rolling function
  }

  return (
    <Box>
      <QuickDiceWrapper roller={rollQuickDice} />
      <AdvancedDiceWrapper roller={rollAdvancedDice} />
    </Box>
  );
};

export default DiceWrapper;
