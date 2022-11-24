import React, {useState} from 'react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Center, Button, VStack, Card, Input, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const place = { city, country, notes };

    try {
      const response = await fetch('api/login', {
        method: 'POST',
        body: JSON.stringify(place),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        // setErrorField(json.errorField);
        // console.log('error field: ', json.errorField);
      }

      if (response.ok) {
        setCity('');
        setCountry('');
        setNotes('');
        setError(null);
        // setErrorField([]);
        console.log('new place added!', json);
        dispatch({
          type: 'CREATE_PLACE',
          payload: json,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [accountInfo, setAccountInfo] = useState({
    username: '', password: ''
  });
  const isErrorUsername = (accountInfo.username === '')
  const isErrorPassword = (accountInfo.password === '')
  return (
    <Center minHeight = '100vh' bg = '#fffff2'>
      <VStack spacing = {8}>
        <Heading>Login Here</Heading>
        <Card minWidth = '300px' maxHeight = '500px' padding = {5}>
          <VStack spacing = {3}>
            <FormControl isInvalid>
              <FormLabel>
                Email
              </FormLabel>
              <Input type = 'email' value = {accountInfo.username}placeholder = 'email...' onChange = {(e) => {setAccountInfo({...accountInfo, username: e.target.value})}}/>
              {!isErrorUsername ? (
                <FormHelperText>
                  Enter your Email
                </FormHelperText>
              ): (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <FormLabel>
                Password
              </FormLabel>
              <Input type = 'password' value = {accountInfo.password}placeholder = 'password...' onChange = {(e) => {setAccountInfo({...accountInfo, password: e.target.value})}}/>
              {!isErrorPassword ? (
                <FormHelperText>
                  Enter your Password
                </FormHelperText>
              ): (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
            </FormControl>
            <Button variant = 'solid' bg = 'lightpink' color = '#232b2b'>
               <Link to="home">Log In</Link> 
               </Button>
          </VStack>
              
        </Card>
        <Button variant = 'ghost'>
          <Link to="signup">Sign up</Link>
        </Button>
      </VStack>
    </Center>
  );
};

export default Login;
{/* <div>
      <h2>Login</h2>
      <form>
        <div>
          <input
            type='text'
            placeholder='Username'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div> */}