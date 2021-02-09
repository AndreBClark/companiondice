import React from 'react';
import { useRoll } from '_?/useRoll';
import { useDiceSides } from '_?/useDiceSides';
import { D4, D6, D8, D10, D12, D20 } from '@/Svg';
import Controls from '@/Controls';
import FabGroup from '@/menu/fabGroup';
import Dice from '@/dice'

const RegularDice = () => {
  const { amount, setAmount } = useRoll();
  const [useSidesState] = useDiceSides();
  const sides = useSidesState.sides;

  function DiceSwitch() {
    switch (sides) {
      case 4: return <D4 />;
      case 6: return <D6 />;
      case 8: return <D8 />;
      case 10: return <D10 />;
      case 12: return <D12 />;
      case 20: return <D20 />;
      default: throw new Error(`invalid Die ${sides} \n returned type of: ${typeof sides} should return number`);
    }
  }
  return (
    <>
      <Dice min={amount} max={amount * sides}>
        {DiceSwitch()}
      </Dice>
      <Controls amount={amount} setAmount={setAmount} sides={sides} />
      <FabGroup />
    </>
  );
};

export default RegularDice;