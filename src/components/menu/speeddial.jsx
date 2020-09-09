import { h } from 'preact';
import { useState } from 'preact/hooks'
import { makeStyles } from '@material-ui/core/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import { D20, D4, D6, D8, D10, D12, D100 } from '../dice';
import { Link } from 'preact-router';

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="Dice Tower"
        className={classes.speedDial}
        icon={<D20 />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}>
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            classes={{
              fab: classes.fab,
              staticTooltipLabel: classes.staticTooltipLabel
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    height: 380,
    backgroundColor: '#21193b',
    color: '#319795',
    // transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fab: {
    backgroundColor: '#21193b',
    color: '#319795',
  },
  actions: {
    backgroundColor: '#21193b',
    color: '#319795',
  },
  staticTooltipLabel: {
    fontWeight: 'bold',
    backgroundColor: '#21193b',
    color: '#319795',
  },
}));

const actions = [
  {
    icon: (
      <Link href="/dice/20">
        <D20 />
      </Link>
    ),
    name: 'd20',
  },
  {
    icon: (
      <Link href="/dice/4">
        <D4 />
      </Link>
    ),
    name: 'd4',
  },
  {
    icon: (
      <Link href="/dice/6">
        <D6 />
      </Link>
    ),
    name: 'd6',
  },
  {
    icon: (
      <Link href="/dice/8">
        <D8 />
      </Link>
    ),
    name: 'd8',
  },
  {
    icon: (
      <Link href="/dice/10">
        <D10 />
      </Link>
    ),
    name: 'd10',
  },
  {
    icon: (
      <Link href="/dice/12">
        <D12 />
      </Link>
    ),
    name: 'd12',
  },
];

