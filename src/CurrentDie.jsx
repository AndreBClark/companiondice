import { h, Component, Fragment } from 'preact';
import Menu from './menu';
import D4 from './assets/d4.svg';
import D6 from './assets/d6.svg';
import D8 from './assets/d8.svg';
import D10 from './assets/d10.svg';
import D12 from './assets/d12.svg';
import D20 from './assets/d20.svg';

export const randomNumGen = (min, max) =>
    Math.ceil(Math.random() * (max - min)) + min;
export default class CurrentDie extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.incrementAmount = this.incrementAmount.bind(this);
        this.decrementAmount = this.decrementAmount.bind(this);
        this.resetAmount = this.resetAmount.bind(this);
        this.initialState = {
            current: this.props.sides,
            result: this.props.sides,
            amount: 1,
            speed: 60,
            ticks: 40,
            active: false,
        };
        this.state = this.initialState;
    }
    handleClick() {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
        });
        const randomArray = [this.state.result];
        for (let i = 0; i < this.state.ticks; i++) {
            randomArray.unshift(
                randomNumGen(
                    this.state.amount,
                    this.state.amount * this.props.sides
                )
            );
        }
        let displayRefresh = 0;
        let interval = setInterval(
            function() {
                this.setState({ result: randomArray.shift() });
                if (++displayRefresh === this.state.ticks) {
                    window.clearInterval(interval);
                    this.setState({
                        active: false,
                    });
                }
            }.bind(this),
            this.state.speed
        );
    }
    incrementAmount() {
        this.setState(state => ({
            amount: state.amount + 1,
        }));
    }
    decrementAmount() {
        this.setState(state => ({
            amount: state.amount - 1,
        }));
    }
    resetAmount() {
        this.setState({
            amount: 1,
        });
    }
    render() {
        return (
            <div class="mx-auto flex flex-col h-screen container max-w-2xl justify-around">
                <div class="max-w-lg mx-auto">
                    <button
                        onClick={this.handleClick}
                        class={`dice${this.state.active ? ' active' : ''}`}>
                        {(() => {
                            switch (this.props.sides) {
                                case '4':
                                    return <D4 />;
                                case '6':
                                    return <D6 />;
                                case '8':
                                    return <D8 />;
                                case '10':
                                    return <D10 />;
                                case '12':
                                    return <D12 />;
                                case '20':
                                    return <D20 />;
                            }
                        })()}
                        <span class="m-auto text-gray-900 z-10">
                            {this.state.result}
                        </span>
                    </button>
                    <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold z-10 opacity-75">
                        {this.state.amount > 1 ? (
                            <button
                                class="block font-bold opacity-75 px-2"
                                onClick={this.decrementAmount}>
                                -
                            </button>
                        ) : (
                            <button class="block px-2 opacity-0">-</button>
                        )}
                        {this.state.amount}d{this.props.sides}
                        {this.state.amount < 20 ? (
                            <button
                                class="block font-bold opacity-75 px-2"
                                onClick={this.incrementAmount}>
                                +
                            </button>
                        ) : (
                            <button class="block px-2 opacity-0">+</button>
                        )}
                    </div>
                    <button
                        class="text-indigo-600 uppercase font-bold block opacity-75 w-full"
                        onClick={this.resetAmount}>
                        Reset
                    </button>
                </div>
                <Menu />
            </div>
        );
    }
}
