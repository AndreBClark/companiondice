import { h, render, Component } from 'preact';
import { Router, Link, Route } from "@reach/router";
import Dice from './dice'
if (module.hot) {
    module.hot.accept()
}
class Sides extends Component {
    render() {
      return (
        <span>
          {this.props.value}
        </span>
      );
    }
  }
  class Board extends Component {

  }

class App extends Component {
    renderSides(i) {
        return <Sides value={i} />;
      }
render() {
    return (
        <div class="container mx-auto bg-gray-800 flex justify-between flex-1">
        <button class="btn d4">D4</button>
        <button class="btn d6">D6</button>
        <button class="btn d8">D8</button>
        <button class="btn d10">D10</button>
        <button class="btn d12">D12</button>
    <Link class="btn d20" to="dice/20">D{this.renderSides(20)}</Link>
    </div>
        )
    }
}

render(
    <Router>
        <App path="/" exact />
        <Dice path="dice" exact/>
        <Dice path="dice/:sides"/>
    </Router>
    , document.body);