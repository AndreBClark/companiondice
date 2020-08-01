import { h, render } from 'preact';
import { Router } from '@reach/router';
import CurrentDie from './components/CurrentDie';
import RollStats from './components/Stats'
import HealthTracker from './components/HealthTracker'

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return <CurrentDie sides="20" />;
};

render(
    <Router>
        <App path="/" exact />
        <CurrentDie exact path="/dice/:sides" />
        <RollStats exact path="/dice/stats" sides="20" />
        <HealthTracker exact path="/hp"/>
    </Router>,
    document.body
);
