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
            <div class="mx-auto h-screen flex justify-between flex-1">
                <Dice sides="20" />
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
