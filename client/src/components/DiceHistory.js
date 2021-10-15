// ================================================
//  Wrapper for the advanced dice roller section of
// the dice tab
// ================================================
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const DiceHistory = ({ history }) => {
  const renderHistory = history.map((element, i) => {
    return <Text key={i}>{element}</Text>;
  });

  return <Box>{renderHistory}</Box>;
};

export default DiceHistory;
