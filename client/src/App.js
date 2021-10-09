// ================================================
//  App wrapper, initializes providers
// ================================================
import { DMProvider } from './utils/DMContext';
import React from 'react';
import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DMProvider>
        <Main />
      </DMProvider>
    </ChakraProvider>
  );
}

export default App;
