import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import{Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from "@chakra-ui/react"
const mysql = require('mysql');

let encounter = [];
let initiative = [];

const CombatTracker = () => {
  const character = () => {
    let query = 'SELECT * FROM character';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  };
  return(

  );
};

export default CombatTracker;
