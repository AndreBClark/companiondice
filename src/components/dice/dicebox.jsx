import React, { useContext, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

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
    <Pressable
      onPress={handleDiceRoll}
      style={`${style.dice} ${isActive ? style.active : style.done}`}>
      <animated.div style={Spin} className={style.svgWrapper}>
        {children}
      </animated.div>
      <span className={style.number}>{result}</span>
    </Pressable>
  );
};

const style = StyleSheet.create({
  dice: tailwind(`flex font-bold w-56 h-56 mb-3 relative`)
})

export default Dicebox;
