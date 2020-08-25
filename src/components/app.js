import { h, Component } from 'preact';
import { Router } from 'preact-router';
// import Header from './header';
// Code-splitting is automated for routes
import Base from '../components/base';
import Profile from '../routes/profile';
import CurrentDie from './dice/CurrentDie';
import Redirect from '../components/Redirect'
import HealthTracker from '../components/HealthTracker';
import { D4, D6, D8, D10, D12, D20, D100 } from '../components/dice';

import RollStats from './dice/Stats';
export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Base>
          <Router onChange={this.handleRoute}>
            <CurrentDie path="/dice/:sides">
              <Router>
                <D4 path="/dice/4" />
                <D6 path="/dice/6" />
                <D8 path="/dice/8" />
                <D10 path="/dice/10" />
                <D12 path="/dice/12" />
                <D20 path="/dice/20" />
                <D100 path="/dice/100" />
              </Router>
            </CurrentDie>
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
            <RollStats path="/stats" />
            <HealthTracker path="/hp" sides={20} />
            <Redirect path="/" to="/dice/20" />
          </Router>
        </Base>
      </div>
    );
  }
}
