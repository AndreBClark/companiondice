import { h } from 'preact';
import Base from './Base';
import { HPButton } from './Button';
import useLocalStorage from '../hooks/useLocalStorage';
import InputNumber from 'react-input-number';
import styled from 'styled-components';

const InputNum = styled(InputNumber).attrs({
    className: 'text-6xl xl:text-10xl bg-none text-center mx-auto block w-full',
})`
    background: none;
    outline: none;
    text-align: center;
    margin: 0 auto;
    display: block;
    width: 100%;
`;

const HealthTracker = props => {
    const [hitpoints, setHitpoints] = useLocalStorage('currentHP', maxHP);
    const [maxHP, setMaxHP] = useLocalStorage('maxHP', maxHP);
    return (
        <Base>
            <div class="text-center mx-auto text-indigo-600 font-bold w-2xl text-2xl px-2">
                <div class="flex justify-around text-center w-full">
                    <div class="w-1/4">
                        <div>Damage</div>
                        <HPButton onClick={() => setHitpoints(hitpoints - 1)}>
                            1
                        </HPButton>
                        <HPButton onClick={() => setHitpoints(hitpoints - 5)}>
                            5
                        </HPButton>
                        <HPButton onClick={() => setHitpoints(hitpoints - 10)}>
                            10
                        </HPButton>
                    </div>
                    <div class="w-1/2">
                        <div class="text-6xl xl:text-10xl leading-0 font-black lg:-mt-6">
                            <span class="text-2xl font-bold leading-0 ">
                                Current
                            </span>
                            <InputNum
                                enableMobileNumericKeyboard
                                value={hitpoints}
                                onChange={setHitpoints}
                                step={1}
                                min={0}
                                max={maxHP}
                                placeholder={maxHP}
                            />
                        </div>
                        <div>
                            <span>Max</span>
                            <InputNum
                                enableMobileNumericKeyboard
                                min={hitpoints}
                                step={1}
                                min={0}
                                value={maxHP}
                                onChange={setMaxHP}
                            />
                        </div>
                    </div>
                    <div class="w-1/4">
                        <div>Heal</div>
                        <HPButton onClick={() => setHitpoints(hitpoints + 1)}>
                            1
                        </HPButton>
                        <HPButton onClick={() => setHitpoints(hitpoints + 5)}>
                            5
                        </HPButton>
                        <HPButton onClick={() => setHitpoints(hitpoints + 10)}>
                            10
                        </HPButton>
                    </div>
                </div>
            </div>
        </Base>
    );
};
export default HealthTracker;
