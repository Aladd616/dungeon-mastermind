// ================================================
//  Wraps the main abilities page
// ================================================
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import AbilitiesSheet from './AbilitiesSheet';

export const AbilitiesWrapper = (props) => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    fetch(`/api/abilities/`)
      .then((res) => res.json())
      .then((json) => setState({ data: json }));
  }, []);

  const renderList = state.data.map((pwr, i) => {
    const url = '/abilities/' + pwr.id;
    return (
      <NavLink key={i} to={url}>
        <Text>{pwr.title}</Text>
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
          <AbilitiesSheet {...props} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AbilitiesWrapper;
