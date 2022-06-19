import { Box, Divider, Heading, Image, Text, Flex, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addProductCart, getSingleProduct } from '../Redux/Products/action';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


export const Product = () => {

    const [count, setCount] = useState(1);

    const handleChange = (value) => {
        
            setCount(count + value);
    }
    const { id } = useParams();
    // console.log(params);
    const dispatch = useDispatch();
    const currentProduct = useSelector((store) => store.projectData.currentProduct);

    useEffect(() => {
        if(id) {
            dispatch(getSingleProduct(id))
        }
    },[dispatch, id]);
    // console.log(currentProduct);

    const addToCartHandler = () => {
        currentProduct && dispatch(addProductCart(currentProduct));
    }

    let discount = currentProduct.productPrice - ((currentProduct.productPrice) * 0.1);

    return (
        <Box fontFamily="Trade Gothic W01 Light, Arial,sans-serif" display='flex' border='1px solid white' w='930px' h='750px' m='auto' mt='25px' justifyContent='center'>
            <Box border='1px solid white' w='400px' h='500px' mt='25px'>
                <Image w='350px' h='471px' src={currentProduct.productImage}></Image>
            </Box>
            <Box border='1px solid white' w='400px' h='500px' mt='25px'>
                <Heading as='h1' fontSize='18px' m='1px 0px -4px' lineHeight='21px' fontWeight='200' textTransform={'uppercase'}>{currentProduct.productName}</Heading>
                <Text fontSize='14px' mt='15px'  p='0px 0px 4.37px' color='#666666'>{currentProduct.productType}</Text>
                <Text mt='15px'>{Rating({ rating: Number(currentProduct?.productRating)})}</Text>
                <Flex mt='15px'>
                    <Text textDecoration='line-through'>${currentProduct.productPrice}</Text>
                    <Text color='red' ml='5px'> Now ${discount}</Text>
                </Flex>
                <Text p='0px 0px 14px' fontSize='14px' mt='15px' color='#666666'>{currentProduct.productQuantity}</Text>
                <Divider orientation='horizontal' />
                <Flex mt='25px'>
                    <Button onClick={() => {
                        if(count > 1) return handleChange(-1);
                    }} w='35px' h='35px' borderRadius='none' bg='#f2f2f2'>-</Button>
                    <Text w='35px' textAlign='center' h='35px' p='5px' borderRadius='none' bg='#f2f2f2'>{count}</Text>
                    <Button onClick={() =>handleChange(1)} w='35px' h='35px' borderRadius='none' bg='#f2f2f2'>+</Button>
                    <Button 
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={addToCartHandler}
                        w='130px' 
                        h='35px' 
                        p='0px 13.75px' 
                        colorScheme='blue' 
                        borderRadius='none'
                        >ADD TO BAG</Button>
                </Flex>
            </Box>
        </Box>
    )
} 

function Rating({ rating }) {
    return (
      <Box display='flex'>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                //   style={{ marginLeft: '1' }}
                  color={'#f0d520'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf color={'#f0d520'} key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
      </Box>
    );
  }