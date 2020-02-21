import { h, Fragment } from 'preact';

export const Amount = props => {
    return (
        <Fragment>
            <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
                {props.amount > 1 ? (
                    <button
                        class="block font-bold px-2"
                        onClick={() => props.setAmount(props.amount - 1)}>
                        -
                    </button>
                ) : (
                    <button class="block px-2 opacity-0 cursor-not-allowed">
                        -
                    </button>
                )}
                {props.amount}d{props.sides}
                {props.amount < 20 ? (
                    <button
                        class="block font-bold px-2"
                        onClick={() => props.setAmount(props.amount + 1)}>
                        +
                    </button>
                ) : (
                    <button class="block px-2 opacity-0 cursor-not-allowed">
                        +
                    </button>
                )}
            </div>
            <button
                class="text-indigo-500 uppercase font-bold block w-full"
                onClick={() => props.setAmount(1)}>
                Reset
            </button>
        </Fragment>
    );
};
