import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../models/routes.model';
import { Button } from '../atoms/Button';
import './Calculator.css';

export const Calculator = () => {
    const [display, setDisplay] = useState<string>("");
    const navigate = useNavigate();

    const addToDisplay = (value: string) => setDisplay(prev => prev + value);
    const clearDisplay = () => setDisplay("");
    const removeLast = () => setDisplay(prev => prev.slice(0, -1));

    const solveCalculator = () => {
        try {
            const result = new Function(`return ${display.replace('x', '*').replace('/', '/')}`)();
            setDisplay(String(result));
        } catch {
            alert("Error in the expression");
        }
    };

    return (
        <div className="calculator-wrapper">
            <h1>Calculator</h1>
            <div className="calc-grid">
                <div className="calc-display">{display || "Result"}</div>

                {/* Row 1 */}
                <button onClick={clearDisplay}>D</button>
                <button onClick={() => addToDisplay('/')}>/</button>
                <button onClick={() => addToDisplay('*')}>x</button>
                <button onClick={removeLast}>Remove</button>

                {/* Row 2 - 4: Números */}
                {[['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3']].map((row, i) => (
                    <div key={i} style={{ display: 'contents' }}>
                        {row.map(num => (
                            <button key={num} onClick={() => addToDisplay(num)}>{num}</button>
                        ))}
                        <button className="empty-btn" disabled></button>
                    </div>
                ))}

                {/* Row 5 */}
                <button onClick={() => addToDisplay('0')}>0</button>
                <button className="empty-btn" disabled></button>
                <button className="empty-btn" disabled></button>
                <button onClick={solveCalculator}>=</button>
            </div>

            <Button
                label="Back to Menu"
                onClick={() => navigate(Routes.HOME)}
                className="back-btn"
            />
        </div>
    );
};