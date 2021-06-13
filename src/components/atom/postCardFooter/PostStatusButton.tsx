import { Text } from '@chakra-ui/layout'
import React, { memo } from 'react'

type Prop = {
  onClick?:() => void
  text?: string
  isDisable?:boolean
}

export const PostStatusButton:React.VFC<Prop> = memo((props) => {
  const {onClick, text, isDisable} = props
  return (
    <Text
    fontSize="md"
    bg="blue.300"
    borderRadius="15px"
    _hover={{ cursor: "pointer", bg: "blue.500" }}
    color="white"
    py="1"
    px="5"
    fontWeight="bold"
    onClick={onClick}
    disabled={isDisable}
  >
    {text}
  </Text>
  )
})
