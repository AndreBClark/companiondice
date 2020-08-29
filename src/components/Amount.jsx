import { h } from 'preact';
import { Button } from './Button';
import { useAmount } from '../hooks/useAmount';

const Amount = props => {
  const { amount, setAmount, reachedLimit, oneOrLess } = useAmount();
  return (
    <div class="px-4 lg:px-0">
      <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
        <div class="w-1/5 md:w-1/4">
          <Button
            onClick={() => setAmount(amount - 1)}
            oneOrLess={oneOrLess}>
            -
          </Button>
        </div>
        <span class="w-3/5 md:w-1/2 pt-2 text-center">
          {amount}d{props.sides}
        </span>
        <div class="w-1/5 md:w-1/4">
          <Button
            onClick={() => setAmount(amount + 1)}
            reachedLimit={reachedLimit}>
            <div>+</div>
          </Button>
        </div>
      </div>
      <div class="text-2xl">
        <Button onClick={() => setAmount(1)}>Reset</Button>
      </div>
    </div>
  );
};
export default Amount;
