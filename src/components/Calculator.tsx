import { useState } from 'react';

interface CalculatorProps {
    onBack: () => void;
}

export const Calculator = ({ onBack }: CalculatorProps) => {
    const [display, setDisplay] = useState<string>("");

    const addToDisplay = (value: string) => setDisplay(prev => prev + value);
    const clearDisplay = () => setDisplay("");
    const removeLast = () => setDisplay(prev => prev.slice(0, -1));

    const solveCalculator = () => {
        try {
            const result = new Function(`return ${display.replace('x', '*').replace('/', '/')}`)();
            setDisplay(String(result));
        } catch {
            alert("Error en la expresión");
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

                {/* Row 2 */}
                <button onClick={() => addToDisplay('7')}>7</button>
                <button onClick={() => addToDisplay('8')}>8</button>
                <button onClick={() => addToDisplay('9')}>9</button>
                <button className="empty-btn" disabled></button>

                {/* Row 3 */}
                <button onClick={() => addToDisplay('4')}>4</button>
                <button onClick={() => addToDisplay('5')}>5</button>
                <button onClick={() => addToDisplay('6')}>6</button>
                <button className="empty-btn" disabled></button>

                {/* Row */}
                <button onClick={() => addToDisplay('1')}>1</button>
                <button onClick={() => addToDisplay('2')}>2</button>
                <button onClick={() => addToDisplay('3')}>3</button>
                <button className="empty-btn" disabled></button> {/*  */}

                {/* Row 5 */}
                <button onClick={() => addToDisplay('0')}>0</button>
                <button className="empty-btn" disabled></button> {/*  */}
                <button className="empty-btn" disabled></button> {/*  */}
                <button onClick={solveCalculator}>=</button>
            </div>
            <button className="back-btn" onClick={onBack} style={{ marginTop: '20px' }}>Back</button>
        </div>
    );
};