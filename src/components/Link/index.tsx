import NextLink from 'next/link'
import { Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'

interface LinkProps {
  children: React.ReactNode
  href?: string
}

const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href} passHref>
    <Text
      as="a"
      marginStart="1"
      href="#"
      color={useColorModeValue('orange.500', 'orange.200')}
      _hover={{ color: useColorModeValue('orange.600', 'orange.300') }}
      display={{ base: 'block', sm: 'inline' }}
    >
      {children}
    </Text>
  </NextLink>
)

export default Link
