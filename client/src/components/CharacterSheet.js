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
    spelllist: '',
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
        id="character_name"
        value={state.character_name || 'Character Name'}
        onChange={handleChange}
      ></Input>
      <InputGroup size="sm">
        <Input
          id="gender"
          placeholder="Gender"
          value={state.gender}
          onChange={handleChange}
        />
        <Input
          placeholder="Race"
          id="race"
          value={state.race}
          onChange={handleChange}
        />
        <FormLabel>/</FormLabel>
        <Input
          placeholder="Class"
          id="class"
          value={state.class}
          onChange={handleChange}
        />
        <Input
          placeholder="Level"
          id="level"
          value={state.level}
          onChange={handleChange}
        />
        <FormLabel>/</FormLabel>
        <Input
          placeholder="Alignment"
          id="alignment"
          value={state.alignment}
          onChange={handleChange}
        />
        <Input
          placeholder="Size"
          id="size"
          value={state.size}
          onChange={handleChange}
        />
        <Input
          placeholder="Type"
          id="type"
          value={state.type}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Hit Die:</InputLeftAddon>
        <Input id="hitDie" value={state.hitDie} onChange={handleChange} />
        <InputLeftAddon>HP:</InputLeftAddon>
        <Input id="hp" value={state.hp} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Initiative:</InputLeftAddon>
        <Input
          id="initiative"
          value={state.initiative}
          onChange={handleChange}
        />
        <InputLeftAddon>Speed:</InputLeftAddon>
        <Input id="speed" value={state.speed} onChange={handleChange} />
        <InputLeftAddon>Space:</InputLeftAddon>
        <Input id="space" value={state.space} onChange={handleChange} />
        <InputLeftAddon>Reach:</InputLeftAddon>
        <Input id="reach" value={state.reach} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Armor Class:</InputLeftAddon>
        <Input
          id="armorClass"
          value={state.armorClass}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Attack:</InputLeftAddon>
        <Input id="attacks" value={state.attacks} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Full Attack:</InputLeftAddon>
        <Input
          id="fullattack"
          value={state.fullattack}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Special Attacks:</InputLeftAddon>
        <Input
          id="specialattack"
          value={state.specialattack}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Special Qualities:</InputLeftAddon>
        <Input
          id="specialqual"
          value={state.specialqual}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Fortitude:</InputLeftAddon>
        <Input id="fort" value={state.fort} onChange={handleChange} />
        <InputLeftAddon>Reflex:</InputLeftAddon>
        <Input id="reflex" value={state.reflex} onChange={handleChange} />
        <InputLeftAddon>Will:</InputLeftAddon>
        <Input id="will" value={state.will} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Str:</InputLeftAddon>
        <Input id="str" value={state.str} onChange={handleChange} />
        <InputLeftAddon>Dex:</InputLeftAddon>
        <Input id="dex" value={state.dex} onChange={handleChange} />
        <InputLeftAddon>Con:</InputLeftAddon>
        <Input id="con" value={state.con} onChange={handleChange} />
        <InputLeftAddon>Int:</InputLeftAddon>
        <Input id="int" value={state.int} onChange={handleChange} />
        <InputLeftAddon>Wis:</InputLeftAddon>
        <Input id="wis" value={state.wis} onChange={handleChange} />
        <InputLeftAddon>Cha:</InputLeftAddon>
        <Input id="cha" value={state.cha} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Skills:</InputLeftAddon>
        <Textarea
          id="skills"
          value={state.skills}
          onChange={handleChange}
        ></Textarea>
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Feats:</InputLeftAddon>
        <Textarea
          id="feats"
          value={state.feats}
          onChange={handleChange}
        ></Textarea>
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Equipment:</InputLeftAddon>
        <Textarea
          id="equipment"
          value={state.equipment}
          onChange={handleChange}
        ></Textarea>
      </InputGroup>
      <Heading>Notes</Heading>
      <InputGroup>
        <Textarea
          id="notes"
          value={state.notes}
          onChange={handleChange}
        ></Textarea>
      </InputGroup>
    </Box>
  );
};

{
  /*  */
}

export default CharacterSheet;
