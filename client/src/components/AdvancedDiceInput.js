import React from 'react';
import { Button, Input, Flex } from '@chakra-ui/react';

export const AdvancedDiceInput = ({ roller }) => {
  return (
    <Flex direction="row">
      <Button onClick={roller} mr="1em">
        Roll
      </Button>
      <Input placeholder="3d10+1d6+5"></Input>
    </Flex>
  );
};

export default AdvancedDiceInput;
