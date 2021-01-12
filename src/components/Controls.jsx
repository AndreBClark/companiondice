import React, { useContext } from 'react'
import { Button } from './Button';
import { useRoll, diceContext } from '../hooks/diceHelpers';

const Controls = props => {
  const { amount, increment, decrement, reset } = useContext(diceContext);
  const { reachedLimit, oneOrLess } = useRoll();
  console.log('controls amount:', amount);
  return (
    <View className="px-4 lg:px-0">
      <View className="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
        <View className="w-1/5 md:w-1/4">
          <Button onClick={decrement} oneOrLess={oneOrLess}>
            -
          </Button>
        </View>
        <span className="w-3/5 md:w-1/2 pt-2 text-center">
          {amount}d{props.sides}
        </span>
        <View className="w-1/5 md:w-1/4">
          <Button onClick={increment} reachedLimit={reachedLimit}>
            <View>+</View>
          </Button>
        </View>
      </View>
      <View className="text-2xl">
        <Button onClick={reset}>Reset</Button>
      </View>
    </View>
  );
};
export default Controls;
