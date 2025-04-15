import { Routes, Route } from 'react-router-dom'
import './App.css'
import SoilPage from './pages/SoilPage'
import PlantPage from './pages/PlantPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
    <NavBar />
    <Routes>

      <Route path="/" element={<PlantPage />} />
      <Route path="/plants" element={<PlantPage />} />
      <Route path="/soils" element={<SoilPage />} />

    </Routes>
    </div>
  )
}

export default App
