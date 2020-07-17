import { h } from 'preact';
import { useState } from 'preact/hooks';
import Base from './Base';
import { D4, D6, D8, D10, D12, D20, D100 } from './dice';
import { cryptoRandomNumberGen } from './rng';
import Amount from './Amount';

const RollStats = props => {
    const [sides, setSides] = useState(props.sides);
    const [result, setResult] = useState(props.sides);
    const [active, isActive] = useState(false);
    const [done, isDone] = useState(true);
    const ticks = 40;
    const speed = 60;
    setSides(6);
    const handleClick = () => {
        isActive(true);
        isDone(false);
        const randomArray = [result];
        for (let i = 0; i < ticks; i++) {
            randomArray.unshift(cryptoRandomNumberGen(6, 18));
        }
        let displayRefresh = 0;
        let interval = setInterval(function () {
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
                <D6 />
                <span class="m-auto text-gray-900 bg-teal-400 z-10">{result}</span>
            </button>
        </Base>
    );
};
export default RollStats;
