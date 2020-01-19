import { h, Component, Fragment } from 'preact';
import { Menu } from './menu';
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
            <div class="container mx-auto h-full">
                <div class="bg-indigo-800 text-indigo-100 px-5 text-3xl font-bold">
                    {this.props.sides}
                </div>
                <button onClick={this.handleClick} class="btn-d-twenty">
                    <span class="m-auto">{this.state.result}</span>
                </button>
                <Menu />
            </div>
        );
    }
}

export default Dice;
