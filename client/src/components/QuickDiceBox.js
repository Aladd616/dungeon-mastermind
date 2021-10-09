import React from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

export const QuickDiceBox = ({ size, roller }) => {
  const source = `./images/quickdice/d${size}.png`;
  const alttext = `d${size} Image`;
  const roll = '-';

  return (
    <Box marginX={3}>
      <Stack>
        <Image
          src={source}
          alt={alttext}
          maxWidth="100px"
          maxHeight="90px"
          onClick={() => {
            roller(size);
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
