import Head from 'next/head'
import { Box, Heading, Text } from '@chakra-ui/react'

import { Card, Link, RegisterForm } from 'components'

const Register = () => (
  <Box py="12">
    <Head>
      <title>Registre-se | blogger.</title>
    </Head>

    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Registre-se no Blogger
      </Heading>

      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Já possui uma conta?</Text>
        <Link href="/login">Faça seu login</Link>
      </Text>

      <Card>
        <RegisterForm />
      </Card>
    </Box>
  </Box>
)

export default Register
