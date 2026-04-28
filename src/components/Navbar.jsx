import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/people-illustration-group2.png'
import wordmarkImg from '../assets/safen-wordmark.png'
import './Navbar.css'

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [proOpen, setProOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="SAFEN" className="navbar-logo-img" />
          <img src={wordmarkImg} alt="Emotions Matter" className="navbar-wordmark-img" />
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              About <span className="dropdown-arrow">▾</span>
            </button>
            {aboutOpen && (
              <div className="dropdown-menu">
                <Link to="/about#who-we-are">Who we are</Link>
                <Link to="/about#articles">Articles</Link>
                <Link to="/partnerships">Partnerships</Link>
              </div>
            )}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setProOpen(true)}
            onMouseLeave={() => setProOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              For Professionals <span className="dropdown-arrow">▾</span>
            </button>
            {proOpen && (
              <div className="dropdown-menu dropdown-menu--wide">
                <Link to="/professionals/schools">Schools</Link>
                <Link to="/professionals/clinicians">Clinicians</Link>
                <Link to="/professionals/community-orgs">Community Organizations</Link>
                <Link to="/professionals/corrections">Corrections</Link>
                <Link to="/professionals/crime-prevention">Crime Prevention</Link>
              </div>
            )}
          </div>

          <Link to="/parents" className="nav-link">For Parents</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link to="/safen-tool" className="navbar-cta">SAFEN&reg;</Link>
      </div>
    </nav>
  )
}

export default Navbar
