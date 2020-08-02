import { h, Fragment } from 'preact';
import Button from './Button'

const Amount = props => {
    return (
        <Fragment>
            <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
                {props.amount > 1 ? (
                    <Button
                        onClick={() => props.setAmount(props.amount - 1)}>
                        -
                    </Button>
                ) : (
                    <Button 
                        class="cursor-not-allowed">
                        -
                    </Button>
                )}
                <span class="p-4">{props.amount}d{props.sides}</span>
                {props.amount < 40 ? (
                    <Button
                        class="block font-bold px-2"
                        onClick={() => props.setAmount(props.amount + 1)}>
                        +
                    </Button>
                ) : (
                    <Button 
                        class="cursor-not-allowed">
                        +
                    </Button>
                )}
            </div>
            <div class="text-2xl">
                <Button
                    onClick={() => props.setAmount(1)}>
                    Reset
                </Button>
            </div>
        </Fragment>
    );
};
export default Amount;
