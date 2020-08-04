import { h } from 'preact';
import Base from './Base';
import { HPButton } from './Button';
import { useHP } from '../hooks/useHP';
import useInput from '../hooks/useInput';
import NumericInput from 'react-numeric-input';
import styled from 'styled-components';

// const InputNum = styled(NumericInput).attrs({
//     className: `text-8xl xl:text-10xl bg-none text-center mx-auto block w-full text-teal-500`,
// })`
// background: none;
// outline: none;
// text-align: center;
// margin: 0 auto;
// display: block;
// width: 100%;
// `;
// const InputNumMax = styled(InputNum).attrs({
//     className: `text-indigo-500`
// })``

const HealthTracker = props => {
    const { hitpoints, setHitpoints, maxHP, setMaxHP, modifyHP } = useHP();

    return (
        <Base>
            <div class="text-center mx-auto text-indigo-600 font-bold w-2xl text-2xl px-2">
                <div class="flex flex-col justify-around text-center w-full">
                    <div>
                        <div>Heal</div>
                        <div className="flex col-gap-2 gap-2 mx-2">
                            <HPButton onClick={() => modifyHP(1)}>
                            +
                            </HPButton>
                            <HPButton onClick={() => modifyHP(5)}>
                                5
                            </HPButton>
                            <HPButton onClick={() => modifyHP(10)}>
                                10
                            </HPButton>
                        </div>
                    </div>
                    <div class="flex mx-2">
                        <div class="flex flex-col justify-center w-1/3 font-black bg-deeppurple-700 my-8 rounded-lg ">
                            <span class="text-2xl font-bold">
                                Current
                            </span>
                            <NumericInput
                                placeholder="--"
                                value={hitpoints}
                                onChange={setHitpoints}
                                step={1}
                                min={0}
                                max={maxHP}
                                className="w-full text-center bg-none text-teal-400 text-6xl xl:text-10xl"
                                noStyle
                                pattern="[0-9]"
                                snap
                                strict
                                />
                        </div>
                        <span class=" flex-col justify-center text-8xl xl:text-10xl pt-6 pb-8 w-1/3">/</span> 
                        <div class="flex flex-col justify-center w-1/3 font-black bg-deeppurple-700 my-8 rounded-lg">
                            <span class="text-2xl font-bold">Max</span>
                            <NumericInput
                                placeholder="--"
                                value={maxHP}
                                step={1}
                                min={0}
                                max={999}
                                onChange={setMaxHP}
                                snap
                                className='w-full bg-none text-center text-6xl xl:text-10xl'
                                noStyle
                                strict
                                />
                        </div>
                    </div>
                    <div>
                        <div>Damage</div>
                        <div className="flex col-gap-2 gap-2 mx-2">
                            <HPButton onClick={() => modifyHP(-1)}>
                                -
                            </HPButton>
                            <HPButton onClick={() => modifyHP(-5)}>
                                5
                            </HPButton>
                            <HPButton onClick={() => modifyHP(-10)}>
                                10
                            </HPButton>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
};
export default HealthTracker;
