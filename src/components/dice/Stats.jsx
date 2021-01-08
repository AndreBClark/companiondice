import React from 'react'
import style from './style';
import { useSpring, animated, config } from 'react-spring';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { useContext } from 'preact/hooks';

const Dicebox = props => {
  const { result, rollDice, isActive, setSides } = useRoll();
  const { amount } = useContext(diceContext);
  setSides(props.sides);

  console.log('dicebox amount:', amount);
  const Spin = useSpring({
    config: config.wobbly,
    transform: isActive ? 'rotate(-30deg)' : 'rotate(0turn)',
  });
  function handleDiceRoll() {
    return rollDice(6, 18);
  }
  return (
    <button
      onClick={handleDiceRoll}
      class={`${style.dice} ${isActive ? style.active : style.done}`}>
      <animated.div style={Spin} class={style.svgWrapper}>
        {props.children}
      </animated.div>
      <span class={style.number}>{result}</span>
    </button>
  );
};
export default Dicebox;
