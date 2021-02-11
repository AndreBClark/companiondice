import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { tailwind } from '@/tailwind';
import { theme } from '@/Constants';
import PropTypes from 'prop-types';

const TailwindText = ({
  size = 'lg',
  color = theme.colors.primary,
  weight = 'semibold',
  width = 'full',
  align = 'center',
  children,
  style,
}) => {
  const tw = StyleSheet.create({
    text: {
      color,
      ...tailwind(`text-${size} font-${weight} text-${align} w-${width}`),
    },
  });
  // const fontFamily = { fontFamily: `Inter_400Regular`}
  return (
    <Text
      selectable={false}
      style={[
        style,
        tw.text,
        // fontFamily,
      ]}
    >
      {children}
    </Text>
  );
};

TailwindText.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
};
TailwindText.defaultProps = {
  size: 'lg',
  color: theme.colors.primary,
  weight: 'semibold',
  width: 'full',
  align: 'center',
  style: {},
};
export default TailwindText;
