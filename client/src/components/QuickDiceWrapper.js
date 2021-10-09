import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import QuickDiceBox from './QuickDiceBox';

export const QuickDiceWrapper = ({ roller }) => {
  return (
    <Box p={3}>
      <Heading>Quick Dice</Heading>
      <Flex
        justifyContent="space-evenly"
        align={['center', 'center', 'inherit', 'inherit']}
        direction={['column', 'column', 'row', 'row']}
      >
        <QuickDiceBox roller={roller} size="4" />
        <QuickDiceBox roller={roller} size="6" />
        <QuickDiceBox roller={roller} size="8" />
        <QuickDiceBox roller={roller} size="10" />
        <QuickDiceBox roller={roller} size="12" />
        <QuickDiceBox roller={roller} size="20" />
        <QuickDiceBox roller={roller} size="100" />
      </Flex>
    </Box>
  );
};

export default QuickDiceWrapper;
