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
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  FormErrorMessage,
  FormLabel,
  Input,
  InputRightAddon,
  InputLeftAddon,
  InputGroup,
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

  function encounterDisplay(encounter) {
    encounter.map((encounterCharacter) => {
      console.log(encounterCharacter);
      return (
        <div>
          <UnorderedList>
            <ListItem key={encounterCharacter}>{encounterCharacter}</ListItem>
          </UnorderedList>
        </div>
      );
    });
  }

  function changeInitiative(initiativeInput) {}

  return (
    <div>
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
        {/* <Button onClick={() => console.log(encounter)}>test</Button> */}
        <Button onClick={() => encounterDisplay(encounter)}>
          finish encounter
        </Button>
      </ButtonGroup>
      <UnorderedList>
        {encounter.map((encounterCharacter) => (
          <ListItem key={encounterCharacter.id}>
            {encounterCharacter.character_name}
            <Input placeholder="initiative" />
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};

export default CombatTracker;
