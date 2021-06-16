import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('gray.800', 'gray.100')}
    py="8"
    px={{ base: '4', md: '10' }}
    shadow="base"
    rounded={{ sm: 'lg' }}
    {...props}
  />
)

export default Card
