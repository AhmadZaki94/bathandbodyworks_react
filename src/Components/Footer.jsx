import { Box, Button, Divider, Flex, Input, Text, Image, Heading } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { AiFillYoutube } from 'react-icons/ai';
import { ImPinterest } from 'react-icons/im';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


export const Footer = () => {

    return (
    <Box marginTop='25px' fontFamily="Trade Gothic W01 Light, Arial,sans-serif">
        <Divider orientation='horizontal'  />
        <Divider orientation='horizontal'  />
        <Box bg='white' w='100%' h='420px' p={10}>
            <Flex gap={5}>
                <Box  fontSize='14px' marginLeft='220px' w='285px' h='270px' bg='white'>
                    <Text>Get email offers & the latest news from Bath & Body Works!</Text>
                    <Box marginTop='15px'>
                        <label>Enter Email</label> <br />
                        <Input w='180px' h='35px' borderRadius='none'/> <br />
                    </Box>
                    <Box marginTop='15px'>
                        <label>Confirm Email</label> <br />
                        <Input w='180px' h='35px' borderRadius='none'/>
                        <Button w='80px' h='35px' borderRadius='none' bg='black' color='white' fontWeight='0px'>SUBMIT</Button>
                    </Box>
                    <Text as='h3' marginTop='20px'>GET CONNECTED</Text>
                    <Box justifyContent='space-evenly' display='flex'  w='100%' height='40px' marginTop='5px'>
                        <BsFacebook fontSize='27px' color='#3460A1' height='27px' width='27px'/>
                        <AiFillTwitterCircle fontSize='30px' color='#28AAE1' height='27px' width='27px'/>
                        <AiOutlineInstagram fontSize='30px' color='#35648B' height='27px' width='27px'/>
                        <SiTiktok fontSize='25px' color='#000000' height='27px' width='27px' />
                        <AiFillYoutube fontSize='25px' color='#EE3138' height='27px' width='27px' />
                        <ImPinterest fontSize='25px' color='#CE2129' height='27px' width='27px'/>
                    </Box>
                </Box>
                <Box w='150px' h='210px' bg='white' lineHeight='30px'>
                    <Heading as='h3' color='#333333' fontSize='12px'>COSTUMER CARE</Heading>
                    <Text color='#666666' fontSize='14px'>Help & FAQs</Text>
                    <Text color='#666666' fontSize='14px'>Shipping</Text>
                    <Text color='#666666' fontSize='14px'>Returns & Exchanges</Text>
                    <Text color='#666666' fontSize='14px'>order Tracking</Text>
                    <Text color='#666666' fontSize='14px'>Corporate Sales & Gifts</Text>
                    <Text color='#666666' fontSize='14px'>Contact Us</Text>
                </Box>
                <Box w='120px' h='150px' bg='white' lineHeight='30px'>
                    <Heading as='h3' color='#333333' fontSize='12px'>MY ACCOUNT</Heading>
                    <Text color='#666666' fontSize='14px'>Sign In or Sign Up</Text>
                    <Text color='#666666' fontSize='14px'>Order Tracking</Text>
                    <Text color='#666666' fontSize='14px'>My Auto Refresh</Text>
                    <Text color='#666666' fontSize='14px'>My Love-It List</Text>
                </Box>
                <Box w='175px' h='230px' bg='white' lineHeight='30px'>
                    <Heading as='h3' color='#333333' fontSize='12px'>DISCOVER</Heading>
                    <Text color='#666666' fontSize='14px'>About Us</Text>
                    <Text color='#666666' fontSize='14px'>Careers</Text>
                    <Text color='#666666' fontSize='14px'>Gift Cards</Text>
                    <Text color='#666666' fontSize='14px'>Shop by Fragrance</Text>
                    <Text color='#666666' fontSize='14px'>Product Ingredients</Text>
                    <Text color='#666666' fontSize='14px'>Get Inspired</Text>
                    <Text color='#666666' fontSize='14px'>Diversity, Equity & Inclusion</Text>
                </Box>
                <Box w='110px' h='90px' bg='white' lineHeight='30px'>
                    <Heading as='h3' color='#333333' fontSize='12px'>FIND US</Heading>
                    <Text color='#666666' fontSize='14px'>Store Locator</Text>
                    <Text color='#666666' fontSize='14px'>Global Locations</Text>
                </Box>
            </Flex>
            <Box marginLeft='810px' w='415px' h='110px'>
                <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_'/>
            </Box>
        </Box>
        <Box border={'1px solid #f2f2f2'} bg='#f2f2f2' h='125px'>
            <Box border={'1px solid #f2f2f2'} w='1400px' h='75px' p='0px 1px 0px 0px' margin='auto' marginTop='25px'>
                <Text fontSize='14px' color='333333'  textAlign='center'>Terms Of Use | Privacy Policy | Security Bug Report | California Privacy Rights | Do Not Sell My Personal Information(California) | Transparency In Supply Chain | Ad Prefernces</Text>
                <Box margin='auto' marginTop='25px' w='450px' border={'1px solid #f2f2f2'} display='flex'>
                <AiOutlineCopyrightCircle />
                <Text fontSize='14px' color='333333'> 2022 Bath And Body Works Direct, Inc. All Rights Reserved.</Text>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}