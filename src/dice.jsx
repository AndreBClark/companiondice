import { h,render } from 'preact';
import { Link } from '@reach/router';
import { useState,useEffect } from 'preact/hooks';


const Dice = props => {
    function randomNumGen(max) {return Math.ceil(Math.random() * max)};
    let ticks = randomNumGen(10) + 10; 
    let speed = 60;
    const [roll, setRoll] = useState(() => randomNumGen(props.sides));
    let randomArray = [roll]
    useEffect(() => {
      var interval = setInterval(function() {
        roll = randomArray.shift();
    }, speed);
    for (let i = 0; i < ticks; i++) {
        randomArray.unshift(
            randomNumGen(sides)
        );
    }
    if (++displayRefresh === ticks) {
        return function cleanup() {
            clearInterval(interval);
        }
      };
    });
    return (
        <div class="container mx-auto">
            <button onClick={() => setRoll(props.sides)} id="dTwentyBtn" class="btn-d-twenty">
            <p id="dTwentyOutput" class="text-blue-400 font-bold m-4 my-auto mx-auto my-auto text-4xl">
                {roll} 
            </p>
            </button>
            <Link class="text-gray-300 mx-auto text-center block" to="/">Home</Link>
        </div>
        ) 
}

export default Dice;