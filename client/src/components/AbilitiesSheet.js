// ================================================
//  The main body of the ability page, where form
// values are displayed
// ================================================
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box, FormLabel, Textarea, Input } from '@chakra-ui/react';

export const AbilitiesSheet = (props) => {
  const { id } = useParams();

  const [state, setState] = useState({
    title: '',
    details: '',
    description: '',
  });

  useEffect(() => {
    fetch(`/api/abilities/${id}`)
      .then((res) => res.json())
      .then((json) => setState({ ...json }));
  }, [id]);

  function handleChange(evt) {
    const newValue = evt.target.value;
    setState({ ...state, [evt.target.name]: newValue });
  }

  return (
    <Box>
      <Input
        size="lg"
        name="title"
        value={state.title || 'Ability Name'}
        onChange={handleChange}
      ></Input>
      <FormLabel>Summary:</FormLabel>
      <Textarea
        name="details"
        value={state.details}
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
