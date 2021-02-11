import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useDiceSides } from 'hooks/useDiceSides';
import { theme } from '@/Constants';

const tw = StyleSheet.create({
  FabGroup: {
    backgroundColor: theme.colors.primary,
  },
  actions: {
    backgroundColor: theme.colors.card,
    color: theme.colors.primary,
  },
});

const FabGroup = () => {
  const [useSidesState, useSidesDispatch] = useDiceSides();
  const [isVisible] = useState(true);
  const { sides } = useSidesState;
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => {
    setState({ open });
  };
  const { open } = state;
  return (
    <FAB.Group
      open={open}
      visible={isVisible}
      color={theme.colors.card}
      style={tw.Fab}
      fabStyle={tw.FabGroup}
      icon={open ? `dice-d${sides}-outline` : `dice-d${sides}`}
      theme={theme}
      actions={[
        {
          icon: 'dice-d4',
          label: 'D4',
          color: theme.colors.primary,
          onPress: () => useSidesDispatch({ type: 'd4' }),
          style: tw.actions,
          small: false,

        },
        {
          icon: 'dice-d6',
          label: 'D6',
          color: theme.colors.primary,
          onPress: () => useSidesDispatch({ type: 'd6' }),
          style: tw.actions,
          small: false,
        },
        {
          icon: 'dice-d8',
          label: 'D8',
          color: theme.colors.primary,
          onPress: () => useSidesDispatch({ type: 'd8' }),
          style: tw.actions,
          small: false,
        },
        {
          icon: 'dice-d10',
          label: 'D10',
          color: theme.colors.primary,
          onPress: () => useSidesDispatch({ type: 'd10' }),
          style: tw.actions,
          small: false,
        },
        {
          icon: 'dice-d12',
          label: 'D12',
          color: theme.colors.primary,
          onPress: () => useSidesDispatch({ type: 'd12' }),
          style: tw.actions,
          small: false,
        },
        {
          icon: 'dice-d20',
          label: 'D20',
          color: theme.colors.primary,
          style: tw.actions,
          onPress: () => useSidesDispatch({ type: 'd20' }),
          small: false,
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default FabGroup;
