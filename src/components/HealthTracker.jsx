import { h } from 'preact';
import Base from './Base'
import Button from './Button'
import useLocalStorage from '../hooks/useLocalStorage'
import InputNumber from 'react-input-number'

const HealthTracker = props => {
    const [hitpoints, setHitpoints] = useLocalStorage('currentHP', maxHP);
    const [maxHP, setMaxHP] = useLocalStorage('maxHP', maxHP);
    return (
            <Base>
                <div class="text-center mx-auto text-indigo-600 font-bold w-2xl">
                    <div class="flex justify-between text-center text-2xl w-full">
                        <div class="w-1/4">
                            <div>Damage</div>
                            <Button
                                onClick={() => setHitpoints(hitpoints - 1)}
                                label="1"
                                />
                            <Button
                                onClick={() => setHitpoints(hitpoints - 5)} 
                                label="5"
                                />
                            <Button
                                onClick={() => setHitpoints(hitpoints - 10)}
                                label="10"
                                />
                        </div>
                        <div class="w-1/2 items-start">
                        <div class="text-10xl leading-0 font-black -mt-4">
                            <span class="text-lg font-semibold leading-0 ">Current</span>
                                <InputNumber
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
                                <InputNumber
                                    min={hitpoints}
                                    step={1}
                                    min={0}
                                    value={maxHP}
                                    onChange={setMaxHP}
                                    enableMobileNumericKeyboard
                                    />
                            </div>
                        </div>
                        <div class="w-1/4">
                            <div>Heal</div>
                                <Button
                                onClick={() => setHitpoints(hitpoints + 1)}
                                label="1"
                                />
                                <Button
                                onClick={() => setHitpoints(hitpoints + 5)}
                                label="5"
                                />
                                <Button
                                onClick={() => setHitpoints(hitpoints + 10)}
                                label="10"/>
                        </div>
                    </div>
                </div>
            </Base>
    );
};
export default HealthTracker;
