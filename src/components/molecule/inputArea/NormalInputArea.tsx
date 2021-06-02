import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import React, { memo } from 'react'

type Prop = {
  label:string
  errorMessage?: string
  placeholder: string
  name: string
  type: string
  registers?: any
  readonly?:boolean
}

export const NormalInputArea:React.VFC<Prop> = memo((props) => {
  return (
    <FormControl id={props.name} w="min(400px, 80vw)">
    <FormLabel m="1">
      <Text display="inline" fontSize="13px" fontWeight="bold">
       {props.label}
      </Text>
    </FormLabel>
    <Input
      {...props.registers}
      placeholder={props.placeholder}
      label={props.label}
      type={props.type}
      readOnly={props.readonly}
    />
    <Text color="red.500" fontSize="14px">
      {props.errorMessage}
    </Text>
  </FormControl>
  )
})
