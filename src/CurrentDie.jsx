import { h, Component, Fragment } from 'preact';
import Base from './Base';
import { D4, D6, D8, D10, D12, D20 } from './dice';
import { cryptoRandomNumberGen } from './rng';
export default class CurrentDie extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.incrementAmount = this.incrementAmount.bind(this);
        this.decrementAmount = this.decrementAmount.bind(this);
        this.resetAmount = this.resetAmount.bind(this);
        this.state = {
            current: this.props.sides,
            result: this.props.sides,
            amount: 1,
            speed: 60,
            ticks: 40,
            active: false,
            done: true,
        };
    }
    handleClick() {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
            done: false,
        });
        const randomArray = [this.state.result];
        for (let i = 0; i < this.state.ticks; i++) {
            randomArray.unshift(
                cryptoRandomNumberGen(
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
                        done: true,
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
            <Base>
                <main class="max-w-lg xs:-mt-4">
                    <button
                        onClick={this.handleClick}
                        class={`dice ${this.state.active ? ' active ' : ''} ${
                            this.state.done ? ' done ' : ''
                        }`}>
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
                    <div class="flex justify-between mx-auto text-indigo-600 text-5xl font-bold">
                        {this.state.amount > 1 ? (
                            <button
                                class="block font-bold px-2"
                                onClick={this.decrementAmount}>
                                -
                            </button>
                        ) : (
                            <button class="block px-2 opacity-0 cursor-not-allowed">-</button>
                        )}
                        {this.state.amount}d{this.props.sides}
                        {this.state.amount < 20 ? (
                            <button
                                class="block font-bold px-2"
                                onClick={this.incrementAmount}>
                                +
                            </button>
                        ) : (
                            <button class="block px-2 opacity-0 cursor-not-allowed">+</button>
                        )}
                    </div>
                    <button
                        class="text-indigo-600 uppercase font-bold block w-full"
                        onClick={this.resetAmount}>
                        Reset
                    </button>
                </main>
            </Base>
        );
    }
}
