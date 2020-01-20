import { h, render, Component } from 'preact';
import Dice from './dice';
import { Router } from '@reach/router';
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
        <Die path="/:sides" />
    </Router>,
    document.body
);
