import { forwardRef, ForwardRefRenderFunction, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { useState } from 'react'

const PasswordFieldBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const { onToggle } = useDisclosure()
  const [show, setShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const mergeRef = useMergeRefs(inputRef, ref)

  const onClickReveal = () => {
    onToggle()
    setShow(!show)
  }

  return (
    <FormControl id="password">
      <Flex justify="space-between">
        <FormLabel>Senha</FormLabel>

        <Box
          as="a"
          color={mode('orange.600', 'orange.200')}
          fontWeight="semibold"
          fontSize="sm"
        >
          Esqueceu a senha?
        </Box>
      </Flex>

      <InputGroup>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={show ? 'Mask password' : 'Reveal password'}
            icon={show ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>

        <Input
          ref={mergeRef}
          name="password"
          type={show ? 'text' : 'password'}
          autoComplete="current-password"
          focusBorderColor="orange.500"
          bgColor="gray.900"
          _hover={{ bgColor: 'gray.900' }}
          variant="filled"
          {...props}
        />
      </InputGroup>
    </FormControl>
  )
}

const PasswordField = forwardRef(PasswordFieldBase)

export default PasswordField
