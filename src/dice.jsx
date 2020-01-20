import { h, Component, Fragment } from 'preact';
import Menu from './menu';
import D20 from './assets/d20.svg';
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
            <div class="mx-auto flex flex-col h-screen">
                <div class="container-md mt-10 xl:mt-32 mx-auto text-purple-400 p-3 text-5xl font-bold">
                    D{this.props.sides}
                </div>
                <button
                    onClick={this.handleClick}
                    class="btn-d-twenty relative">
                    <D20 class="absolute top-0 fill-current left-auto px-5 text-green-400 h-full" />
                    <span class="m-auto text-purple-700 z-10">
                        {this.state.result}
                    </span>
                </button>
                <Menu />
            </div>
        );
    }
}

export default Dice;
