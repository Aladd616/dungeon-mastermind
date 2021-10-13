// ================================================
//  Wraps the main character sheet page
// ================================================
import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import CharacterSheet from './CharacterSheet';

export const CharacterWrapper = (props) => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    fetch(`/api/characters/`)
      .then((res) => res.json())
      .then((json) => setState({ data: json }));
  }, []);

  const renderList = state.data.map((char, i) => {
    return <Text key={i}>{char.character_name}</Text>;
  });

  return (
    <Grid templateRows="repeat(1, 1f)" templateColumns="repeat(5, 1f)">
      <GridItem colspan={1}>
        <Box>{renderList}</Box>
      </GridItem>
      <GridItem colspan={4} colStart={2}>
        <Box>
          <CharacterSheet {...props} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CharacterWrapper;
