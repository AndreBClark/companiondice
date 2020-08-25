import { h } from 'preact';
import { useState } from 'preact/hooks';
import { D6 } from '../dice';
import { cryptoRandomNumberGen } from '../rng';
import style from './style';

const RollStats = props => {
  const [sides, setSides] = useState(props.sides);
  const [result, setResult] = useState(props.sides);
  const [active, isActive] = useState(false);
  const [done, isDone] = useState(true);
  const ticks = 40;
  const speed = 60;
  const handleClick = () => {
    isActive(true);
    isDone(false);
    const randomArray = [result];
    for (let i = 0; i < ticks; i++) {
      randomArray.unshift(cryptoRandomNumberGen(6, 18));
    }
    let displayRefresh = 0;
    let interval = setInterval(() => {
      setResult(randomArray.shift());
      if (++displayRefresh === ticks) {
        window.clearInterval(interval);
        isActive(false);
        isDone(true);
      }
    }, speed);
  };
  return (
      <button
        onClick={handleClick}
      class={`${style.dice} ${active && style.active} ${done && style.done}`}>
        <D6 />
        <span class="m-auto text-gray-900 bg-teal-400 z-10">{result || 20}</span>
      </button>
  );
};
export default RollStats;
