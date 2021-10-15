// ================================================
//  Wrapper for the advanced dice roller section of
// the dice tab
// ================================================
import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const DiceHistory = ({ history }) => {
  const renderHistory = history.map((element, i) => {
    console.log(element);
    return <Text key={i}>{element}</Text>;
  });

  return <Box>{renderHistory}</Box>;
};

export default DiceHistory;
