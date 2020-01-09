import { h,render } from 'preact';
import { Link } from '@reach/router';



const Dice = () => {
    const sides = 20;
    const d20 = document.getElementById("dTwentyBtn");
    let d20Display = document.getElementById("dTwentyOutput");
    const randomNumGen = (max) => Math.ceil(Math.random() * max);
    function rollNSidedDie(sides) {
        let speed = 60;
        let result = randomNumGen(sides);
        let ticks = randomNumGen(10) + 10;
    
        d20Display.innerHTML = result;
    
        let randomArray = [result]
    
        for (let i = 0; i < ticks; i++) {
            randomArray.unshift(
                randomNumGen(sides)
            );
        }
    
        let displayRefresh = 0;
        let interval = setInterval(function() {
    
            d20Display.innerHTML = randomArray.shift();
    
            if (++displayRefresh === ticks) {
                window.clearInterval(interval);
            }
    
        }, speed);
    }
    return (
        <div class="container mx-auto">
            <button onClick={() => rollNSidedDie(20)} id="dTwentyBtn" class="btn-d-twenty">
            <p id="dTwentyOutput" class="text-blue-400 font-bold m-4 my-auto mx-auto my-auto text-4xl">
                {d20Display}
            </p>
            </button>
            <Link class="text-gray-300 mx-auto text-center" to="/">Home</Link>
        </div>
        )
}

export default Dice;