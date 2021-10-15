// ================================================
//  Represents the actual dice formula input field
// for the advanced roller.
// Contains a button and a text input field.
// ================================================
import React, { useState } from 'react';
import { Button, Input, Flex } from '@chakra-ui/react';

export const AdvancedDiceInput = ({ roller }) => {
  const [diceFormula, setDiceFormula] = useState('');
  return (
    <Flex direction="row">
      <Button
        onClick={() => {
          roller(diceFormula);
          setDiceFormula('');
        }}
        mr="1em"
      >
        Roll
      </Button>
      <Input
        placeholder="3d10+1d6+5"
        value={diceFormula}
        onChange={(evt) => setDiceFormula(evt.target.value)}
      ></Input>
    </Flex>
  );
};

export default AdvancedDiceInput;
