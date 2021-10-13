// ================================================
//  Wraps the main abilities page
// ================================================
import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import AbilitiesSheet from './AbilitiesSheet';
import CharacterSheet from './CharacterSheet';

export const AbilitiesWrapper = (props) => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    fetch(`/api/abilities/`)
      .then((res) => res.json())
      .then((json) => setState({ data: json }));
  }, []);

  const renderList = state.data.map((pwr, i) => {
    return <Text key={i}>{pwr.title}</Text>;
  });

  return (
    <Grid templateRows="repeat(1, 1f)" templateColumns="repeat(5, 1f)">
      <GridItem colspan={1}>
        <Box>{renderList}</Box>
      </GridItem>
      <GridItem colspan={4} colStart={2}>
        <Box>
          <AbilitiesSheet {...props} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AbilitiesWrapper;
