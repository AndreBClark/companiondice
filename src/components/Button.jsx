import { h } from 'preact';
const Button = props => {
    return (
        <button
        onClick={props.onClick}
            class="w-full block font-bold mx-auto bg-teal-600 text-deeppurple-800 my-2 rounded-md">
            {props.label}
        </button>
    )
}
export default Button;