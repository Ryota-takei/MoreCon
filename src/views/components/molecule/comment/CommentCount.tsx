import  { memo } from 'react'
import { HStack, Text } from '@chakra-ui/layout'

type Prop = {
  commentCount: number
}

export const CommentCount:React.VFC<Prop> = memo((props) => {
  const {commentCount} = props
  
  return (
    <HStack spacing="0">
    <Text>{commentCount}</Text>
    <Text fontSize="xs">コメント</Text>
  </HStack>
  )
})
