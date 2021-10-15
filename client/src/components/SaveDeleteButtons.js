// ================================================
//  Save
// ================================================
import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { AiFillSave } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const SaveDeleteButtons = ({ saveFunction, deleteFunction }) => {
  return (
    <Box mb={4}>
      <Button color="white" bgColor="green" mr={4} onClick={saveFunction}>
        <AiFillSave />
        Save
      </Button>
      <Button color="white" bgColor="red" onClick={deleteFunction}>
        <RiDeleteBin2Line />
        Delete
      </Button>
    </Box>
  );
};

export default SaveDeleteButtons;
