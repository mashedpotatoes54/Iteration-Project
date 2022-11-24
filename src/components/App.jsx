import React, { Component } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import image from '../components/images/Moodswings-title-crop2.png'

import JournalEntryContainer from '../components/journal/JournalEntryContainer.jsx'

import { ChakraProvider, Center, Flex, Highlight, Heading, HStack, Image, Button, VStack} from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <VStack>
        <Flex width = '100%' minHeight = '80px' bg = '#fffff2'>
            <HStack marginLeft = '30px' spacing = {4}>
            <Heading lineHeight='tall' fontSize = '60px'>
              <Highlight
                color = '#232b2b'
                query='swings'
                styles={{ px: '5', py: '1', bg: 'lightpink', color: '#232b2b', rounded: 'full'}}
              >
                moodswings
              </Highlight>
            </Heading>
            <Image src = {image} boxSize = '60px' />
            <Button>
              <Link to = 'chart'> go to charts </Link>
            </Button>
            </HStack>
          </Flex>
          <Center bg = '#fffff2' minHeight = '95vh' minWidth = '100%'> 
            <JournalEntryContainer/> 
          </Center>
        </VStack>
    </ChakraProvider>

  );
};

export default App;

// we can delete this file btw becasue index.js is rendering all components
