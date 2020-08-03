import { h } from 'preact';
import Location from '../index';
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
            onClick={() => setHitpoints(hitpoints + props.mod)}
            class={`w-full block font-bold mx-auto bg-teal-600 text-deeppurple-800 m-2 rounded-md py-2`}>
            {children}
        </button>
    );
};
