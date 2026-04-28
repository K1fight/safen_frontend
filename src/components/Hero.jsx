import peopleFull from '../assets/people-illustration-full.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Illustration Banner */}
        <div className="hero-illustration">
          <img src={peopleFull} alt="Diverse young people connecting and supporting each other" className="hero-ill-img" />
        </div>

        {/* Content */}
        <div className="hero-content">
          <p className="hero-eyebrow">WELCOME TO SAFEN WHERE EMOTIONS MATTER</p>
          <h1 className="hero-title">
            See Beyond Behaviour.<br />
            Support the Whole Child.
          </h1>
          <p className="hero-description">
            Used in schools, clinics, and community settings, our guided assessment
            gives young people a safe way to share what they feel. The result? Stronger
            relationships, earlier support, and care plans that meet youth where they are
            with dignity and understanding.
          </p>
          <a href="/discover" className="hero-cta">
            DISCOVER SAFEN®
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
