import { h } from 'preact';
import { useState } from 'preact/hooks';
// import { makeStyles } from '@material-ui/core/styles';
// import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import { D20, D4, D6, D8, D10, D12, D100 } from '../dice';
import { Link } from 'preact-router';
import style from './style'
// import { SpeedDialAction } from '@material-ui/lab';

const SpeedDialList = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };


  return(
    <div class={style.fabList}>
      <button class={style.fab} onClick={handleOpen}>
        <D20 />
      </button>
      { open ? props.children : ''}
    </div>
  )
}
const SpeedDialAction = props =>{
  return(
    <Link href={props.link}
      className={style.fabAction}>
      {props.icon}
      {props.name}
    </Link>
  )
}
export default function SpeedDialTooltipOpen() {

  return (
    <SpeedDialList>
        {actions.map(action => (
          <SpeedDialAction
            link={action.url}
            // icon={action.icon}
            name={action.name}
          />
        ))}
    </SpeedDialList>
  );
}

const actions = [
  {
    icon: (<D20 />),
    url: "/dice/20",
    name: 'd20',
  },
  {
    icon: "Stats",
    url: "/dice/stats",
    name: 'stats',
  },
  {
    icon: (<D4 />),
    url: "/dice/4",
    name: 'd4',
  },
  {
    icon: (<D6 />),
    url: "/dice/6",
    name: 'd6',
  },
  {
    icon: (<D8 />),
    url: "/dice/8",
    name: 'd8',
  },
  {
    icon: (<D10 />),
    url: "/dice/10",
    name: 'd10',
  },
  {
    icon: (<D12 />),
    url: "/dice/12",
    name: 'd12',
  },
];