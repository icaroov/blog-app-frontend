import { Box, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => (
  <Box as="footer" pt="8">
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      color="white"
      bg={useColorModeValue('gray.800', 'blue.400')}
    >
      <HStack spacing="3">
        <Text fontWeight="medium" marginEnd="2">
          Copyright © 2021
        </Text>
      </HStack>
    </Stack>
  </Box>
)

export default Footer
