import { Flex, Icon, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { RiSearchLine as SearchIcon } from 'react-icons/ri'

const SearchBox = () => {
  const [search, setSearch] = useState('')

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={700}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar..."
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Icon as={SearchIcon} fontSize="20" />
    </Flex>
  )
}

export default SearchBox
