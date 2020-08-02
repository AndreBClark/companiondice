import { h } from 'preact';
import { useState } from 'preact/hooks';
import Base from './Base';
import { D4, D6, D8, D10, D12, D20, D100 } from './dice';
import { cryptoRandomNumberGen } from './rng';
import Amount from './Amount';

const CurrentDie = props => {
    const [sides, setSides] = useState(props.sides);
    const [result, setResult] = useState(props.sides);
    const [amount, setAmount] = useState(1);
    const [active, isActive] = useState(false);
    const [done, isDone] = useState(true);
    const ticks = 40;
    const speed = 60;
    setSides(props.sides);
    const handleClick = () => {
        isActive(true);
        isDone(false);
        const randomArray = [result];
        for (let i = 0; i < ticks; i++) {
            randomArray.unshift(cryptoRandomNumberGen(amount, amount * sides));
        }
        let displayRefresh = 0;
        let interval = setInterval(function() {
            setResult(randomArray.shift());
            if (++displayRefresh === ticks) {
                window.clearInterval(interval);
                isActive(false);
                isDone(true);
            }
        }, speed);
    };
    return (
        <Base>
            <button
                onClick={handleClick}
                class={`dice ${active ? ' active ' : ''} ${
                    done ? ' done ' : ''
                }`}>
                {(() => {
                    switch (sides) {
                        case '4':
                            return <D4 />;
                        case '6':
                            return <D6 />;
                        case '8':
                            return <D8 />;
                        case '10':
                            return <D10 />;
                        case '12':
                            return <D12 />;
                        case '20':
                            return <D20 />;
                        case '100':
                            return <D100 />;
                    }
                })()}
                <span class="m-auto text-gray-900 bg-teal-400 z-10">
                    {result}
                </span>
            </button>
            <Amount amount={amount} sides={sides} setAmount={setAmount} />
        </Base>
    );
};
export default CurrentDie;
