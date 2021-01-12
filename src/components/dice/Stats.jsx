import React, { useContext } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { Pressable, StyleSheet } from 'react-native';
import { tailwind } from '../tailwind'
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
    <Pressable
      onPress={handleDiceRoll}
      className={`${style.dice} ${isActive ? style.active : style.done}`}>
      <animated.div style={Spin} className={style.svgWrapper}>
        {props.children}
      </animated.div>
      <span className={style.number}>{result}</span>
    </Pressable>
  );
};

const style = StyleSheet.create({
  dice: tailwind(`flex font-bold w-56 h-56 mb-3 relative`)
})

export default Dicebox;
