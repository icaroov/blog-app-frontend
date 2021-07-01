import { forwardRef, ForwardRefRenderFunction } from 'react'
import {
  Input as ChakraInput,
  InputProps as ChrakraInputProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Flex,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChrakraInputProps {
  name: string
  label?: string
  error?: FieldError
  hasLink?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, hasLink = false, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <Flex justify="space-between">
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        {hasLink && (
          <Box
            color={mode('orange.600', 'orange.200')}
            fontWeight="semibold"
            fontSize="sm"
          >
            Esqueceu a senha?
          </Box>
        )}
      </Flex>

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="orange.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

const Input = forwardRef(InputBase)

export default Input
