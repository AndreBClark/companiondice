import { h } from 'preact';
import { Router } from 'preact-router';
import Redirect from '../components/Redirect'

// Code-splitting is automated for routes
import Base from '../components/base';
import Profile from '../routes/profile';
import CurrentDie from './dice/CurrentDie';
import HealthTracker from '../components/HealthTracker';
import RollStats from './dice/Stats';
import { D4, D6, D8, D10, D12, D20, D100 } from '../components/dice';

const App = () => {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  const handleRoute = e => {
    const currentUrl = e.url;
  };
  return (
    <div id="app">
      <Base>
        <Router onChange={handleRoute}>
          <CurrentDie path="/dice/:sides">
            <Router>
              <D4 path="dice/4" />
              <D6 path="dice/6" />
              <D8 path="dice/8" />
              <D10 path="dice/10" />
              <D12 path="dice/12" />
              <D20 path="dice/20" />
              <D100 path="dice/100" />
            </Router>
          </CurrentDie>
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
          <RollStats path="/stats" />
          <HealthTracker path="/hp" />
          <Redirect path="/" to="/dice/20" />
        </Router>
      </Base>
    </div>
  );
}
export default App;
