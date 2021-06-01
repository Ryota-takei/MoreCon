import { Box, Flex, Heading, HStack } from '@chakra-ui/layout'
import React, { memo } from 'react'
import { NormalButton } from '../../atom/NormalButton'

export const Header:React.VFC = memo(() => {
  return (
    <Box h="80px" boxShadow="md">
    <Flex
      w={{ base: "95%", md: "90%" }}
      mx="auto"
      justifyContent="space-between"
    >
      <Box>
        <Heading as="h1" fontWeight="bold" size="xl" lineHeight="80px">
          MoreCon
        </Heading>
      </Box>
      <HStack spacing="2">
        <NormalButton
          hover={{ bg: "blue.500" }}
          text="新規登録"
          bg="blue.300"
          color="white"
        />
        <NormalButton
          hover={{ bg: "blue.300", color: "white" }}
          text="ログイン"
          borderColor="blue.200"
          bg="white"
          color="blue.200"
        />
      </HStack>
    </Flex>
  </Box>
  )
})
