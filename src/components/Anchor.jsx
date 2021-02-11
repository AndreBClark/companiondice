import React from 'react';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';
import PropTypes from 'prop-types';

const Anchor = ({
  href = '',
  onPress,
  children,
  style = {},
}) => {
  const handlePress = () => {
    Linking.openURL(href);
    onPress();
  };
  return (
    <Text style={style} onPress={handlePress}>
      {children}
    </Text>
  );
};
export default Anchor;

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf,
};

Anchor.defaultProps = {
  style: {},
  onPress: () => {},
};
