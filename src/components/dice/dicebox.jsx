import { h } from 'preact';
import style from './style';
import { useSpring, animated, config } from 'react-spring';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { useContext, useEffect } from 'preact/hooks';

const Dicebox = ({children, ...props}) => {
  const { result, rollDice, isActive, setSides, setResult, sides } = useRoll();
  useEffect(() => setResult(sides), [sides, setResult]);
  setSides(props.sides);
  const { amount } = useContext(diceContext);
  console.log('dicebox amount:', amount);
  const Spin = useSpring({
    config: config.wobbly,
    transform: isActive ? 'rotate(-30deg)' : 'rotate(0turn)',
  });
  function handleDiceRoll() {
    return rollDice(amount, amount * sides);
  }
  return (
    <button
      onClick={handleDiceRoll}
      class={`${style.dice} ${isActive ? style.active : style.done}`}>
      <animated.div style={Spin} class={style.svgWrapper}>
        {children}
      </animated.div>
      <span class={style.number}>{result}</span>
    </button>
  );
};
export default Dicebox;
