import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import TailwindText from '@/TailwindText';
import { tailwind } from '@/tailwind';
import { theme } from './Constants';

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
        <TailwindText
          color={theme.colors.background} 
          weight="bold"
          size="4xl">
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
  button: {
    backgroundColor: theme.colors.primary,
    ...tailwind(`font-bold m-2 rounded-md py-2 flex-1`),
  },
  disabled: {
    backgroundColor: theme.colors.disabled,
  },
  hpButton: tailwind(`flex-1 mx-8 rounded-lg`),
});
