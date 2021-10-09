import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import AdvancedDiceInput from './AdvancedDiceInput';

export const AdvancedDiceWrapper = ({ roller }) => {
  return (
    <Box p={3}>
      <Heading>Advanced Dice Roller</Heading>
      <AdvancedDiceInput roller={roller} />
    </Box>
  );
};

export default AdvancedDiceWrapper;
