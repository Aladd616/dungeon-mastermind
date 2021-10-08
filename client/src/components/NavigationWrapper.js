// ================================================
//  NavigationWrapper is the actual navigation bar
// enclosure that wraps the other individual components
// ================================================
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationWrapper({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-evenly"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['black']}
      color="white"
    >
      {children}
    </Flex>
  );
}
