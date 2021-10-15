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
import SaveDeleteButtons from './SaveDeleteButtons';

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
    if (id === 'create') {
      setState({
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
      return;
    }
    fetch(`/api/characters/${id}`)
      .then((res) => res.json())
      .then((json) => setState({ ...json }));
  }, [id]);

  function handleChange(evt) {
    const newValue = evt.target.value;
    setState({ ...state, [evt.target.name]: newValue });
  }

  function handleSave(evt) {
    if (id === 'create') {
      console.log('chosen create new character');
      createNewCharacter();
    } else {
      updateCharacter();
    }
  }

  function updateCharacter() {
    fetch(`/api/characters/` + id, {
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

  function createNewCharacter() {
    if (state.character_name) {
      fetch(`/api/characters/`, {
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
      console.log(state.character_name);
    }
  }

  function handleDelete() {
    console.log(id);
    if (id === 'create') {
      return;
    }
    fetch(`/api/characters/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        window.location.reload(false);
      }
    });
  }

  return (
    <Box>
      <Box>
        <SaveDeleteButtons
          saveFunction={handleSave}
          deleteFunction={handleDelete}
        />
      </Box>
      <Box>
        <Input
          size="lg"
          name="character_name"
          value={state.character_name}
          onChange={handleChange}
        ></Input>
        <InputGroup size="sm">
          <Input
            name="gender"
            placeholder="Gender"
            value={state.gender}
            onChange={handleChange}
          />
          <Input
            placeholder="Race"
            name="race"
            value={state.race}
            onChange={handleChange}
          />
          <FormLabel>/</FormLabel>
          <Input
            placeholder="Class"
            name="class"
            value={state.class}
            onChange={handleChange}
          />
          <Input
            placeholder="Level"
            name="level"
            value={state.level}
            onChange={handleChange}
          />
          <FormLabel>/</FormLabel>
          <Input
            placeholder="Alignment"
            name="alignment"
            value={state.alignment}
            onChange={handleChange}
          />
          <Input
            placeholder="Size"
            name="size"
            value={state.size}
            onChange={handleChange}
          />
          <Input
            placeholder="Type"
            name="type"
            value={state.type}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Hit Die:</InputLeftAddon>
          <Input name="hitDie" value={state.hitDie} onChange={handleChange} />
          <InputLeftAddon>HP:</InputLeftAddon>
          <Input name="hp" value={state.hp} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Initiative:</InputLeftAddon>
          <Input
            name="initiative"
            value={state.initiative}
            onChange={handleChange}
          />
          <InputLeftAddon>Speed:</InputLeftAddon>
          <Input name="speed" value={state.speed} onChange={handleChange} />
          <InputLeftAddon>Space:</InputLeftAddon>
          <Input name="space" value={state.space} onChange={handleChange} />
          <InputLeftAddon>Reach:</InputLeftAddon>
          <Input name="reach" value={state.reach} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Armor Class:</InputLeftAddon>
          <Input
            name="armorClass"
            value={state.armorClass}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Attack:</InputLeftAddon>
          <Input name="attacks" value={state.attacks} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Full Attack:</InputLeftAddon>
          <Input
            name="fullattack"
            value={state.fullattack}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Special Attacks:</InputLeftAddon>
          <Input
            name="specialattack"
            value={state.specialattack}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Special Qualities:</InputLeftAddon>
          <Input
            name="specialqual"
            value={state.specialqual}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Fortitude:</InputLeftAddon>
          <Input name="fort" value={state.fort} onChange={handleChange} />
          <InputLeftAddon>Reflex:</InputLeftAddon>
          <Input name="reflex" value={state.reflex} onChange={handleChange} />
          <InputLeftAddon>Will:</InputLeftAddon>
          <Input name="will" value={state.will} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Str:</InputLeftAddon>
          <Input name="str" value={state.str} onChange={handleChange} />
          <InputLeftAddon>Dex:</InputLeftAddon>
          <Input name="dex" value={state.dex} onChange={handleChange} />
          <InputLeftAddon>Con:</InputLeftAddon>
          <Input name="con" value={state.con} onChange={handleChange} />
          <InputLeftAddon>Int:</InputLeftAddon>
          <Input name="int" value={state.int} onChange={handleChange} />
          <InputLeftAddon>Wis:</InputLeftAddon>
          <Input name="wis" value={state.wis} onChange={handleChange} />
          <InputLeftAddon>Cha:</InputLeftAddon>
          <Input name="cha" value={state.cha} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Skills:</InputLeftAddon>
          <Textarea
            name="skills"
            value={state.skills}
            onChange={handleChange}
          ></Textarea>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Feats:</InputLeftAddon>
          <Textarea
            name="feats"
            value={state.feats}
            onChange={handleChange}
          ></Textarea>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Equipment:</InputLeftAddon>
          <Textarea
            name="equipment"
            value={state.equipment}
            onChange={handleChange}
          ></Textarea>
        </InputGroup>
        <Heading>Notes</Heading>
        <InputGroup>
          <Textarea
            name="notes"
            value={state.notes}
            onChange={handleChange}
          ></Textarea>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default CharacterSheet;
