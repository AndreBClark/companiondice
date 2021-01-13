import React, { useState } from 'react'
import Dicebox from '../../components/dice/dicebox';
import Controls from '../../components/Controls';
import { useRoll, diceContext } from '../../hooks/diceHelpers';
import { D4, D6, D8, D10, D12, D20, D100 } from '../../components/Svg';
import RollStats from '../../components/dice/Stats';
const Dice = props => {
  const { setSides, sides } = useRoll();
  const [amount, updateAmount] = useState(1);
  const increment = () => updateAmount(amount + 1);
  const decrement = () => updateAmount(amount - 1);
  const reset = () => updateAmount(1);
  return (
    <diceContext.Provider value={{ amount, increment, decrement, reset }}>
      {/* <Router> */}
        {/* <Dicebox default sides={sides}>
          <Router>
            <D4 path="dice/4" />
            <D6 path="dice/6" />
            <D8 path="dice/8" />
            <D10 path="dice/10" />
            <D12 path="dice/12" />
            <D20 path="dice/20" />
            <D100 path="dice/100" />
          </Router>
        </Dicebox> */}
      <RollStats
        // path="dice/stats" 
        sides={20}>
        <D6 size="100%"/>
      </RollStats> 
      {/* </Router> */}
      {/* <Controls sides={sides} /> */}
    </diceContext.Provider>
  );
};

export default Dice;
