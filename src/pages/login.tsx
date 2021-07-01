import { useState } from 'react'
import Head from 'next/head'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaSms } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  Card,
  Link,
  LoginForm,
  DividerWithText,
  ButtonWithTooltip
} from 'components'

const Login = () => {
  const [isEmail, setIsEmail] = useState(true)

  return (
    <Box py="12">
      <Head>
        <title>Login | blogger.</title>
      </Head>

      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Faça login com sua conta
        </Heading>

        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Não possui uma conta?</Text>
          <Link href="/register">Registre-se agora</Link>
        </Text>

        <Card>
          <LoginForm isLoginWithEmail={isEmail} />

          <DividerWithText mt="6">ou continue com</DividerWithText>

          <SimpleGrid mt="6" columns={3} spacing="3">
            <ButtonWithTooltip
              label="Facebook"
              hoverColor="blue.500"
              aria-label="Login com Facebook"
              icon={<FaFacebook size={35} />}
            />

            <ButtonWithTooltip
              label="Google"
              hoverColor="red.500"
              aria-label="Login com Google"
              icon={<FaGoogle size={35} />}
            />

            <ButtonWithTooltip
              disabled={true} // TODO: habilitar login e registro com sms
              label={isEmail ? 'Número de telefone' : 'E-mail'}
              hoverColor="green.400"
              aria-label="Login com número de telefone"
              icon={isEmail ? <FaSms size={35} /> : <MdEmail size={35} />}
              onClick={() => setIsEmail(!isEmail)}
            />
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  )
}

export default Login
