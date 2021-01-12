import React from 'react'
import { Text } from 'react-native';
import { tailwind } from './tailwind'

const BaseText = props => {
  return (
    <Text {...props}
      style={[tailwind('text-green-400 font-semibold text-center'), props.style]}>
      {props.children}
    </Text>
  )
}

export default BaseText;