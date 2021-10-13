import React,{useState}from 'react'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Checkbox,
    useBoolean
  } from '@chakra-ui/react';

  

function SignUp() {

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newUsernName, setNewUserName] = useState('')
    const [newDm,setNewDM] = useBoolean();
    
    const handleSubmit = async event => {
      event.preventDefault();
      try {
    
        const response = await fetch('/api/users/', {
            method: 'POST',
            
            body: JSON.stringify({
                isDM: newDm,
                name: newUsernName,
                password: newPassword,
                email: newEmail,
            }),
            headers: {"Content-type": "application/json"},
            
        })   
        console.log(response.json)
        return(response.json)
      } catch (err) {
          console.log(err)
      }
      alert(`Email: ${newEmail} & Password: ${newPassword}`);
    };

    return(
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" >
                <Box textAlign="center">
                     <Heading>Sign UP</Heading>
                </Box>
            <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input
                    type="name"
                    placeholder="username"
                    size="lg"
                    onChange={event => setNewUserName(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                    type="email"
                    placeholder="example@exp.com"
                    size="lg"
                    onChange={event => setNewEmail(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl isRequired mt={6}>
                    <FormLabel>Password</FormLabel>
                    <Input
                    type="password"
                    placeholder="*******"
                    size="lg"
                    onChange={event => setNewPassword(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Are you a DM</FormLabel>
                    <Checkbox 
                    onChange={setNewDM.toggle}
                    >DM</Checkbox>
                </FormControl>
                 <Button
                    variantColor="teal"
                    variant="outline"
                    type="submit"
                    width="full"
                    mt={4}>
                Sign Up
                </Button>
            </form>
          </Box>
        </Box>
      </Flex>

    )
}



export default SignUp;