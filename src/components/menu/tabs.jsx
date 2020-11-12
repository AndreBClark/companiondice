import { h } from 'preact';
import style from './style'
import { CasinoOutlined, FavoriteBorder } from '@material-ui/icons';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { Link } from 'preact-router';
import { useState } from 'preact/hooks';

const Tabs = props => {
  const [value, setValue] = useState(0);
  return (
    <div className='MuiBottomNavigation-root'
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      >
      <Link href="/dice/20" className={style['BottomNavigationAction-root']}>
        <BottomNavigationAction
          label="Dice"
          className={style['BottomNavigationAction-root']}
          showLabel
          icon={<CasinoOutlined />}
        />
      </Link>
      <Link href="/hp" className={style['BottomNavigationAction-root']}>
        <BottomNavigationAction
          label="Health"
          className={style['BottomNavigationAction-root']}
          showLabel
          icon={<FavoriteBorder />}
        />
      </Link>
    </div>
  );
};
export default Tabs;
