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
            <Fragment>
                <div class="flex justify-around w-full flex-wrap mt-auto md:mt-16 pb-4">
                    <Link class="btn" to="/4">
                        <span>
                            <D4 />
                            d4
                        </span>
                    </Link>
                    <Link class="btn" to="/6">
                        <span>
                            <D6 />
                            d6
                        </span>
                    </Link>
                    <Link class="btn" to="/8">
                        <span>
                            <D8 />
                            d8
                        </span>
                    </Link>
                    <Link class="btn" to="/10">
                        <span>
                            <D10 />
                            d10
                        </span>
                    </Link>
                    <Link class="btn" to="/12">
                        <span>
                            <D12 />
                            d12
                        </span>
                    </Link>
                    <Link class="btn" to="/20">
                        <span>
                            <D20 />
                            d20
                        </span>
                    </Link>
                </div>
            </Fragment>
        );
    }
}
