import { h } from 'preact';
import { useState } from 'preact/hooks';
import { cryptoRandomNumberGen } from '../rng';
import Amount from '../Amount';
import style from './style'

const CurrentDie = props => {
  const [sides, setSides] = useState(props.sides);
  const [result, setResult] = useState(props.sides);
  const [amount, setAmount] = useState(1);
  const [active, isActive] = useState(false);
  const [done, isDone] = useState(true);
  const ticks = 40;
  const speed = 60;
  setSides(props.sides);
  const handleClick = () => {
    isActive(true);
    isDone(false);
    const randomArray = [result];
    for (let i = 0; i < ticks; i++) {
      randomArray.unshift(cryptoRandomNumberGen(amount, amount * sides));
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
    <>
      <button
        onClick={handleClick}
        class={`${style.dice} ${active && style.active} ${done && style.done}`}>
          {props.children}
        <span class="m-auto text-gray-900 bg-teal-400 z-10 rounded-full">
          {result || sides}
        </span>
      </button>
      <Amount amount={amount} sides={sides} setAmount={setAmount} />
    </>
  );
};
export default CurrentDie;
