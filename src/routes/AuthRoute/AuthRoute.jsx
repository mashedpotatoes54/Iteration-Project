import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'


const Auth = () => {
  return (
    <div>
      <h1>Journal App</h1>
      <Button>
        <Link to="login">Login</Link>
      </Button>
      <Link to="signup">Sign up</Link>
      <Link to="home">home</Link>
    </div>
  );
};

export default Auth;
