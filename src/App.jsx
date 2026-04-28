import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.jsx'
import AboutPage from './pages/aboutPage/AboutPage.jsx'
import ParentsPage from './pages/parentsPage/ParentsPage.jsx'
import ContactPage from './pages/contactPage/ContactPage.jsx'
import PartnershipsPage from './pages/partnershipsPage/PartnershipsPage.jsx'
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
