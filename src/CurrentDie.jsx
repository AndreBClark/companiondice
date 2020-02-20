import { h } from 'preact';
import { useState } from 'preact/hooks';
import Base from './Base';
import { D4, D6, D8, D10, D12, D20 } from './dice';
import { cryptoRandomNumberGen } from './rng';
const CurrentDie = props => {
    const [sides, setSides] = useState(props.sides);
    const [result, setResult] = useState(props.sides);
    const [amount, setAmount] = useState(1);
    const [speed, setSpeed] = useState(60);
    const [ticks, setTicks] = useState(40);
    const [active, setActive] = useState(false);
    const [done, setDone] = useState(true);

    const handleClick = () => {
        setActive(true);
        setDone(false);
        const randomArray = [result];
        for (let i = 0; i < ticks; i++) {
            randomArray.unshift(cryptoRandomNumberGen(amount, amount * sides));
        }
        let displayRefresh = 0;
        let interval = setInterval(function() {
            setResult(randomArray.shift());
            if (++displayRefresh === ticks) {
                window.clearInterval(interval);
                setActive(false);
                setDone(true);
            }
        }, speed);
    };
    // incrementAmount = () => setAmount(amount + 1)
    // decrementAmount = amount => {
    //     setAmount(amount -= 1);
    // };
    // resetAmount = () => {
    //     setAmount(1);
    // }
    return (
        <Base>
            <main class="max-w-lg xs:-mt-4">
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
                        }
                    })()}
                    <span class="m-auto text-gray-900 z-10">{result}</span>
                </button>
                <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
                    {amount > 1 ? (
                        <button
                            class="block font-bold px-2"
                            onClick={() => setAmount(amount - 1)}>
                            -
                        </button>
                    ) : (
                        <button class="block px-2 opacity-0 cursor-not-allowed">
                            -
                        </button>
                    )}
                    {amount}d{sides}
                    {amount < 20 ? (
                        <button
                            class="block font-bold px-2"
                            onClick={() => setAmount(amount + 1)}>
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
                    onClick={() => setAmount(1)}>
                    Reset
                </button>
            </main>
        </Base>
    );
};
export default CurrentDie;
