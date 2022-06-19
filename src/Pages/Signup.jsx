import { Box, Button, Heading, Center, InputGroup, InputRightElement, Image, Text, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
        const navigate = useNavigate();
        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);

        const [userData, setUserData] = useState({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone_no: ""
        });

        const [data, setData] = useState([]);

        const handleChange = (e) => {
            const {name, value} = e.target;
            setUserData({
                ...userData,
                [name]: value,
            });
            console.log(e.target);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
                setUserData([...data, userData]);

                axios.post('https://firstauth.herokuapp.com/register', userData).then(() => {
                    alert('SignUp Successfully');
                    navigate('/login');

                    setUserData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: "",
                        phone_no: ""
                    });
                });
        };

        useEffect(() => {
            getData();
        },[]);

        const getData = () => {
            axios.get('https://firstauth.herokuapp.com/register').then((res) => {
                setData(res.data);
                console.log(res.data);
            });
        };

    return (
        <Box m='auto' mt='50px' w='995px' h='940px' border='1px solid white'  fontFamily='"Trade Gothic W01 Light", Arial, sans-serif'>
            <Image w='995px' h='115px' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"/>
            <Heading mt='35px' as='h1' fontWeight='400' fontSize='24px' p='0px 0px 15px'>Create an Account</Heading>
            <Box bg={'black'} border='1px solid white'></Box>
            <Box w='360px' h='620px' m='auto' mt='15px'>
                <Text color='#333333' fontSize='14px'>First Name</Text>
                <Input name="first_name" onChange={handleChange} value={userData.first_name} mt='12px' borderRadius='none' w='356px' h='35px'/>
                <Text mt='45px'>Last Name</Text>
                <Input name="last_name" onChange={handleChange} value={userData.last_name} mt='12px' borderRadius='none' w='356px' h='35px'/>
                <Text mt='45px'>Email Name</Text>
                <Input name="email" onChange={handleChange} value={userData.email} mt='12px' borderRadius='none' w='356px' h='35px'/>
                <Text mt='45px'>Phone</Text>
                <Input name="phone_no" onChange={handleChange} value={userData.phone_no} mt='12px' borderRadius='none' w='356px' h='35px'/>
                <Text mt='45px'>Password</Text>
                <InputGroup size='md'>
                        <Input
                            name="password"
                            onChange={handleChange}
                            value={userData.password}
                            borderRadius='none' mt='2px' w='356px' h='35px'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            />
                        <InputRightElement width='4.5rem'>
                            <Button h='35px' fontSize='13px' bg='none'  borderRadius='none' onClick={handleClick}>
                            {show ? 'HIDE' : 'SHOW'}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                <Center mt='45px'>
                       <Button onClick={handleSubmit} w='196px' h='35px' colorScheme='blue' borderRadius='none' m='auto' fontSize='11px'>CREATE AN ACCOUNT</Button>
                </Center>
            </Box>
            
        </Box>
    )
}





