import { h } from 'preact';
import { Link } from 'preact-router';
import { D4, D6, D8, D10, D12, D20, D100 } from '../dice';
import style from './style';
const Menu = () => {
  return (
    <nav class={style.nav}>
      <Link href="/dice/4">
        <D4 />
        <span>4</span>
      </Link>
      <Link href="/dice/6">
        <D6 />
        <span>6</span>
      </Link>
      <Link href="/dice/8">
        <D8 />
        <span>8</span>
      </Link>
      <Link href="/dice/10" exact>
        <D10 />
        <span>10</span>
      </Link>
      <Link href="/dice/12">
        <D12 />
        <span>12</span>
      </Link>
      <Link href="/dice/20">
        <D20 />
        <span>20</span>
      </Link>
      <Link href="/dice/100" exact>
        <D100 />
        <span>100</span>
      </Link>
      <Link href="/dice/stats">
        <D20 />
        <span>stats</span>
      </Link>
    </nav>
  );
};
export default Menu;
