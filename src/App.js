import React from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Switch,
  Flex,
  theme,
} from '@chakra-ui/react';

import useDisclosure from './hooks/useDisclosure';
import MainHeader from './components/MainHeader';

import Panel from './components/Panel';
import StateBoard from './components/StateBoard';

function App() {
  const { isOpen: redOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" bg="#FCFCFC" minH="100vh">
        <MainHeader />
        <Flex justify="center" mt="24px">
          <Flex
            w="1080px"
            textAlign="center"
            fontSize="xl"
            justify="space-between"
          >
            <Panel />
            <Panel />
            <Panel />
          </Flex>
        </Flex>
        <Flex justify="center" mt="24px">
          <Flex
            w="1080px"
            textAlign="center"
            fontSize="xl"
            justify="space-between"
          >
            <StateBoard />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
