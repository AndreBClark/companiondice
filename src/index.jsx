import { h, render, Component } from 'preact';
import { Router, Link } from '@reach/router';
import Dice from './dice';
if (module.hot) {
    module.hot.accept();
}
class Sides extends Component {
    render() {
        return <span>{this.props.value}</span>;
    }
}

class App extends Component {
    render() {
        return (
            <div class="mx-auto bg-indigo-900 h-screen flex justify-between flex-1">
                <Dice sides="20" />
            </div>
        );
    }
}

export class Menu extends Component {
    renderSides(i) {
        return <Sides value={i} />;
    }
    render() {
        return (
            <div>
                <div class="mb-3 flex justify-around w-full">
                    <Link class="btn" to="/dice/4">
                        <span>D4</span>
                    </Link>
                    <Link class="btn" to="/dice/6">
                        <span>D6</span>
                    </Link>
                    <Link class="btn" to="/dice/8">
                        <span>D8</span>
                    </Link>
                    <Link class="btn" to="/dice/10">
                        <span>D10</span>
                    </Link>
                    <Link class="btn" to="/dice/12">
                        <span>D12</span>
                    </Link>
                    <Link class="btn" to="/dice/20">
                        <span>D20</span>
                    </Link>
                </div>
                <Link
                    to="/"
                    class="text-gray-300 font-bold mx-auto text-center block bg-blue-800 p-5 w-full">
                    Home
                </Link>
            </div>
        );
    }
}

render(
    <Router>
        <App path="/" exact />
        <Dice path="/dice" exact />
        <Dice path="/dice/:sides" />
    </Router>,
    document.body
);
