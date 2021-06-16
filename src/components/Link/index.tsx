import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/system'

const Link = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={useColorModeValue('orange.500', 'orange.200')}
    _hover={{ color: useColorModeValue('orange.600', 'orange.300') }}
    display={{ base: 'block', sm: 'inline' }}
    {...props}
  />
)

export default Link
