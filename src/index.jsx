import { h, render } from 'preact';
import { Router } from '@reach/router';
import CurrentDie from './components/CurrentDie';

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return <CurrentDie sides="20" />;
};

render(
    <Router>
        <App path="/" exact />
        <CurrentDie path="/:sides" />
    </Router>,
    document.body
);
