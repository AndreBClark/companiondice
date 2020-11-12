import { h } from 'preact';
import style from './style'
import { CasinoOutlined, FavoriteBorder } from '@material-ui/icons';
import { Link } from 'preact-router';

const Action = ({ children, ...props }) => {
  return(
    <Link href={props.alink}>
      <button className={style.button}>
        <div class={style.wrapper}>
          {props.icon}
          <label className={style.label}>{props.label}</label>
        </div>
      </button>
    </Link>
  )
}
const Tabs = () => {
  return (
    <div class={style.nav}>
      <Action alink="/dice/20" label="Dice" icon={<CasinoOutlined />} />
      <Action alink="/hp" label="Health" icon={<FavoriteBorder />} />
    </div>
  )
};

  export default Tabs;