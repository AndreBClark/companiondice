import { h } from 'preact';
import { useState } from 'preact/hooks'
import Dicebox from '../../components/dice/dicebox';
import Controls from '../../components/Controls';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import Router from 'preact-router';
import { D4, D6, D8, D10, D12, D20, D100 } from '../../components/dice';


const Dice = props => {
  const { setSides, sides } = useRoll();
  setSides(props.sides);
  const [amount, updateAmount] = useState(1);
  const increment = () => updateAmount(amount + 1);
  const decrement = () => updateAmount(amount - 1);
  const reset = () => updateAmount(1);

  return (
    <diceContext.Provider value={{ amount, increment, decrement, reset }}>
      <Dicebox sides={sides}>
        <Router>
          <D4 path="dice/4" />
          <D6 path="dice/6" />
          <D8 path="dice/8" />
          <D10 path="dice/10" />
          <D12 path="dice/12" />
          <D20 path="dice/20" />
          <D100 path="dice/100" />
        </Router>
      </Dicebox>
      <Controls sides={sides} />
    </diceContext.Provider>
  );
};

export default Dice;
