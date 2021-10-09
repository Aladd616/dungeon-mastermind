// ================================================
//  The nav menu displays the list of links
// ================================================
import React from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { NavItem } from './NavItem';
import { NavLink as RouteLink } from 'react-router-dom';

export const NavMenu = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-start', 'flex-start']}
        direction={['column', 'row', 'row', 'row']}
      >
        <RouteLink exact to="/" activeClassName="active">
          <NavItem>Combat Tracker</NavItem>
        </RouteLink>
        <RouteLink to="/dice" activeClassName="active">
          <NavItem>Dice Roller</NavItem>
        </RouteLink>
        <RouteLink to="/characters" activeClassName="active">
          <NavItem>Characters</NavItem>
        </RouteLink>
        <RouteLink to="/abilities" activeClassName="active">
          <NavItem>Abilities</NavItem>
        </RouteLink>
      </Stack>
    </Box>
  );
};

export default NavMenu;
