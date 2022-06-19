import {
    Box,
    Stack,
    Text,
    Image,
    Heading,
    Button,
    Center 
  } from '@chakra-ui/react';
  
  export const ProductSample = ({image, title, price, type})  => {
    return (
        <Center py={12}>
        <Box fontFamily={'"TradeGothicLTW05-BoldNo.2", Arial, sans-serif'}>
          <Box>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={image} />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading as='h3' lineHeight='16px' fontSize={'2xl'} fontFamily={'"TradeGothicLTW05-BoldNo.2", Arial, sans-serif'} fontWeight={500}>
              {title}
            </Heading>
            <Text lineHeight='14px' as='h4'>{type}</Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontSize={'xl'} color='red' lineHeight='17px'>
              ${price}
              </Text>
            </Stack>
            <Button colorScheme='blue' w='245px' h='35px' borderRadius='none'>ADD TO BAG</Button>
          </Stack>
        </Box>
      </Center>
    );
  } 