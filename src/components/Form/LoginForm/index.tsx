import { Button, Box, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { PasswordField, Input } from 'components'
import { schema } from './validation'

interface InputValuesData {
  email: string
  phoneNumber?: string
  password: string
}

interface LoginFormProps {
  isLoginWithEmail?: boolean
}

const LoginForm = ({ isLoginWithEmail }: LoginFormProps) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const { errors } = formState

  const handleLogin: SubmitHandler<InputValuesData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(values)
    reset()
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing="6">
        {isLoginWithEmail ? (
          <Input
            label="E-mail"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="exemplo@exemplo.com"
            error={errors.email}
            {...register('email')}
          />
        ) : (
          <Input
            label="Número de telefone"
            name="phoneNumber"
            type="text"
            placeholder="+11 (00) 0000 0000"
            error={errors.phoneNumber}
            {...register('phoneNumber')}
          />
        )}
        <PasswordField
          formId="password"
          name="password"
          label="Senha"
          error={errors.password}
          isLogin={true}
          {...register('password')}
        />

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
