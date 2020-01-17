import { render, Component } from 'preact';
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
class Board extends Component {}

class App extends Component {
    renderSides(i) {
        return <Sides value={i} />;
    }
    render() {
        return (
            <div class="container mx-auto bg-gray-800 flex justify-between flex-1">
                <Link class="btn" to="dice/4">
                    <div className="m-4 rounded-full bg-indigo-400">D4</div>
                </Link>
                <Link class="btn" to="dice/6">
                    D6
                </Link>
                <Link class="btn" to="dice/8">
                    D8
                </Link>
                <Link class="btn" to="dice/10">
                    D10
                </Link>
                <Link class="btn" to="dice/12">
                    D12
                </Link>
                <Link class="btn" to="dice/20">
                    D{this.renderSides(20)}
                </Link>
            </div>
        );
    }
}

render(
    <Router>
        <App path="/" exact />
        <Dice path="dice" exact />
        <Dice path="dice/:sides" />
    </Router>,
    document.body
);
