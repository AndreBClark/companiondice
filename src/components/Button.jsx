import { h } from 'preact';
const Button = ({children, ...props}) => {
    return (
        <button
            onClick={props.onClick}
            class={`w-full block font-bold mx-auto bg-teal-600 text-deeppurple-800 my-2 rounded-md py-2`}>
            {children}
        </button>
    );
};
export default Button;
