import { h } from 'preact';
import { useState } from 'preact/hooks';
import { cryptoRandomNumberGen } from '../rng';
import Amount from '../Amount';
import style from './style'
import { useSpring, animated, config } from 'react-spring';

const CurrentDie = props => {
  const [sides, setSides] = useState(Number(props.sides));
  setSides(props.sides);
  const [result, setResult] = useState(Number(sides));
  const [amount, setAmount] = useState(1);
  const [isActive, setActive] = useState(false);
  const ticks = 30;
  const randomArray = [];
  const handleClick = () => {
    setActive(true);
    for (let i = 0; i < ticks; i++) {
      randomArray.unshift(cryptoRandomNumberGen(amount, amount * sides));
    }
    console.log(randomArray);
    const lastRollresult = result;
    console.log(lastRollresult);
    requestAnimationFrame(cycleNumbers);
  };
  const cycleNumbers = () =>
    requestAnimationFrame(() => {
      if (randomArray.length !== 1) {
        setResult(randomArray.shift());
        requestAnimationFrame(cycleNumbers);
      }
      cancelAnimationFrame(cycleNumbers);
      setActive(false);
    });

  const Spin = useSpring({
    config: config.wobbly,
    transform: isActive ? `rotate(${-15}deg)` : 'rotate(0turn)',
  });
  return (
    <>
      <button
        onClick={handleClick}
        class={`${style.dice} ${isActive ? style.active : style.done}`}>
          <animated.div style={Spin} class={style.svgWrapper}>
            {props.children}
          </animated.div>
        <span class={style.number}>
          {result}
        </span>
      </button>
      <Amount amount={amount} sides={sides} setAmount={setAmount} />
    </>
  );
};
export default CurrentDie;
