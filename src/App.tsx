import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [view, setView] = useState<'menu' | 'addition' | 'calculator'>('menu');

  const [num1, setNum1] =   useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");

  const [display, setDisplay] = useState<string>("");

  const calculateSum = () => {
    const sum = Number(num1) + Number(num2);
    alert(`The result is: ${sum}`);
  };

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
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      {view === 'menu' && (
        <div className="menu-container">
          <h1>Main Menu</h1>
          <div className="button-group">
              <button className="counter" onClick={() => setView('addition')}>Addition</button>
              <button className="counter" onClick={() => setView('calculator')}>Calculator</button>
          </div>
        </div>
      )}

      {view === 'addition' && (
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
            <button className="back-btn" onClick={() => setView('menu')}>Back</button>
          </div>
        </>
      )}

      {view === 'calculator' && (
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
          <button className="back-btn" onClick={() => setView('menu')} style={{marginTop: '20px'}}>Back</button>
        </div>
      )}
    </section>
  )
}

export default App