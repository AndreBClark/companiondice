import { h, render, Component, Fragment } from 'preact';
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

const App = ({ children }) => {
    return <CurrentDie sides="20" />;
};

render(
    <Router>
        <App path="/" exact />
        <CurrentDie path="/:sides" />
    </Router>,
    document.body
);
