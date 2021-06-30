import {
  Menu as ChakraMenu,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  MenuGroup,
  MenuDivider
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiMenuLine } from 'react-icons/ri'

import { SearchBox } from 'components'

const Menu = () => {
  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        aria-label="open navigation menu"
        icon={<Icon as={RiMenuLine} />}
        fontSize="24"
        variant="unstyled"
      />
      <MenuList bgColor="gray.700" border="none" px="3">
        <SearchBox />
        <MenuDivider color="gray.400" />
        <MenuGroup title="Navegação">
          <Link href="/login" passHref>
            <MenuItem as="a" fontSize="lg" _focus={{ bgColor: 'gray.600' }}>
              Login
            </MenuItem>
          </Link>
          <Link href="/register" passHref>
            <MenuItem as="a" fontSize="lg" _focus={{ bgColor: 'gray.600' }}>
              Registrar
            </MenuItem>
          </Link>
        </MenuGroup>
      </MenuList>
    </ChakraMenu>
  )
}

export default Menu
