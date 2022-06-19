import { Box, Button, Heading, Center, Divider, InputGroup, InputRightElement, Image, Text, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();

        const handleSign = () => {
            navigate('/signup');
            console.log('zaki');
        }
        
        const handleEmail = (e) => {
            setEmail(e.target.value);
        }

        const handlePassword = (e) => {
            setPassword(e.target.value);
        }
        
        const handleLogin = (email, password) => {
            axios.post('https://firstauth.herokuapp.com/email', {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log("response",res.data);
                navigate('/');
            })
            .catch((e) => {
                navigate('/signup');
                console.log("Messgae:", e);
            });
        };

    return (
        <Box m='auto' mt='50px' w='995px' h='740px' border='1px solid white'  fontFamily='"Trade Gothic W01 Light", Arial, sans-serif'>
            <Image w='995px' h='115px' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"/>
            <Heading mt='35px' as='h1' fontWeight='400' fontSize='24px' p='0px 0px 15px'>Sign In or Sign Up</Heading>
            <Box bg={'black'} border='1px solid white'></Box>
            <Box display='flex' justifyContent='center' mt='50px' gap={2}>
                <Box w='410px' h='355px' border='1px solid white'>
                    <Heading textAlign='center' fontWeight='400' as='h2' fontSize='16px'>SIGN IN</Heading>
                    <Text textAlign='center' fontSize='14px' color='#666666'>if you already have an account with us, sign in below</Text>
                    <Box margin='auto' w='300px' mt='30px' border='1px solid white'>
                        <Text fontSize='14px'>Email Address</Text>
                        <Input onChange={handleEmail} bg='#E8F0FE' borderRadius='none' mt='2px' w='290px' h='35px'/> <br />
                        <Text mt='25px' fontSize='14px'>Password</Text>
                        <InputGroup size='md'>
                        <Input
                            bg='#E8F0FE' borderRadius='none' mt='2px' w='290px' h='35px'
                            pr='4.5rem'
                            onChange={handlePassword}
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            />
                        <InputRightElement width='4.5rem'>
                            <Button h='35px' size='sm' borderRadius='none' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        <Center>
                            <Button onClick={() => {
                                handleLogin(email,password);
                            }} mt='35px' h='35px' w='114px' colorScheme='blue' borderRadius='none'>SIGN IN</Button>
                        </Center>
                    </Box>
                </Box>
                <Divider orientation='vertical' />
                <Box w='410px' h='240px' border='1px solid white' justifyItems='center'>
                    <Heading textAlign='center' fontWeight='400' as='h2' fontSize='16px'>SIGN UP</Heading>
                    <Text textAlign='center' fontSize='14px' color='#666666'>Create an account to access the best of your store</Text>
                    <Image mt='15px' w='408px' h='145' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_"/>
                    <Center>
                        <Button onClick={handleSign} w='196px' h='35px' colorScheme='blue' borderRadius='none' m='auto' fontSize='11px'>CREATE AN ACCOUNT</Button>
                    </Center>
                </Box>
            </Box>
        </Box>
    )
}