// ================================================
//  Wrapper for the advanced dice roller section of
// the dice tab
// ================================================
import React from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

export const DiceHistory = ({ history }) => {
  return (
    <Box p={3}>
      <UnorderedList>
        {history.map((hist, i) => {
          return <ListItem>{hist}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
};

export default DiceHistory;
