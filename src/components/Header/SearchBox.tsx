import { useState } from 'react'
import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine as SearchIcon } from 'react-icons/ri'

const SearchBox = () => {
  const [search, setSearch] = useState('')

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxWidth={['300', '700']}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="md"
      alignItems="center"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar..."
        _placeholder={{ color: 'gray.400' }}
        px={['0', '4']}
        mr={['0', '4']}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Icon as={SearchIcon} fontSize="20" ml="2" cursor="pointer" />
    </Flex>
  )
}

export default SearchBox
