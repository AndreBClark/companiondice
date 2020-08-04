import { h } from 'preact';
import Base from './Base';
import { HPButton } from './Button';
import { useHP } from '../hooks/useHP';
import InputNumber from 'react-input-number';
import styled from 'styled-components';

const InputNum = styled(InputNumber).attrs({
    className: `text-8xl xl:text-10xl bg-none text-center mx-auto block w-full text-teal-500`,
})`
background: none;
outline: none;
text-align: center;
margin: 0 auto;
display: block;
width: 100%;
`;
const InputNumMax = styled(InputNum).attrs({
    className: `text-indigo-500`
})``

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
                            1
                            </HPButton>
                            <HPButton onClick={() => modifyHP(5)}>
                                5
                            </HPButton>
                            <HPButton onClick={() => modifyHP(10)}>
                                10
                            </HPButton>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-1/3 text-6xl xl:text-10xl leading-0 font-black">
                            <span class="text-2xl font-bold leading-0 ">
                                Current
                            </span>
                            <InputNum
                                placeholder="--"
                                enableMobileNumericKeyboard
                                value={hitpoints}
                                onChange={setHitpoints}
                                step={1}
                                min={0}
                                max={maxHP}
                            />
                        </div>
                        <span class="text-6xl py-8 w-1/3">/</span> 
                        <div class="w-1/3 text-6xl xl:text-10xl leading-0 font-black">
                            <span class="text-2xl font-bold leading-0">Max</span>
                            <InputNumMax
                                placeholder="--"
                                enableMobileNumericKeyboard
                                value={maxHP}
                                step={1}
                                min={0}
                                onChange={setMaxHP}
                            />
                        </div>
                    </div>
                    <div>
                        <div>Damage</div>
                        <div className="flex col-gap-2 gap-2 mx-2">
                            <HPButton onClick={() => modifyHP(-1)}>
                                1
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
