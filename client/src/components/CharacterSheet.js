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
import { useParams } from 'react-router';

export const CharacterSheet = (props) => {
  const { id } = useParams();

  const [state, setState] = useState({
    character_name: '',
    gender: '',
    race: '',
    class: '',
    level: '',
    alignment: '',
    size: '',
    type: '',
    hitDie: '',
    hp: '',
    initiative: '',
    speed: '',
    space: '',
    reach: '',
    armorClass: '',
    attacks: '',
    fullattack: '',
    specialattack: '',
    specialqual: '',
    fort: '',
    reflex: '',
    will: '',
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: '',
    skills: '',
    feats: '',
    equipment: '',
    notes: '',
  });

  useEffect(() => {
    fetch(`/api/characters/${id}`)
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
        value={state.character_name}
        onChange={handleChange}
      ></Input>
      <InputGroup size="sm">
        <Input
          placeholder="Gender"
          value={state.gender}
          onChange={handleChange}
        />
        <Input placeholder="Race" value={state.race} onChange={handleChange} />
        <FormLabel>/</FormLabel>
        <Input
          placeholder="Class"
          value={state.class}
          onChange={handleChange}
        />
        <Input
          placeholder="Level"
          value={state.level}
          onChange={handleChange}
        />
        <FormLabel>/</FormLabel>
        <Input
          placeholder="Alignment"
          value={state.alignment}
          onChange={handleChange}
        />
        <Input placeholder="Size" value={state.size} onChange={handleChange} />
        <Input placeholder="Type" value={state.type} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Hit Die:</InputLeftAddon>
        <Input value={state.hitDie} onChange={handleChange} />
        <InputLeftAddon>HP:</InputLeftAddon>
        <Input value={state.hp} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Initiative:</InputLeftAddon>
        <Input value={state.initiative} onChange={handleChange} />
        <InputLeftAddon>Speed:</InputLeftAddon>
        <Input value={state.speed} onChange={handleChange} />
        <InputLeftAddon>Space:</InputLeftAddon>
        <Input value={state.space} onChange={handleChange} />
        <InputLeftAddon>Reach:</InputLeftAddon>
        <Input value={state.reach} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Armor Class:</InputLeftAddon>
        <Input value={state.armorClass} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Attack:</InputLeftAddon>
        <Input value={state.attacks} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Full Attack:</InputLeftAddon>
        <Input value={state.fullattack} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Special Attacks:</InputLeftAddon>
        <Input value={state.specialattack} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Special Qualities:</InputLeftAddon>
        <Input value={state.specialqual} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Fortitude:</InputLeftAddon>
        <Input value={state.fort} onChange={handleChange} />
        <InputLeftAddon>Reflex:</InputLeftAddon>
        <Input value={state.ref} onChange={handleChange} />
        <InputLeftAddon>Will:</InputLeftAddon>
        <Input value={state.will} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Str:</InputLeftAddon>
        <Input value={state.str} onChange={handleChange} />
        <InputLeftAddon>Dex:</InputLeftAddon>
        <Input value={state.dex} onChange={handleChange} />
        <InputLeftAddon>Con:</InputLeftAddon>
        <Input value={state.con} onChange={handleChange} />
        <InputLeftAddon>Int:</InputLeftAddon>
        <Input value={state.int} onChange={handleChange} />
        <InputLeftAddon>Wis:</InputLeftAddon>
        <Input value={state.wis} onChange={handleChange} />
        <InputLeftAddon>Cha:</InputLeftAddon>
        <Input value={state.cha} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Skills:</InputLeftAddon>
        <Textarea value={state.skills} onChange={handleChange}></Textarea>
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Feats:</InputLeftAddon>
        <Textarea value={state.feats} onChange={handleChange}></Textarea>
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Equipment:</InputLeftAddon>
        <Textarea value={state.equipment} onChange={handleChange}></Textarea>
      </InputGroup>
      <Heading>Notes</Heading>
      <InputGroup>
        <Textarea value={state.notes} onChange={handleChange}></Textarea>
      </InputGroup>
    </Box>
  );
};

export default CharacterSheet;
