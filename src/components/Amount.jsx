import { h, Fragment } from 'preact';
import { Button } from './Button';
import { useState } from 'preact/hooks';

const Amount = props => {
    const [oneOrLess, setOneOrLess] = useState(true);
    const [reachedLimit, setReachedLimit] = useState(false);
    props.amount <= 1 ? setOneOrLess(true) : setOneOrLess(false);
    props.amount >= 40 ? setReachedLimit(true) : setReachedLimit(false);
    return (
        <div class="px-4 lg:px-0">
            <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
                <div class="w-1/5">
                    <Button
                        onClick={() => props.setAmount(props.amount - 1)}
                        oneOrLess={oneOrLess}
                        >
                        -
                    </Button>
                </div>
                <span class="w-3/5 pt-2 text-center">
                    {props.amount}d{props.sides}
                </span>
                <div class="w-1/5">
                    <Button
                        onClick={() => props.setAmount(props.amount + 1)}
                        reachedLimit={reachedLimit}>
                        <div>+</div>
                    </Button>
                </div>
            </div>
            <div class="text-2xl">
                <Button onClick={() => props.setAmount(1)}>Reset</Button>
            </div>
        </div>
    );
};
export default Amount;
