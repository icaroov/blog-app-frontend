import {
  Flex,
  useBreakpointValue,
  IconButton,
  Icon,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiMenuLine } from 'react-icons/ri'
// import { useSidebarDrawer } from '../../hooks/SidebarDrawer'

import Logo from './Logo'
// import Profile from './Profile'
import SearchBox from './SearchBox'

const Header = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  // const { onOpen } = useSidebarDrawer()

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
    >
      {!isWideScreen && (
        <IconButton
          aria-label="open navigation menu"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
        />
      )}

      <Logo />

      {isWideScreen && <SearchBox />}

      <Flex align="center" ml="auto">
        {/* <Profile showProfileData={isWideScreen} /> */}
        <Link href="/login" passHref>
          <Button as="a" colorScheme="orange" size="lg">
            Login
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header
