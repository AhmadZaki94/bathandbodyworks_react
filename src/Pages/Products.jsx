import { Box, Heading, Flex, Text, Stack, Select, Image, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar } from '../Components/Sidebar';
// import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchData } from '../Redux/Products/action';

import { ProductSample } from '../Components/ProductSample';

export const Products = () => {
    const products = useSelector((store) => store.projectData.products);
    // console.log(products);

    const dispatch = useDispatch();
    // const [searchParams] = useSearchParams();
    useEffect(() => {
        if(products?.length === 0)
        {
            dispatch(fetchData());
        }
    },[dispatch, products?.length]);
    console.log("After", products);
    return (
        <Box marginTop='25px'>
            <Stack fontFamily="Trade Gothic W01 Light, Arial,sans-serif" display={{md: 'flex'}} flexDirection={{md: 'row'}} gap={6}>
            <Box minWidth={'15rem'}>
                <Sidebar/>
            </Box>
                <Box w='1250px'  border={'1px solid white'}>
                    <Heading as='h1' fontSize='24px' fontWeight='400'>All Body Care</Heading>
                    <Box w='1190px' border={'1px solid white'} marginTop='5px'></Box>
                    <Box border={'1px solid white'} w='1165px' h='380px' margin='auto'>
                        <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0817b914/images/Spring2022/tbctier_sp3_gh.jpg?yocs=s_'/>
                        <Box w='950px' h='100px' border={'1px solid white'} margin='auto' marginTop='20px'>
                            <Button marginRight='25px' variant='solid' color='white' colorScheme='blue' borderRadius='none'>ALL BODY CARE</Button>
                            <Button marginRight='25px' variant='solid' color='white' colorScheme='blue' borderRadius='none'>FRAGRANCE</Button>
                            <Button marginRight='25px' variant='solid' color='white' colorScheme='blue' borderRadius='none'>BATH & SHOWER</Button>
                            <Button marginRight='25px' variant='solid' color='white' colorScheme='blue' borderRadius='none'>MOISTURIZERS</Button>
                            <Button marginRight='25px' variant='solid' color='white' colorScheme='blue' borderRadius='none'>AROMATHERAPY</Button> <br />
                            <Button marginTop='15px' marginLeft='450px' marginRight='25px' variant='solid' color='white' colorScheme='blue' borderRadius='none'>MEN'S</Button> 
                        </Box>
                    </Box>
                    <Box display='flex'>
                        <Box display='flex' bg='#f2f2f2' w='918px' h='55px' margin='auto' border={'1px solid white'} marginTop='35px'>
                            <Text marginTop='15px' marginLeft='8px'>Filter By:</Text>
                            <Select marginLeft='8px' marginTop='8px' w='250px' variant='flushed' placeholder='PRODUCT TYPE'>

                            </Select>
                            <Select marginLeft='8px' marginTop='8px' w='250px' variant='flushed' placeholder='FRAGRANCE NAME'></Select>
                            <Select marginLeft='8px' marginTop='8px' w='250px' variant='flushed' placeholder='FRAGRANCE CATEGORY'></Select>
                        </Box>
                        <Box w='230px' h='55px' marginTop='35px' border={'1px solid white'} marginRight='20px'>
                            <Select marginLeft='8px' marginTop='8px' w='225px' variant='flushed' placeholder='SORT BY'></Select>
                        </Box>
                    </Box>

                    { /* Product Mappin Part*/}
                    <Box>
                    <Flex flexWrap='wrap' justifyContent='space-around'>
                        {products.map((e) => {
                            return (
                          <Link key={e._id} to={`/products/${e._id}`}>
                          <ProductSample 
                            key={e._id} 
                            image={e.productImage} 
                            title={e.productName} 
                            price={e.productPrice}
                            type={e.productType} />
                            </Link>
                            )
                        })}
                    </Flex>
                </Box>
                </Box>
            </Stack>
        </Box>
    )
}
