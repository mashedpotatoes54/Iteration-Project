import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Center, Heading, Highlight, VStack, Image, HStack } from '@chakra-ui/react'
import image from '../../components/images/Moodswings-title-crop2.png'

const Auth = () => {
  return (
    <Center minHeight = '100vh' bg = '#fffff2'>

      <VStack spacing = {8}>
        <VStack spacing = {0}>
          <Heading lineHeight='tall' fontSize = '100px'>
            <Highlight
              color = '#232b2b'
              query='swings'
              styles={{ px: '5', py: '1', bg: 'lightpink', color: '#232b2b' ,rounded: 'full'}}
            >
              moodswings
            </Highlight>
          </Heading>
          <Image src = {image} boxSize = '250px' />
          </VStack>
        <Button variant = 'outline' bg = 'lightpink' color = '#232b2b' size = 'lg'>
          <Link to="login">Get Started</Link>
        </Button>
        <Button variant = 'solid'>
          <Link to="home">Home</Link>
        </Button>
      </VStack>

  </Center>
  );
};

export default Auth;
