import { Flex, Box } from '@chakra-ui/react'

import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex width="100%" maxWidth={1480} my="6" mx="auto" px={['4', '6', '8']}>
        <Box as="main" flex="1">
          {children}
        </Box>
      </Flex>

      <Footer />
    </Flex>
  )
}

export default Layout
