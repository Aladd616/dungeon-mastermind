// ================================================
//  The main body of the character sheet, full of
// input fields
// ================================================
import React, { useEffect, useState } from 'react';
import {
  Box,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Heading,
} from '@chakra-ui/react';

export const CharacterSheet = (props) => {
  const [state, setState] = useState({ data: [] });

  return (
    <Box>
      <Heading>Character Name</Heading>
      <InputGroup size="sm">
        <Input placeholder="Gender" />
        <Input placeholder="Race" />
        <FormLabel>/</FormLabel>
        <Input placeholder="Class" />
        <Input placeholder="Level" />
        <FormLabel>/</FormLabel>
        <Input placeholder="Alignment" />
        <Input placeholder="Size" />
        <Input placeholder="Type" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Hit Die:</InputLeftAddon>
        <Input />
        <InputLeftAddon>HP:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Initiative:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Speed:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Space:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Reach:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Armor Class:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Attack:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Full Attack:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Special Attacks:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Special Qualities:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Fortitude:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Reflex:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Will:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Str:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Dex:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Con:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Int:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Wis:</InputLeftAddon>
        <Input />
        <InputLeftAddon>Cha:</InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Skills:</InputLeftAddon>
        <Textarea></Textarea>
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Feats:</InputLeftAddon>
        <Textarea></Textarea>
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Equipment:</InputLeftAddon>
        <Textarea></Textarea>
      </InputGroup>
      <Heading>Notes</Heading>
      <InputGroup>
        <Textarea></Textarea>
      </InputGroup>
    </Box>
  );
};

export default CharacterSheet;
