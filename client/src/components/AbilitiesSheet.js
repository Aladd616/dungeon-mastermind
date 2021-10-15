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
      setState({
        title: '',
        details: '',
        description: '',
      });
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
    if (id === 'create') {
      console.log('chosen create new ability');
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
        window.location.reload(false);
      }
    });
  }

  function createNewAbility() {
    console.log('triggered create new ability');
    if (state.title) {
      fetch(`/api/abilities/`, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          window.location.reload(false);
        }
      });
    } else {
      console.log(state.title);
    }
  }

  function handleDelete() {
    console.log(id);
    if (id === 'create') {
      return;
    }
    fetch(`/api/abilities/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        window.location.reload(false);
      }
    });
  }

  return (
    <Box m={2}
     color='#300C04'>
      <SaveDeleteButtons
        saveFunction={handleSave}
        deleteFunction={handleDelete}
      />
      <Input
        size="lg"
        name="title"
        value={state.title}
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
