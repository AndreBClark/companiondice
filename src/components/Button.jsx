import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import TailwindText from '@/TailwindText';
import { tailwind } from '@/tailwind';

export const Button = ({ children, ...props }) => {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.reachedLimit || props.oneOrLess}
      style={[
        styles.button,
        (props.oneOrLess || props.reachedLimit) && styles.disabled,
      ]}>
      {props.Label && (
        <TailwindText color="purple-800" weight="bold" size="4xl">
          {props.Label}
        </TailwindText>
      )}
      {children && children}
    </Pressable>
  );
};

export const HPButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      onPress={props.onPress}
      Label={props.Label}
      style={[styles.button, styles.hpButton]}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: tailwind(`font-bold bg-green-400 m-2 rounded-md py-2 flex-1`),
  disabled: tailwind(`bg-green-900`),
  hpButton: tailwind(`flex-1 mx-8 rounded-lg`),
});
