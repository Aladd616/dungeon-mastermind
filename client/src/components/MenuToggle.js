// ================================================
//  Menu Toggle is the button that appears on smaller
// screens to hide or show the menu bar
// ================================================
import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { MdMenu } from 'react-icons/md';

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <AiFillCloseSquare /> : <MdMenu />}
    </Box>
  );
};

export default MenuToggle;
