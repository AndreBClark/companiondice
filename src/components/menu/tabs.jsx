import React from 'react'
import style from './style'
import { CasinoOutlined, FavoriteBorder } from '@material-ui/icons';
import { Link } from 'preact-router';

const Action = ({ children, ...props }) => {
  return(
    <Link href={props.alink}>
      <button className={style.button}>
        <View className={style.wrapper}>
          {props.icon}
          <label className={style.label}>{props.label}</label>
        </View>
      </button>
    </Link>
  )
}
const Tabs = () => {
  return (
    <View className={style.nav}>
      <Action alink="/dice/20" label="Dice" icon={<CasinoOutlined />} />
      <Action alink="/hp" label="Health" icon={<FavoriteBorder />} />
    </View>
  )
};

  export default Tabs;