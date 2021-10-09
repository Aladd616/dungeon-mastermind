// ================================================
//  Each individual navigation menu item
// wrapped previously in a router link tag
// ================================================
import React from 'react';
import { Text } from '@chakra-ui/react';

export const NavItem = ({ children, ...rest }) => {
  return (
    <Text display="block" {...rest}>
      {children}
    </Text>
  );
};

export default NavItem;
