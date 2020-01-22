import { h, Component, Fragment } from 'preact';
import Menu from './menu';
import D4 from './assets/d4.svg';
import D6 from './assets/d6.svg';
import D8 from './assets/d8.svg';
import D10 from './assets/d10.svg';
import D12 from './assets/d12.svg';
import D20 from './assets/d20.svg';

export const randomNumGen = max => Math.ceil(Math.random() * max);
export default class CurrentDie extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.incrementAmount = this.incrementAmount.bind(this);
        this.decrementAmount = this.decrementAmount.bind(this);
        this.state = {
            current: this.props.sides,
            result: this.props.sides,
            amount: 1,
            speed: 60,
            ticks: randomNumGen(this.props.sides - 20) + 40,
            active: false,
        };
    }
    handleClick() {
        const currentState = this.state.active;
        this.setState({
            result: randomNumGen(this.props.sides),
            active: !currentState,
        });
        const randomArray = [this.state.result];
        for (let i = 0; i < this.state.ticks; i++) {
            randomArray.unshift(this.state.amount * randomNumGen(this.props.sides));
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
        this.setState((state) => ({
            amount: state.amount + 1
        }))
    }
    decrementAmount() {
        this.setState((state) => ({
            amount: state.amount - 1
        }))
    }

    render() {
        return (
            <div class="mx-auto flex flex-col h-screen">
                <div class="container-md mt-10 xl:mt-32 mx-auto text-purple-600 p-3 text-5xl font-bold">
                    <button class="font-bold opacity-50 px-2" onClick={this.incrementAmount}>+</button>
                    {this.state.amount}D{this.props.sides}
                    <button class="font-bold opacity-50 px-2" onClick={this.decrementAmount}>-</button>
                </div>
                <button
                    onClick={this.handleClick}
                    class={`dice${(this.state.active ? ' active' : '')}`}>
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
                    <span class="m-auto text-purple-800 z-10">
                        {this.state.result}
                    </span>
                </button>
                <Menu />
            </div>
        );
    }
}
