// ================================================
//  Navigation is the master component for the
// navigation bar, calling all the other components
// ================================================
import { Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import NavigationWrapper from './NavigationWrapper';

export default function Navigation(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return <NavigationWrapper {...props}></NavigationWrapper>;
}
