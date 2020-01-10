import { h,render } from 'preact';
import { Link } from '@reach/router';



const Dice = props => {
    return (
        <div class="container mx-auto">
            <button id="dTwentyBtn" class="btn-d-twenty">
            <p id="dTwentyOutput" class="text-blue-400 font-bold m-4 my-auto mx-auto my-auto text-4xl">
                {props.sides}
            </p>
            </button>
            <Link class="text-gray-300 mx-auto text-center" to="/">Home</Link>
        </div>
        )
}

export default Dice;