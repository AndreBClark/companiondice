import { h, render, Component, Fragment } from 'preact';
import { Link } from '@reach/router';
import D4 from './assets/d4.svg';
import D6 from './assets/d6.svg';
import D8 from './assets/d8.svg';
import D10 from './assets/d10.svg';
import D12 from './assets/d12.svg';
import D20 from './assets/d20.svg';

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <Link class="btn" to="/4">
                    <D4 />
                    <span>
                        d4
                    </span>
                </Link>
                <Link class="btn" to="/6">
                    <D6 />
                    <span>
                    d6
                    </span>
                </Link>
                <Link class="btn" to="/8">
                    <D8 />
                    <span>
                        d8
                    </span>
                </Link>
                <Link class="btn" to="/10">
                    <D10 />
                    <span>
                        d10
                    </span>
                </Link>
                <Link class="btn" to="/12">
                    <D12 />
                    <span>
                        d12
                    </span>
                </Link>
                <Link class="btn" to="/20">
                    <D20 />
                    <span>
                        d20
                    </span>
                </Link>
            </nav>
        );
    }
}
