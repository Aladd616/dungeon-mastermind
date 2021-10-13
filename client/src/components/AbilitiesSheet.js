// ================================================
//  The main body of the ability page, where form
// values are displayed
// ================================================
import React, { useEffect, useState } from 'react';
import { Box, FormLabel, Textarea, Input, Heading } from '@chakra-ui/react';

export const AbilitiesSheet = (props) => {
  const [state, setState] = useState({
    title: '',
    summary: '',
    description: '',
  });

  function handleChange(evt) {
    const newValue = evt.target.value;
    setState({ ...state, [evt.target.name]: newValue });
    console.log(state);
  }

  return (
    <Box>
      <Input
        size="lg"
        name="title"
        value={state.title || 'Ability Name'}
      ></Input>
      <FormLabel>Summary:</FormLabel>
      <Textarea
        name="summary"
        value={state.summary}
        onChange={handleChange}
      ></Textarea>
      <FormLabel>Description:</FormLabel>
      <Textarea
        name="description"
        value={state.description}
        onChange={handleChange}
      ></Textarea>
    </Box>
  );
};

export default AbilitiesSheet;
