import { useState } from 'react';

interface AdditionProps {
    onBack: () => void;
}

export const Addition = ({ onBack }: AdditionProps) => {
    const [num1, setNum1] = useState<number | string>("");
    const [num2, setNum2] = useState<number | string>("");

    const calculateSum = () => {
        const sum = Number(num1) + Number(num2);
        alert(`The result is: ${sum}`);
    };

    return (
        <>
            <h1>Addition Mode</h1>
            <p>Enter two numbers to get the instant sum.</p>
            <div>
                <h2>First Number</h2>
                <input
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
                <button className="counter" onClick={calculateSum}>Calculate Sum</button>
                <button className="back-btn" onClick={onBack}>Back</button>
            </div>
        </>
    );
};