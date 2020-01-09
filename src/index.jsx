import { h, render, Component } from 'preact';
import { Router, Link, Route } from "@reach/router";
import Dice from './dice'
if (module.hot) {
    module.hot.accept()
}
const App = ({children}) => (
    <div class="container mx-auto bg-gray-800 flex justify-between flex-1">
        <button class="btn d4">D4</button>
        <button class="btn d6">D6</button>
        <button class="btn d8">D8</button>
        <button class="btn d10">D10</button>
        <button class="btn d12">D12</button>
        <button class="btn d20">D20</button>
        <Link to="dice">Dice</Link>
        {children}
    </div>
);

render(
    <Router>
        <App path="/" exact />
        <Dice path="dice"/>
    </Router>
    , document.body);