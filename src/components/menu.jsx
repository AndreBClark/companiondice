import { h } from 'preact';
import { Link } from '@reach/router';
import { D4, D6, D8, D10, D12, D20, D100 } from './dice';

const Menu = props => {
    return (
        <nav>
            <Link class="btn" to="/dice/4">
                <D4 />
                <span>d4</span>
            </Link>
            <Link class="btn" to="/dice/6">
                <D6 />
                <span>d6</span>
            </Link>
            <Link class="btn" to="/dice/8">
                <D8 />
                <span>d8</span>
            </Link>
            <Link class="btn" to="/dice/10" exact>
                <D10 />
                <span>d10</span>
            </Link>
            <Link class="btn" to="/dice/12">
                <D12 />
                <span>d12</span>
            </Link>
            <Link class="btn" to="/dice/20">
                <D20 />
                <span>d20</span>
            </Link>
            <Link class="btn" to="/dice/100" exact>
                <D100 />
                <span>d100</span>
            </Link>
            <Link class="btn" to="/stats">
                <D20 />
                <span>STATS</span>
            </Link>
            <Link class="btn" to="/hp">
                <D20 />
                <span>HP</span>
            </Link>
        </nav>
    );
};
export default Menu;
