// ================================================
//  The main body of the ability page, where form
// values are displayed
// ================================================
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box, FormLabel, Textarea, Input } from '@chakra-ui/react';
import SaveDeleteButtons from './SaveDeleteButtons';

export const AbilitiesSheet = (props) => {
  const { id } = useParams();

  const [state, setState] = useState({
    title: '',
    details: '',
    description: '',
  });

  useEffect(() => {
    if (id === 'create') {
      return;
    }
    fetch(`/api/abilities/${id}`)
      .then((res) => res.json())
      .then((json) => setState({ ...json }));
  }, [id]);

  function handleChange(evt) {
    const newValue = evt.target.value;
    setState({ ...state, [evt.target.name]: newValue });
  }

  function handleSave(evt) {
    console.log(id);
    if (id === 'create') {
      createNewAbility();
    } else {
      updateAbility();
    }
  }

  function updateAbility() {
    fetch(`/api/abilities/` + id, {
      method: 'PUT',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        console.log('Updated');
      }
    });
  }

  function createNewAbility() {
    if (state.title) {
      fetch(`/api/abilities/`, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          console.log('Successful Create');
        }
      });
    }
  }

  function handleDelete() {
    if (id === 'create') {
      return;
    }

    fetch(`/api/abilities/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        console.log('Successful Delete');
      }
    });
  }

  return (
    <Box>
      <SaveDeleteButtons
        saveFunction={handleSave}
        deleteFunction={handleDelete}
      />
      <Input
        size="lg"
        id="title"
        value={state.title}
        defaultValue="Ability Name"
        onChange={handleChange}
      ></Input>
      <FormLabel>Summary:</FormLabel>
      <Textarea
        id="details"
        value={state.details}
        onChange={handleChange}
      ></Textarea>
      <FormLabel>Description:</FormLabel>
      <Textarea
        id="description"
        value={state.description}
        onChange={handleChange}
      ></Textarea>
    </Box>
  );
};

export default AbilitiesSheet;
