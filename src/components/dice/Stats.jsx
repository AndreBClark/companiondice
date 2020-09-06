import { h } from 'preact';
import { D6 } from '../dice';
import style from './style';
import { useRoll } from '../../hooks/diceHelpers';

const RollStats = () => {
  const [rollDice, result, isActive] = useRoll();
  return (
    <button
      onClick={rollDice}
      class={`${style.dice} ${isActive && style.active} ${!isActive &&
        style.done}`}>
      <D6 />
      <span class="m-auto text-gray-900 bg-teal-400 z-10">{result || 20}</span>
    </button>
  );
};
export default RollStats;
