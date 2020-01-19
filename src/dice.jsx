import { h, Component, Fragment } from 'preact';
import { Link } from '@reach/router';
export const randomNumGen = max => Math.ceil(Math.random() * max);
class Dice extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            result: 1,
            speed: 60,
            ticks: randomNumGen(this.props.sides) + 20,
        };
    }
    handleClick() {
        this.setState({ result: randomNumGen(this.props.sides) });
        const randomArray = [this.state.result];
        for (let i = 0; i < this.state.ticks; i++) {
            randomArray.unshift(randomNumGen(this.props.sides));
        }
        let displayRefresh = 0;
        let interval = setInterval(
            function() {
                this.setState({ result: randomArray.shift() });
                if (++displayRefresh === this.state.ticks) {
                    window.clearInterval(interval);
                }
            }.bind(this),
            this.state.speed
        );
        console.log(this.state.result);
    }
    render() {
        return (
            <div class="container mx-auto">
                <button
                    onClick={this.handleClick}
                    class="btn-d-twenty text-blue-400 py-auto font-bold m-4 my-auto text-4xl">
                    <span class="m-auto">{this.state.result}</span>
                </button>
                <Link
                    to="/"
                    class="text-gray-300 font-bold mx-auto text-center block bg-blue-800 p-5">
                    Home
                </Link>
            </div>
        );
    }
}

export default Dice;
