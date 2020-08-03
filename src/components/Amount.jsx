import { h, Fragment } from 'preact';
import { Button } from './Button';
import { useState } from 'preact/hooks';

const Amount = props => {
    const [oneOrLess, setOneOrLess] = useState(true);
    const [reachedLimit, setReachedLimit] = useState(false);
    props.amount <= 1 ? setOneOrLess(true) : setOneOrLess(false);
    props.amount >= 40 ? setReachedLimit(true) : setReachedLimit(false);
    return (
        <Fragment>
            <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold px-2">
                <Button
                    onClick={() => props.setAmount(props.amount - 1)}
                    oneOrLess={oneOrLess}>
                    -
                </Button>
                <span class="p-4">
                    {props.amount}d{props.sides}
                </span>
                <Button
                    onClick={() => props.setAmount(props.amount + 1)}
                    reachedLimit={reachedLimit}>
                    +
                </Button>
            </div>
            <div class="text-2xl px-2">
                <Button onClick={() => props.setAmount(1)}>Reset</Button>
            </div>
        </Fragment>
    );
};
export default Amount;
