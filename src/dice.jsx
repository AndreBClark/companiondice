import { h,render } from 'preact';
import { Link } from '@reach/router';
import { useState,useEffect } from 'preact/hooks';

function Dice(props) {
    function randomNumGen(max) {
         return Math.ceil(Math.random() * max)
    }
    function handleClick(e) {
        const result = randomNumGen(props.sides);
        console.log(result);
    }
    return (
        <div class="container mx-auto">
            <button onClick={handleClick} 
            class="btn-d-twenty text-blue-400 py-auto font-bold m-4 my-auto          text-4xl">
                    <span class="m-auto">{props.sides}</span>
            </button>
            <Link to="/"
                class="text-gray-300 font-bold mx-auto text-center block bg-blue-800 p-5">
                Home
            </Link>
        </div>
        ) 
}

export default Dice;