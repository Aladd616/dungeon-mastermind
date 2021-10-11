import React, { useState } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

export const QuickDiceBox = ({ size, roller }) => {
  const [roll, setRoll] = useState('-');
  const source = `./images/quickdice/d${size}.png`;
  const alttext = `d${size} Image`;

  return (
    <Box marginX={3}>
      <Stack>
        <Image
          src={source}
          alt={alttext}
          maxWidth="100px"
          maxHeight="90px"
          onClick={async () => {
            let result = await roller(size);
            setRoll(result);
          }}
        />
        <Text align="center" fontSize="4xl">
          {roll}
        </Text>
      </Stack>
    </Box>
  );
};

export default QuickDiceBox;
