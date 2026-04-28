import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="page-about">
      <Navbar />

      {/* Hero: Meet Us */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-text">
            <h1>Meet Us</h1>
            <p>
              SAFEN Emotions Matter has the mission of helping people feel emotionally understood
              and supported.
            </p>
          </div>
          <div className="about-hero-ill">
            {/* Hand holding seedling illustration - SVG inline */}
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Hand */}
              <path d="M60 220c0-8 4-14 10-16l30-8c6-2 12 2 14 8l4 12c2 6-2 12-8 14l-28 8c-6 2-13-2-15-8z" stroke="#333" strokeWidth="2.5" fill="none"/>
              <path d="M100 200l35-10c7-2 14 2 16 9l3 11c2 7-2 14-9 16l-33 10c-7 2-14-2-16-9l-3-11c-2-7 2-14 9-16z" stroke="#333" strokeWidth="2.5" fill="none"/>
              <path d="M140 190l38-8c7-1 14 3 16 10l2 12c1 7-3 14-10 16l-36 8c-7 1-14-3-16-10l-2-12c-1-7 3-14 10-16z" stroke="#333" strokeWidth="2.5" fill="none"/>
              <path d="M180 185l40-5c7-1 14 4 15 11l1 12c1 7-4 14-11 15l-38 5c-7 1-14-4-15-11l-1-12c-1-7 4-14 11-15z" stroke="#333" strokeWidth="2.5" fill="none"/>
              <path d="M222 183l42 0c7 0 13 5 14 12l1 12c0 7-5 13-12 14l-40 0c-7 0-13-5-14-12l-1-12c0-7 5-13 12-14z" stroke="#333" strokeWidth="2.5" fill="none"/>
              {/* Palm area base */}
              <ellipse cx="180" cy="210" rx="95" ry="45" stroke="#333" strokeWidth="2.5" fill="none"/>
              {/* Fingers curving up */}
              <path d="M90 175c-5-12-2-28 8-38s24-12 34-4" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M120 168c-4-14 0-30 12-40s26-10 36 0" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M155 165c-2-15 4-31 17-39s27-6 36 4" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M195 166c0-14 8-29 22-35s27-2 35 10" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M235 172c3-12 13-25 27-28s25 4 30 16" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

              {/* Seedling / Plant */}
              <path d="M250 140c0-20 8-50 18-70" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M250 140c12-15 35-35 55-45" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M250 140c-10-18-18-48-15-68" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* Leaves */}
              <path d="M268 70c15-10 40-12 55-4s20 24 12 38-26 16-41 8-26-28-26-42z" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M305 95c18-5 38 4 46 20s2 34-14 42-34 2-42-14 2-40 10-48z" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M235 72c-12-14-32-22-48-18s-26 18-24 34 16 28 32 24 34-22 40-40z" stroke="#333" strokeWidth="2" fill="none"/>
              {/* Stem */}
              <path d="M250 145 L250 60" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="about-pillars">
        <div className="about-pillars-inner">
          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="26" stroke="#ccc" strokeWidth="2" fill="none"/>
                <circle cx="28" cy="20" r="7" stroke="#888" strokeWidth="2" fill="none"/>
                <path d="M16 44c0-7 5-13 12-13s12 6 12 13" stroke="#888" strokeWidth="2" fill="none"/>
                <circle cx="28" cy="28" r="23" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 3" fill="none"/>
              </svg>
            </div>
            <h3>Who we are</h3>
            <p>
              This is SAFEN as your guide to emotional understanding, and how what you see is never the whole story.
              We help professionals safely ways to connect, listen, and grow.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="8" width="32" height="40" rx="3" stroke="#ccc" strokeWidth="2" fill="none"/>
                <line x1="18" y1="18" x2="38" y2="18" stroke="#ddd" strokeWidth="2"/>
                <line x1="18" y1="26" x2="38" y2="26" stroke="#ddd" strokeWidth="2"/>
                <line x1="18" y1="34" x2="32" y2="34" stroke="#ddd" strokeWidth="2"/>
                <path d="M30 38l4 4 8-8" stroke="#888" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>What we do</h3>
            <p>
              Through guided emotional assessment, emotional tools, and guided conversations,
              SAFEN helps young people share their feelings and respond with clarity and compassion.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 10L34 22H22L28 10z" stroke="#ccc" strokeWidth="2" fill="none"/>
                <rect x="22" y="22" width="12" height="18" rx="2" stroke="#ccc" strokeWidth="2" fill="none"/>
                <line x1="26" y1="28" x2="30" y2="28" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
                <line x1="26" y1="33" x2="30" y2="33" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
                <path d="M36 28c4 0 7 3 7 7s-3 7-7 7" stroke="#ccc" strokeWidth="2" fill="none"/>
                <path d="M38 31h4M38 35h3M38 39h2" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>How we do it</h3>
            <p>
              Our approach is grounded in three core values: Start with empathy, honour each voice,
              Make space for honesty and care.
            </p>
          </div>
        </div>
      </section>

      {/* Emotions Matter Feature Block */}
      <section className="about-feature">
        <div className="about-feature-inner">
          <div className="feature-image">
            <div className="feature-photo-placeholder">
              <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="320" rx="8" fill="#d4e8ec"/>
                <text x="250" y="155" textAnchor="middle" fontFamily="var(--font-body)" fontSize="16" fill="#888">Photo: Professional &amp; youth in conversation</text>
                <text x="250" y="178" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fill="#aaa">(Replace with real image)</text>
              </svg>
            </div>
          </div>
          <div className="feature-content">
            <h2>FEN&reg; Emotions Matter</h2>
            <p>
              For professionals, parents, and caregivers who want to move beyond behaviour &mdash;
              SAFEN&reg; stands for Subjective Assessment Framework for Emotional Needs. It's unique,
              strength-informed approach that uses our subjective assessment framework to help you
              truly hear what a young person feels and needs. Our tools offer guided check-ins,
              summarised insights, and care planning to support meaningful conversations and reduce
              conflict. Rooted in research and built for real-world use across schools, clinics,
              youth in care, education, and emotional communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values + Illustration Section */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="values-list">
            <div className="value-item">
              <h3>Founded by Lived Experience</h3>
              <p>Crafted by those with lived experience with years in hands-on experience.</p>
            </div>
            <div className="value-item">
              <h3>Designed for Real-World Use</h3>
              <p>Built to support families, schools, and professionals in everyday settings.</p>
            </div>
            <div className="value-item">
              <h3>Focused on Emotional Clarity</h3>
              <p>Helps behaviours be understood through needs, trauma-informed tools.</p>
            </div>
          </div>
          <div className="values-illustration">
            <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Person 1 - left, long hair */}
              <circle cx="65" cy="130" r="32" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M30 115c-8-15-5-40 10-52s34-12 46 2" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M100 115c8-15 5-40-10-52s-34-12-46-2" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M33 162c0 20 12 38 32 38s32-18 32-38v-20c0-18-14-32-32-32s-32 14-32 32v20z" stroke="#333" strokeWidth="2" fill="none"/>

              {/* Person 2 - center-left, curly hair + glasses */}
              <circle cx="185" cy="125" r="35" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M148 105c-5-20 2-45 20-58s42-10 55 8" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M158 98c0-18 12-35 27-42s34-4 44 12" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M170 92c5-16 20-30 38-32s34 8 40 24" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M188 88c10-12 28-20 44-16s26 16 28 32" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M205 90c12-8 30-10 42-2s18 20 16 34" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M150 165c0 22 15 42 35 42s35-20 35-42v-18c0-20-16-36-35-36s-35 16-35 36v18z" stroke="#333" strokeWidth="2" fill="none"/>
              <circle cx="172" cy="122" r="12" stroke="#333" strokeWidth="1.8" fill="none"/>
              <circle cx="200" cy="122" r="12" stroke="#333" strokeWidth="1.8" fill="none"/>
              <line x1="184" y1="122" x2="188" y2="122" stroke="#333" strokeWidth="1.8"/>

              {/* Person 3 - center-right, short hair */}
              <circle cx="300" cy="128" r="33" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M270 108c-3-16 6-38 22-46s36-4 46 12" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M330 106c8-14 26-24 42-20s26 16 26 32" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M267 166c0 21 14 40 33 40s33-19 33-40v-18c0-19-15-34-33-34s-33 15-33 34v18z" stroke="#333" strokeWidth="2" fill="none"/>

              {/* Person 4 - right, ponytail */}
              <circle cx="385" cy="132" r="30" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M358 112c-6-14 0-36 14-44s32-6 42 8" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M410 110c6-12 20-22 34-18s22 14 24 28" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M355 168c0 18 13 35 30 35s30-17 30-35v-16c0-17-13-30-30-30s-30 13-30 30v16z" stroke="#333" strokeWidth="2" fill="none"/>
              <path d="M415 142c12 4 22 16 20 30" stroke="#333" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder" id="founder">
        <div className="about-founder-inner">
          <h2>Meet Our Founder</h2>
          <div className="founder-card">
            <div className="founder-avatar">
              <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="55" r="38" fill="#999"/>
                <path d="M25 200c0-35 25-63 55-63s55 28 55 63" fill="#999"/>
              </svg>
            </div>
            <div className="founder-info">
              <h3>Samantha Gamble</h3>
              <p className="founder-title">Emotional Health Therapist &amp; Founder of SAFEN&reg;</p>
              <blockquote>
                "I believe if you truly want to prevent poor mental health, you must start at the emotional health level."
              </blockquote>
              <p className="founder-bio">
                With over 20 years of experience, Samantha specialises in youth emotional health, focusing on
                complex mental health instead of just behaviour. She developed SAFEN&reg; from real-world practice,
                evidence-based research, combining social prescribing, arts-based methods, and trauma-informed
                care to help youth and families heal and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
