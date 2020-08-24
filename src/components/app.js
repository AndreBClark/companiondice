import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
// Code-splitting is automated for routes
import Base from '../components/Base';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Dice from '../routes/dice';
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
        <Header />
        <Base>
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Dice path="/dice" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </Base>
      </div>
    );
  }
}
