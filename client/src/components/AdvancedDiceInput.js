import React from 'react';
import { Button, Input, Box } from '@chakra-ui/react';

export const AdvancedDiceInput = ({ roller }) => {
  return (
    <Box>
      <Button onClick={roller}>Roll</Button>
      <Input placeholder="3d10+1d6+5"></Input>
    </Box>
  );
};

export default AdvancedDiceInput;
