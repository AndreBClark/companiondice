import { h } from 'preact';
import { Link } from 'preact-router';
import { D4, D6, D8, D10, D12, D20, D100 } from '../dice';
import style from './style';
const Menu = () => {
  return (
    <nav class={style.nav}>
      <Link href="/dice/4">
        <D4 />
        <span>d4</span>
      </Link>
      <Link href="/dice/6">
        <D6 />
        <span>d6</span>
      </Link>
      <Link href="/dice/8">
        <D8 />
        <span>d8</span>
      </Link>
      <Link href="/dice/10" exact>
        <D10 />
        <span>d10</span>
      </Link>
      <Link href="/dice/12">
        <D12 />
        <span>d12</span>
      </Link>
      <Link href="/dice/20">
        <D20 />
        <span>d20</span>
      </Link>
      <Link href="/dice/100" exact>
        <D100 />
        <span>d100</span>
      </Link>
      <Link href="/stats">
        <D20 />
        <span>STATS</span>
      </Link>
      <Link href="/hp">
        <D20 />
        <span>HP</span>
      </Link>
    </nav>
  );
};
export default Menu;
