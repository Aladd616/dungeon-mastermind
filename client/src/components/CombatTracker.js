import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';

const CombatTracker = () => {
  // attempting to import character
  const [characters, setCharacters] = useState({ data: [] });
  const [encounter, setEncounter] = useState([]);
  const [currentInitiative, setCurrentInitiative] = useState([]);

  useEffect(() => {
    fetch(`/api/characters/`)
      .then((res) => res.json())
      .then((json) => setCharacters({ data: json }));
  }, []);

  function encounterClick(characterData) {
    setEncounter((encounter) => [...encounter, characterData]);
    console.log(encounter);
    console.log(characterData);
  }

  function changeInitiative(initiativeInput) {}

  return (
    <ButtonGroup>
      {characters.data.map((character) => (
        <Button
          onClick={() => encounterClick(character)}
          colorScheme="blue"
          key={character.character_name}
        >
          {character.character_name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CombatTracker;
