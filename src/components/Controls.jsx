import { h } from 'preact';
import { Button } from './Button';
import { useRoll, diceContext } from '../hooks/diceHelpers';
import { useContext } from 'preact/hooks';

const Controls = props => {
  const { amount, increment, decrement, reset } = useContext(diceContext);
  const { reachedLimit, oneOrLess } = useRoll();
  console.log('controls amount:', amount);
  return (
    <div class="px-4 lg:px-0">
      <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
        <div class="w-1/5 md:w-1/4">
          <Button onClick={ decrement} oneOrLess={oneOrLess}>
            -
          </Button>
        </div>
        <span class="w-3/5 md:w-1/2 pt-2 text-center">
          {amount}d{props.sides}
        </span>
        <div class="w-1/5 md:w-1/4">
          <Button
            onClick={increment}
            reachedLimit={reachedLimit}>
            <div>+</div>
          </Button>
        </div>
      </div>
      <div class="text-2xl">
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};
export default Controls;
