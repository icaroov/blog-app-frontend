import { Button, Box, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from './Input'

import PasswordField from './PasswordField'

interface InputValuesData {
  email: string
  password: string
}

const loginSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const { errors } = formState

  const handleLogin: SubmitHandler<InputValuesData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing="6">
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
          {...register('email')}
        />
        <PasswordField {...register('password')} />

        <Button
          type="submit"
          colorScheme="orange"
          size="lg"
          fontSize="md"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Stack>
    </Box>
  )
}

export default LoginForm
