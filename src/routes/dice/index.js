import { h } from 'preact';
import CurrentDie from '../../components/dice/CurrentDie';
import Amount from '../../components/Amount';
import { useRoll } from '../../hooks/diceHelpers';
import { D4, D6, D8, D10, D12, D20, D100 } from '../../components/dice';
import Router from 'preact-router';
const Dice = () => {
  const { sides, amount, setAmount } = useRoll();
  return (
  <>
    <CurrentDie sides={sides}>
        <Router>
          <D4 path="dice/4" />
          <D6 path="dice/6" />
          <D8 path="dice/8" />
          <D10 path="dice/10" />
          <D12 path="dice/12" />
          <D20 path="dice/20" />
          <D100 path="dice/100" />
        </Router>
    </CurrentDie>
    <Amount path="dice/*" sides={sides} amount={amount} setAmount={setAmount} />
  </>
  )
}

export default Dice;
