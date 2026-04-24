import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Menu } from './components/Menu'
import { Addition } from './components/Addition'
import { Calculator } from './components/Calculator'
import { Search } from './components/Search'

function App() {
  const [view, setView] = useState<'menu' | 'addition' | 'calculator' | 'search'>('menu');

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      {view === 'menu' && <Menu onSetView={setView} />}

      {view === 'addition' && <Addition onBack={() => setView('menu')} />}

      {view === 'calculator' && <Calculator onBack={() => setView('menu')} />}

      {view === 'search' && <Search onBack={() => setView('menu')} />}
    </section>
  )
}

export default App