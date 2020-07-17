import { h, render } from 'preact';
import { Router } from '@reach/router';
import CurrentDie from './components/CurrentDie';
import RollStats from './components/Stats'

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return <CurrentDie sides="20" />;
};

render(
    <Router>
        <App path="/" exact />
        <CurrentDie exact path="/:sides" />
        <RollStats exact path="/stats" sides="20" />
    </Router>,
    document.body
);
