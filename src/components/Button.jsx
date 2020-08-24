import { h } from 'preact';
export const Button = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.reachedLimit || props.oneOrLess}
      class={`w-full block font-bold mx-auto bg-teal-600 text-deeppurple-800 my-2 rounded-md py-2 ${
        props.oneOrLess ? 'no-cursor-allowed bg-teal-900' : ''
      } ${props.reachedLimit ? 'no-cursor-allowed bg-teal-900' : ''}`}>
      {children}
    </button>
  );
};

export const HPButton = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      class={`w-full font-bold bg-teal-600 text-deeppurple-800 rounded-lg py-2`}>
      {children}
    </button>
  );
};
