import { h } from 'preact';
import { CasinoOutlined, FavoriteBorder } from '@material-ui/icons';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'preact-router';
import { useState } from 'preact/hooks';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#21193b',
    color: '#319795',
  },
})

const Tabs = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      classes={{
        root: classes.root,
      }}
      >
      <Link href="/dice/20">
        <BottomNavigationAction
          label="Dice"
          showLabel
          classes={{
            root: classes.root,
          }}
          icon={<CasinoOutlined />}
        />
      </Link>
      <Link href="/hp">
        <BottomNavigationAction
          label="Health"
          showLabel
          classes={{
            root: classes.root,
          }}
          icon={<FavoriteBorder />}
        />
      </Link>
    </BottomNavigation>
  );
};
export default Tabs;
