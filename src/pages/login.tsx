import Head from 'next/head'
import { Box, Heading, SimpleGrid, Text, IconButton } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaSms } from 'react-icons/fa'

import { Card, Link, LoginForm, DividerWithText } from 'components'

const Login = () => (
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
        <LoginForm />

        <DividerWithText mt="6">ou continue com</DividerWithText>

        <SimpleGrid mt="6" columns={3} spacing="3">
          <IconButton
            _hover={{ color: 'blue.500' }}
            variant="outline"
            aria-label="Login with Facebook"
            icon={<FaFacebook size={35} />}
          />

          <IconButton
            _hover={{ color: 'red.500' }}
            variant="outline"
            aria-label="Login with Google"
            icon={<FaGoogle size={35} />}
          />

          <IconButton
            _hover={{ color: 'green.400' }}
            variant="outline"
            aria-label="Login with SMS"
            icon={<FaSms size={35} />}
          />
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
)

export default Login
