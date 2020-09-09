import { h } from 'preact';
import { Router } from 'preact-router';
import Redirect from './Redirect';

// Code-splitting is automated for routes
import Base from './base';
import Dice from '../routes/dice';
import HealthTracker from '../routes/health';

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
          <Dice path="/dice/:sides" />
          <HealthTracker path="/hp" />
          <Redirect path="/" to="/dice/20" />
        </Router>
      </Base>
    </div>
  );
};
export default App;
