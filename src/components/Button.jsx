import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import TailwindText from '@/TailwindText';
import { tailwind } from '@/tailwind';
import PropTypes from 'prop-types';
import { theme } from './Constants';

const tw = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    ...tailwind('font-bold m-2 rounded-md py-2 flex-1'),
  },
  disabled: {
    backgroundColor: theme.colors.disabled,
  },
  hpButton: tailwind('flex-1 mx-8 rounded-lg'),
});

export const Button = ({
  children,
  onPress,
  reachedLimit,
  oneOrLess,
  Label,
}) => (
  <Pressable
    onPress={onPress}
    disabled={reachedLimit || oneOrLess}
    style={[
      tw.button,
      (oneOrLess || reachedLimit) && tw.disabled,
    ]}
  >
    {Label && (
    <TailwindText
      color={theme.colors.background}
      weight="bold"
      size="4xl"
    >
      {Label}
    </TailwindText>
    )}
    {children}
  </Pressable>
);

export const HPButton = ({
  children,
  onPress,
  Label,
}) => (
  <Button
    onPress={onPress}
    Label={Label}
    style={[tw.button, tw.hpButton]}
  >
    {children}
  </Button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  reachedLimit: PropTypes.bool,
  oneOrLess: PropTypes.bool,
  Label: PropTypes.string,
};
Button.defaultProps = {
  reachedLimit: false,
  oneOrLess: false,
  Label: '+',
};

HPButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  Label: PropTypes.string,
};
HPButton.defaultProps = {
  Label: '+',
};
