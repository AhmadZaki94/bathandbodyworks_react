import { Box,
    Text, 
    VStack,
    Heading,
   } 
    from '@chakra-ui/react';
export const Sidebar = () => {

    return (
        <Box border={'1px solid white'} fontFamily="Trade Gothic W01 Light, Arial,sans-serif">
            <Box display={{base: 'inherit', md: 'inherit'}} p='1rem 2rem'>
                <Heading as='h3' fontSize='15px' color='#333333' fontWeight='600' lineHeight='35px'>TOP OFFERS</Heading>
                <Box lineHeight='35px'>
                    <VStack alignItems={'baseline'}>
                        <Text fontSize='14px' color='#767676'>$5.50 Select Men's Body Care</Text>
                        <Text fontSize='14px' color='#767676'>$4.95 Select Body Care</Text>
                        <Text fontSize='14px' color='#767676'>All Sale Body Care</Text>
                    </VStack>
                </Box>
            </Box>
            <Box display={{base: 'inherit', md: 'inherit'}} p='1rem 2rem'>
                <Heading as='h3' fontSize='15px' color='#333333' fontWeight='600' lineHeight='35px'>BATH & SHOWER</Heading>
                <Box lineHeight='35px'>
                    <VStack alignItems={'baseline'}>
                        <Text fontSize='14px' color='#767676'>All Bath & Shower</Text>
                        <Text fontSize='14px' color='#767676'>Body Wash & Shower Gel</Text>
                        <Text fontSize='14px' color='#767676'>Bubble Bath</Text>
                        <Text fontSize='14px' color='#767676'>Body Scrub</Text>
                        <Text fontSize='14px' color='#767676'>Bar Soap</Text>
                        <Text fontSize='14px' color='#767676'>Bath Accessories</Text>
                    </VStack>
                </Box>
            </Box>
            <Box display={{base: 'inherit', md: 'inherit'}} p='1rem 2rem'>
                <Heading as='h3' fontSize='15px' color='#333333' fontWeight='600' lineHeight='35px'>MOISTURIZERS</Heading>
                <Box lineHeight='35px'>
                    <VStack alignItems={'baseline'}>
                        <Text fontSize='14px' color='#767676'>All Moisturizers</Text>
                        <Text fontSize='14px' color='#767676'>Body Lotion</Text>
                        <Text fontSize='14px' color='#767676'>Body Cream</Text>
                        <Text fontSize='14px' color='#767676'>Hand Cream</Text>
                        <Text fontSize='14px' color='#767676'>Lip Gloss & Balms</Text>
                    </VStack>
                </Box>
            </Box>
            <Box display={{base: 'inherit', md: 'inherit'}} p='1rem 2rem'>
                <Heading as='h3' fontSize='15px' color='#333333' fontWeight='600' lineHeight='35px'>FRAGRANCE</Heading>
                <Box lineHeight='35px'>
                    <VStack alignItems={'baseline'}>
                        <Text fontSize='14px' color='#767676'>All Fragrance</Text>
                        <Text fontSize='14px' color='#767676'>Body Sprays & Mists</Text>
                        <Text fontSize='14px' color='#767676'>Perfume & Cologne</Text>
                    </VStack>
                </Box>
            </Box>
            <Box display={{base: 'inherit', md: 'inherit'}} p='1rem 2rem'>
                <Heading as='h3' fontSize='15px' color='#333333' fontWeight='600' lineHeight='35px'>AROMATHERAPY</Heading>
                <Box lineHeight='35px'>
                    <VStack alignItems={'baseline'}>
                        <Text fontSize='14px' color='#767676'>All Aromatherapy</Text>
                        <Text fontSize='14px' color='#767676'>Body Wash & Shower Gel</Text>
                        <Text fontSize='14px' color='#767676'>Moisturizers</Text>
                        <Text fontSize='14px' color='#767676'>Mists & Sprays</Text>
                    </VStack>
                </Box>
            </Box>
            <Box display={{base: 'inherit', md: 'inherit'}} p='1rem 2rem'>
                <Heading as='h3' fontSize='15px' color='#333333' fontWeight='600' lineHeight='35px'>Featured</Heading>
                <Box lineHeight='35px'>
                    <VStack alignItems={'baseline'}>
                        <Text fontSize='14px' color='#767676'>Retired Fragrance</Text>
                        <Text fontSize='14px' color='#767676'>Travel Size</Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}