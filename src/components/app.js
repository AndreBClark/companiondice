import { h } from 'preact';
import { Router } from 'preact-router';
import Redirect from '../components/Redirect'

// Code-splitting is automated for routes
import Base from '../components/base';
import Dice from '../routes/dice';
import HealthTracker from '../components/HealthTracker';
import RollStats from './dice/Stats';

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
          <Dice path="/dice/:sides" sides={20} />
          <RollStats path="stats" sides={20} />
          <HealthTracker path="/hp" />
          <Redirect path="/" to="/dice/20" />
        </Router>
      </Base>
    </div>
  );
}
export default App;
