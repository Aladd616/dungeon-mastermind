// ================================================
//  Wrapper for the advanced dice roller section of
// the dice tab
// ================================================
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import AdvancedDiceInput from './AdvancedDiceInput';

export const AdvancedDiceWrapper = ({ roller }) => {
  return (
    <Box p={3}>
      <Heading>Advanced Dice Roller</Heading>
      <Text my={3}>
        For complex rolls, such as multiple dice or dice with modifiers. Ex:
        3d10+1d6+5
      </Text>
      <AdvancedDiceInput roller={roller} />
    </Box>
  );
};

export default AdvancedDiceWrapper;
