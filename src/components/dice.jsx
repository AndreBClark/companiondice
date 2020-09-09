import d4 from '../assets/d4.svg';
import d6 from '../assets/d6.svg';
import d8 from '../assets/d8.svg';
import d10 from '../assets/d10.svg';
import d12 from '../assets/d12.svg';
import d20 from '../assets/d20.svg';
import d100 from '../assets/d100.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
export const D4 = props => {
  return (
    <SvgIcon {...props}>
      <path d="M12,0l12,24l-24,0l12,-24Z" />
    </SvgIcon>
  );
};
export const D6 = props => {
  return (
    <SvgIcon {...props}>
      <path d="M1.075 0h21.85C23.515 0 24 .485 24 1.075v21.85c0 .59-.485 1.075-1.075 1.075H1.075C.485 24 0 23.515 0 22.925V1.075C0 .485.485 0 1.075 0z" />
    </SvgIcon>
  );
};
export const D8 = props => {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="nonzero"
        d="M12.552.2l11.221 11.312c.303.268.303.708 0 .976L12.552 23.8c-.303.267-.801.267-1.104 0L.227 12.488c-.303-.268-.303-.708 0-.976L11.448.2c.303-.267.801-.267 1.104 0z"
      />
    </SvgIcon>
  );
};
export const D10 = props => {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="nonzero"
        d="M23.671 15.584l-11.139 8.249c-.3.223-.778.223-1.078 0L.396 15.631C.153 15.485 0 14.832 0 14.6V9.31c0-.277.215-.964.54-1.107L11.454.167c.3-.223.778-.223 1.078 0L23.47 8.204c.32.144.53.828.53 1.102v5.29c0 .212-.125.845-.329.988z"
      />
    </SvgIcon>
  );
};
export const D12 = props => {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="nonzero"
        d="M23.816 9.969l-4.017 13.242c-.154.496-.442.79-.887.789l-13.779-.015c-.444 0-.734-.329-.885-.794L.179 9.929c-.25-.514-.259-.946.105-1.305L11.371.269a.955.955 0 0 1 1.329 0L23.714 8.66c.366.365.359.786.102 1.309z"
      />
    </SvgIcon>
  );
};
export const D20 = props => {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="nonzero"
        d="M24 17.16c0 .5-.68.84-1.37 1.18l-9.65 5.4a2 2 0 0 1-1.96 0l-9.65-5.4C.97 18.17 0 17.66 0 17.16V7.1c0-.5.49-1.01 1.37-1.44l9.65-5.4a2 2 0 0 1 1.96 0l9.65 5.49C23.32 6 24 6.59 24 7.1v10.05z"
      />
    </SvgIcon>
  );
};
export const D100 = props => {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="nonzero"
        d="M23.671 15.584l-11.139 8.249c-.3.223-.778.223-1.078 0L.396 15.631C.153 15.485 0 14.832 0 14.6V9.31c0-.277.215-.964.54-1.107L11.454.167c.3-.223.778-.223 1.078 0L23.47 8.204c.32.144.53.828.53 1.102v5.29c0 .212-.125.845-.329.988z"
      />
    </SvgIcon>
  );
};
