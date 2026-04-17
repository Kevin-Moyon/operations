import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

const [num1,setNum1]= useState<number | string>("");
  const [num2,setNum2]= useState<number | string>("");

  const calculateSum = () =>{
    const sum = Number(num1) + Number(num2);
    alert(`The result is: ${sum}`);
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <h1>Calculator</h1> 
        <p>Enter two numbers to get the instant sum.</p>
        <div>
          <h2>First Number</h2>
          <input 
          type = 'number' 
          value = {num1} 
          onChange ={(e) => setNum1((e.target.value))}
          placeholder="Type first number" />
        </div>

        <div>
          <h2>Second Number</h2>
          <input 
          type = 'number' 
          value = {num2} 
          onChange ={(e) => setNum2((e.target.value))}
          placeholder="Type second number" />
        </div>

        <div>
        <button className="counter" onClick={calculateSum}>Calculate Sum</button>
        </div>

      </section>
    </>
  )
}

export default App
