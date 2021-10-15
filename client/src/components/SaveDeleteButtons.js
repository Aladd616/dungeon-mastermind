// ================================================
//  Save
// ================================================
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { AiFillSave } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const SaveDeleteButtons = ({ saveFunction, deleteFunction }) => {
  return (
    <Box>
      <Button color="blue" onClick={saveFunction}>
        Save
        <AiFillSave />
      </Button>
      <Button color="red">
        Delete
        <RiDeleteBin2Line onClick={deleteFunction} />
      </Button>
    </Box>
  );
};

export default SaveDeleteButtons;
