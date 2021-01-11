import React from 'react';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';

const Anchor = props => {
  const _handlePress = () => {
    Linking.openURL(props.href);
    props.onPress && props.onPress();
  };
  return (
    <Text {...props} onPress={_handlePress}>
      {props.children}
    </Text>
  );
}
export default Anchor;