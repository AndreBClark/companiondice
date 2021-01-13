import React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import BaseText from './BaseText';
import { tailwind } from './tailwind';
export const Button = ({ children, ...props }) => {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.reachedLimit || props.oneOrLess}
      style={[styles.button, (props.oneOrLess || props.reachedLimit) && styles.disabled
      ]} 
      >
      {props.Label && <BaseText>{props.Label}</BaseText>}
      {children && children}
    </Pressable>
  );
};

export const HPButton = ({ children, ...props }) => {
  return (
    <Button
      onPress={props.onPress}
      Label={props.Label}
      style={styles.hpButton}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: tailwind(`w-full font-bold mx-auto bg-green-600 text-purple-800 my-2 rounded-md py-2`),
  disabled: tailwind(`bg-green-900 `),
  hpButton: tailwind(`w-full font-bold bg-green-600 text-purple-800 rounded-lg py-2`)
})