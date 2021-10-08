// ================================================
//  Each individual navigation menu item
// wraps it in a link tag
// ================================================
import React from 'react';
import { Link, Text } from '@chakra-ui/react';

export const NavItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default NavItem;
