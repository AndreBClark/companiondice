import { h } from 'preact';
import style from './style';
import { useSpring, animated, config } from 'react-spring';
import { useRoll } from '../../hooks/diceHelpers';

const Dicebox = props => {
  const { sides, amount, result, setAmount, rollDice, isActive, setSides } = useRoll();
  setSides(props.sides);
console.log(props.sides);
  const Spin = useSpring({
    config: config.wobbly,
    transform: isActive ? 'rotate(-15}deg)' : 'rotate(0turn)',
  });
  return (
    <>
      <button
        onClick={rollDice}
        class={`${style.dice} ${isActive ? style.active : style.done}`}>
        <animated.div style={Spin} class={style.svgWrapper}>
          {props.children}
        </animated.div>
        <span class={style.number}>{result}</span>
      </button>
    </>
  );
};
export default Dicebox;
