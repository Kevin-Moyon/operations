import './Addition.css';

import type { AdditionProps } from '../../models/Addition.model';
import { useAddition } from '../../hooks/useAddition';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';


export const Addition = ({ onBack }: AdditionProps) => {
    const { num1, num2, setNum1, setNum2, calculateSum } = useAddition();

    return (
        <div id="center">
            <h1>Addition Mode</h1>
            <p>Enter two numbers to get the instant sum.</p>
            <div className='button-group'>
                <h2>First Number</h2>
                <Input
                    type='number'
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Type first number" />
            </div>
            <div>
                <h2>Second Number</h2>
                <input
                    type='number'
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Type second number" />
            </div>
            <div style={{ marginTop: '20px' }}>
                <Button className="counter" onClick={calculateSum} label="Calculate Sum" />
                <Button className="back-btn" onClick={onBack} label="Back" />
            </div>
        </div>
    );
};