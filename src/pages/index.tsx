import Head from 'next/head'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaSms } from 'react-icons/fa'

import {
  Card,
  LoginForm,
  DividerWithText,
  Link,
  ButtonWithIcon
} from 'components'

const Home = () => (
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
        <Link href="#">Registre-se agora</Link>
      </Text>

      <Card>
        <LoginForm />

        <DividerWithText mt="6">ou continue com</DividerWithText>

        <SimpleGrid mt="6" columns={3} spacing="3">
          <ButtonWithIcon hiddenText="Login with Facebook" color="blue.500">
            <FaFacebook size={35} />
          </ButtonWithIcon>

          <ButtonWithIcon hiddenText="Login with Google" color="red.500">
            <FaGoogle size={35} />
          </ButtonWithIcon>

          <ButtonWithIcon hiddenText="Login with SMS" color="green.300">
            <FaSms size={35} />
          </ButtonWithIcon>
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
)

export default Home
