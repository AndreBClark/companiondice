import { h, render, Component, Fragment } from 'preact';
import { Router } from '@reach/router';
import CurrentDie from './CurrentDie';
import GithubSVG from './assets/github.svg';

if (module.hot) {
    module.hot.accept();
}
class Sides extends Component {
    render() {
        return <span>{this.props.value}</span>;
    }
}

class App extends Component {
    render() {
        return(
            <div class="mx-auto flex flex-col container max-w-2xl justify-around h-screen">
                <header class="mx-auto flex justify-around text-teal-900 font-bold max-w-xs  w-64 p-4">
                    <a href="https://github.com/AndreBClark/companiondice">
                        <span class="sr-only">Github Link</span>
                        <GithubSVG class="h-6 fill-current"/>
                    </a>
                    <a href="https://cosmicdivision.dev">
                        cosmicdivision.dev
                    </a>
                </header>
                <CurrentDie sides="20" />
            </div>
        ) 
    }
}

render(
    <Router>
        <App path="/" exact />
        <CurrentDie path="/:sides" />
    </Router>,
    document.body
);
