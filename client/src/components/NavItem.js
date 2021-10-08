// ================================================
//  Each individual navigation menu item
// wraps it in a link tag
// ================================================
import React from 'react';
import { Text } from '@chakra-ui/react';

export const NavItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Text display="block" {...rest}>
      {children}
    </Text>
  );
};

export default NavItem;
