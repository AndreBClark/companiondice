import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { tailwind } from '@/tailwind';
import { theme } from '@/Constants'


const TailwindText = ({
  size = 'lg',
  color = theme.colors.primary,
  weight = 'semibold',
  width = 'full',
  align = 'center',
  ...props
}) => {
  const tw = StyleSheet.create({
    text: {
      color: color,
      ...tailwind(`text-${size} font-${weight} text-${align} w-${width}`),
    }
  })
  // const fontFamily = { fontFamily: `Inter_400Regular`}
    return (
      <Text
      {...props}
      selectable={false}
      style={[
        props.style,
        tw.text,
        // fontFamily,
      ]}>
      {props.children}
    </Text>
  );
};
export default TailwindText;
