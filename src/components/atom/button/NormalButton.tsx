import { Button } from '@chakra-ui/button'
import React from 'react'

type Prop = {
  borderColor?:string
  color:string
  bg:string
  text:string
  hover:{bg:string, color?:string}
  onClick?: () => void
}

export const NormalButton:React.VFC<Prop> = (props) => {
  const {text, hover, onClick, ...inputProps} = props
  return (
    <Button
    {...inputProps}
    _hover={hover}
    fontSize={{base:"14px"}}
    border="1px"
    borderRadius="15px"
    p={{base:"3", md:"5"}}
    onClick={onClick}
  >
    {text}
  </Button>
  )
}
