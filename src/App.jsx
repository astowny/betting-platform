import { useState } from 'react'
import './App.css'
import HeroCarousel from './components/HeroCarousel'
import NavigationTabs from './components/NavigationTabs'
import GameCarousel from './components/GameCarousel'

function App() {
  const [activeTab, setActiveTab] = useState('TOP')

  return (
    <div className="app">
      <HeroCarousel />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameCarousel activeTab={activeTab} />
    </div>
  )
}

export default App
