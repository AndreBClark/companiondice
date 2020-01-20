import { h, render, Component } from 'preact';
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
            <div class="mt-auto xl:mb-48 container-md mx-auto">
                <div class="flex justify-around w-full flex-wrap pb-4">
                    <Link class="btn" to="/4">
                        <span>
                            <D4 />
                            D4
                        </span>
                    </Link>
                    <Link class="btn" to="/6">
                        <span>
                            <D6 />
                            D6
                        </span>
                    </Link>
                    <Link class="btn" to="/8">
                        <span>
                            <D8 />
                            D8
                        </span>
                    </Link>
                    <Link class="btn" to="/10">
                        <span>
                            <D10 />
                            D10
                        </span>
                    </Link>
                    <Link class="btn" to="/12">
                        <span>
                            <D12 />
                            D12
                        </span>
                    </Link>
                    <Link class="btn" to="/20">
                        <span>
                            <D20 />
                            D20
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}
