import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      <Link href="/" passHref>
        <a>blogger</a>
      </Link>
      <Text as="span" ml="1" color="orange.500">
        .
      </Text>
    </Text>
  )
}

export default Logo
