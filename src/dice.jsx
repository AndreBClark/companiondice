import { h,render } from 'preact';
import { Link } from '@reach/router';
import { useState,useEffect } from 'preact/hooks';


const Dice = props => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      var timerID = setInterval(() => tick(), 1000);
      return function cleanup() {
        clearInterval(timerID);
      };
    });
    const tick = () => setDate(new Date());
    return (
        <div class="container mx-auto">
            <button onClick={() => setCount(count+1)}id="dTwentyBtn" class="btn-d-twenty">
            <p id="dTwentyOutput" class="text-blue-400 font-bold m-4 my-auto mx-auto my-auto text-4xl">
                {count} 
            </p>
                <h3></h3>
            </button>
            <Link class="text-gray-300 mx-auto text-center" to="/">Home</Link>
        </div>
        ) 
}

export default Dice;