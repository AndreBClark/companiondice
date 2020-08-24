import { h } from 'preact';
import style from './style';
import CurrentDie from '../../components/CurrentDie';
const Dice = () => (
  <div class={style.home}>
    <p>dice component loaded</p>
    <CurrentDie />
  </div>
);

export default Dice;
