import { Flex, useBreakpointValue, Button } from '@chakra-ui/react'
import Link from 'next/link'

import { Menu, SearchBox, Logo } from 'components'

const Header = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      maxWidth={1480}
      width="100%"
      height="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justifyContent={{ base: 'space-between' }}
    >
      {!isWideScreen && (
        <>
          <Logo />
          <Menu />
        </>
      )}

      {isWideScreen && (
        <>
          <Logo />
          <SearchBox />
          <Flex align="center">
            <Link href="/login" passHref>
              <Button as="a" colorScheme="orange" size="lg">
                Login
              </Button>
            </Link>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Header
