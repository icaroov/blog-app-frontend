import { Button, Box, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { PasswordField, Input } from 'components'

interface InputValuesData {
  name: string
  email: string
  password: string
  confirmation_password: string
}

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Senha com no mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const { errors } = formState

  const handleRegister: SubmitHandler<InputValuesData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleRegister)}>
      <Stack spacing="6">
        <Input
          label="Nome"
          name="name"
          type="name"
          autoComplete="name"
          error={errors.name}
          {...register('name')}
        />

        <Input
          label="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
          {...register('email')}
        />

        <PasswordField
          formId="password"
          name="password"
          label="Senha"
          error={errors.password}
          {...register('password')}
        />
        <PasswordField
          formId="password_confirmation"
          name="password_confirmation"
          label="Confirme sua senha"
          error={errors.password_confirmation}
          {...register('password_confirmation')}
        />

        <Button
          type="submit"
          colorScheme="orange"
          size="lg"
          fontSize="md"
          isLoading={formState.isSubmitting}
        >
          Criar conta
        </Button>
      </Stack>
    </Box>
  )
}

export default RegisterForm
