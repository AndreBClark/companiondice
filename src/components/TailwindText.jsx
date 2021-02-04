import React from 'react';
import { Text } from 'react-native';
import { tailwind } from '@/tailwind';


const TailwindText = props => {
  const getStyleString = (obj = {}) =>
    Object.values(obj)
      .join(' ')
      .toString();
  const tw = {
    size: `text-${props.size || 'lg'}`,
    weight: `font-${props.weight || 'semibold'}`,
    color: `text-${props.color || 'green-400'}`,
    align: `text-${props.align || 'center'}`,
  };
  const fontFamily = { fontFamily: `Inter_400Regular`}
    return (
      <Text
      {...props}
      selectable={false}
      style={[
        tailwind(getStyleString(tw)),
        fontFamily,
        props.style, 
      ]}>
      {props.children}
    </Text>
  );
};

export default TailwindText;
