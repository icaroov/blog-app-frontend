import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Icaro Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            icarovinici@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Icaro Oliveira" bgColor="gray.500" />
    </Flex>
  )
}

export default Profile
