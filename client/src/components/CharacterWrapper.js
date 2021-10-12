// ================================================
//  Wraps the main character sheet page
// ================================================
import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const CharacterWrapper = () => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    fetch(`/api/characters/`)
      .then((res) => res.json())
      .then((json) => setState({ data: json }));
  }, []);

  const renderList = state.data.map((char, i) => {
    return <Text key={i}>{char.character_name}</Text>;
  });

  return <Box>{renderList}</Box>;
};

export default CharacterWrapper;
