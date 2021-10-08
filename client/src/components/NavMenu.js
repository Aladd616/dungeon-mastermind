// ================================================
//  The nav menu displays the list of links
// ================================================
import React from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { NavItem } from './NavItem';

export const NavMenu = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-start', 'flex-start']}
        direction={['column', 'row', 'row', 'row']}
      >
        <NavItem to="/">Combat Tracker</NavItem>
        <NavItem to="/dice">Dice Roller</NavItem>
        <NavItem to="/characters">Characters</NavItem>
        <NavItem to="/abilities">Abilities</NavItem>
      </Stack>
    </Box>
  );
};

export default NavMenu;
