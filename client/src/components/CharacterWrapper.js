// ================================================
//  Wraps the main character sheet page
// ================================================
import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import CharacterSheet from './CharacterSheet';
import { NavLink } from 'react-router-dom';

export const CharacterWrapper = (props) => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    fetch(`/api/characters/`)
      .then((res) => res.json())
      .then((json) => setState({ data: json }));
  }, []);

  const renderList = state.data.map((char, i) => {
    const url = '/characters/' + char.id;
    return (
      <NavLink key={i} to={url}>
        <Text key={i}>{char.character_name}</Text>;
      </NavLink>
    );
  });

  return (
    <Grid templateRows="repeat(1, 1f)" templateColumns="repeat(5, 1f)">
      <GridItem colSpan={1}>
        <Box>{renderList}</Box>
      </GridItem>
      <GridItem colSpan={4} colStart={2}>
        <Box>
          <CharacterSheet {...props} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CharacterWrapper;
