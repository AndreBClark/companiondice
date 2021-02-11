import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import useRoll from 'hooks/useRoll';
import { Button } from '@/Button';
import { tailwind } from '@/tailwind';
import TailwindText from '@/TailwindText';
import PropTypes from 'prop-types';

const tw = StyleSheet.create({
  controls: tailwind('px-4 w-full mx-auto max-w-2xl mb-24'),
  row: tailwind('justify-between flex-row'),
  buttonColumn: tailwind('w-1/5'),
  diceIndicator: tailwind('w-3/5 pt-2'),
});

const Controls = ({
  setAmount,
  amount,
  sides,
}) => {
  const {
    reachedLimit, oneOrLess, setReachedLimit, setOneOrLess,
  } = useRoll();
  const incrementAmount = () => {
    setAmount(amount + 1);
  };
  const decrementAmount = () => {
    setAmount(amount - 1);
  };
  const resetAmount = () => {
    setAmount(1);
  };
  useEffect(() => {
    setReachedLimit(amount >= 40);
    setOneOrLess(amount <= 1);
  }, [amount, sides]);
  return (
    <View style={tw.controls}>
      <View style={tw.row}>
        <View style={tw.buttonColumn}>
          <Button
            onPress={decrementAmount}
            oneOrLess={oneOrLess}
            Label="-"
          />
        </View>
        <TailwindText style={tw.diceIndicator} width="1/2" weight="bold" size="5xl">
          {amount}
          d
          {sides}
        </TailwindText>
        <View style={tw.buttonColumn}>
          <Button
            onPress={incrementAmount}
            reachedLimit={reachedLimit}
            Label="+"
          />
        </View>
      </View>
      <View style={tw.row}>
        <Button
          onPress={resetAmount}
          Label="Reset"
          size="2xl"
        />
      </View>
    </View>
  );
};

Controls.propTypes = {
  setAmount: PropTypes.func,
  amount: PropTypes.number,
  sides: PropTypes.number,
};
Controls.defaultProps = {
  setAmount: () => {},
  amount: 1,
  sides: 20,
};

export default Controls;
