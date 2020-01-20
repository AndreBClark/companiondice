import { h, render, Component } from 'preact';
import { Router } from '@reach/router';
import CurrentDie from './CurrentDie';
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
                <CurrentDie sides="20" />
            </div>
        );
    }
}

render(
    <Router>
        <App path="/" exact />
        <CurrentDie path="/:sides" />
    </Router>,
    document.body
);
