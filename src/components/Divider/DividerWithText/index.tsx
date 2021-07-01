import {
  Box,
  Divider,
  Flex,
  FlexProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const DividerWithText = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex align="center" color="gray.300" {...rest}>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>

      <Text
        as="span"
        px="3"
        color={useColorModeValue('gray.100', 'gray.600')}
        fontWeight="medium"
      >
        {children}
      </Text>

      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  )
}

export default DividerWithText
