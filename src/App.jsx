import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ParentsPage from './pages/ParentsPage'
import ContactPage from './pages/ContactPage'
import PartnershipsPage from './pages/PartnershipsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
