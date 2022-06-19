import { Box, Heading, Button, useColorModeValue,  Stack, Text, Image } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteProductCart } from '../Redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';
import { Checkout } from '../Components/Checkout';
import { addOrder } from '../Redux/Products/action';
export const Cart = () => {

    const cart = useSelector((store) => store.projectData.cart);

    const dispatch = useDispatch();

    const removeProduct = (id) => {
        console.log("Remove product from cart", id);

        dispatch(deleteProductCart(id));
    }

    const checkoutHandler = () => {
        dispatch(addOrder(cart));
    }


    return (
        <Box m='auto' w='500px' h='100px' border='1px solid red' fontFamily='"Trade Gothic W01 Light", Arial, sans-serif'>
            <Heading mt='35px' as='h1' fontWeight='200' fontSize='24px' p='0px 0px 15px'>
                Shopping Bag
            </Heading>
            <Box border='1px solid black'></Box>
            {cart.length && cart.map((e) => {
                return (
                     <CartItem 
                     key={e._id} 
                     title={e.productName} 
                     id={e._id}
                     price={e.productPrice} 
                     image={e.productImage}
                     removeProduct={removeProduct}/>
                );
            })}
            
            <Checkout cart={cart} checkoutHandler={checkoutHandler}/>
        </Box>

    )
}


function CartItem({ title, image, price, removeProduct, id}) {
    return (
        <Box border={'1px solid red'} rounded='lg' width={'fit-content'} margin='auto' marginBottom='2rem'>
            <Stack direction={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center'>
                <Box 
              height={'300px'} 
              width='300px' 
              
              position='relative'
              padding='0 1rem'
              _after={{
              transition: 'all .3s ease',
              content: '""',
              w: '80%',
              h: '80%',
              pos: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}>
                <Image
              rounded={'lg'}
              height={300}
              width={300}
              objectFit={'contain'}
              src={image}
            />
                </Box>
                <Box height={'300px'} width='300px'>
                    <Stack p={2}>
                        <Heading as='h3' size='lg'>{title}</Heading>
                        <Box overflow={'hidden'} whiteSpace='nowrap'>
                        </Box>
                        <Text 
                        color={useColorModeValue('gray.500', 'gray.400')}
                        fontSize={'2xl'}
                        fontWeight={'300'}>
                            {price}
                        </Text>
                        <Button variant={'solid'} leftIcon={<DeleteIcon/>} colorScheme='teal' onClick={() => removeProduct(id)}>Remove</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    ) 
}