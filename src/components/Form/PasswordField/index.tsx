import { forwardRef, ForwardRefRenderFunction, useRef, useState } from 'react'
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
  FormErrorMessage,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

import { Link } from 'components'

interface PasswordFieldProps extends InputProps {
  formId?: string
  label?: string
  isLogin?: boolean
  error?: FieldError
}

const PasswordFieldBase: ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordFieldProps
> = ({ name, label, isLogin = false, error = null, formId, ...rest }, ref) => {
  const { onToggle } = useDisclosure()
  const [show, setShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const mergeRef = useMergeRefs(inputRef, ref)

  const onClickReveal = () => {
    onToggle()
    setShow(!show)
  }

  return (
    <FormControl id={formId} isInvalid={!!error}>
      <Flex justify="space-between">
        {!!label && <FormLabel>{label}</FormLabel>}

        {isLogin && (
          <Box
            color={mode('orange.600', 'orange.200')}
            fontWeight="semibold"
            fontSize="sm"
          >
            <Link href="/forgot-password">Esqueceu a senha?</Link>
          </Box>
        )}
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
          name={name}
          type={show ? 'text' : 'password'}
          autoComplete="current-password"
          focusBorderColor="orange.500"
          bgColor="gray.900"
          _hover={{ bgColor: 'gray.900' }}
          variant="filled"
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

const PasswordField = forwardRef(PasswordFieldBase)

export default PasswordField
