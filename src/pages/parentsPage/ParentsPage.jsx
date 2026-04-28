import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import './ParentsPage.css'

function ParentsPage() {
  return (
    <div className="page-parents">
      <Navbar />

      {/* Eyebrow Banner */}
      <section className="parents-eyebrow">
        <p>HEAR WHAT'S UNSPOKEN. STRENGTHEN THE BOND.</p>
      </section>

      {/* Hero Section */}
      <section className="parents-hero">
        <div className="parents-hero-inner">
          <div className="parents-hero-img">
            <div className="hero-photo-placeholder">
              <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="320" rx="8" fill="#d4c4b8"/>
                <text x="240" y="155" textAnchor="middle" fontFamily="var(--font-body)" fontSize="15" fill="#888">Photo: Parent &amp; teen conversation</text>
                <text x="240" y="178" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="#aaa">(Replace with real image)</text>
              </svg>
            </div>
          </div>
          <div className="parents-hero-text">
            <h1>For Parents, Guardians,<br />and Loved Ones</h1>
            <p>
              Your child's behaviour tells a story — but they can't always tell it themselves. You've tried "calm down," "use your words," and patience. When behaviour feels like a battle, connection becomes the bridge. SAFEN® helps you hear what's unspeakable so you can respond in ways that truly support them. Because when they feel understood, everything changes.
            </p>
            <a href="#connect" className="parents-cta">CONNECT WITH US</a>
          </div>
        </div>
      </section>

      {/* Parent Insight Package */}
      <section className="parents-package">
        <div className="parents-package-inner">
          <h2>SAFEN&reg; PARENT INSIGHT PACKAGE</h2>
          <p className="package-subtitle">This is a simple, parent-friendly way to understand your child better — it is not therapy. It is support and clarity.</p>

          <div className="package-grid">
            <div className="package-item">
              <div className="package-icon">
                <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hand holding pen/clipboard icon */}
                  <path d="M20 60c2-12 10-22 22-24s24 4 28 16" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M48 52l18-6c3-1 5 1 6 4l2 8c1 3-1 6-4 7l-16 5c-3 1-6-1-7-4l-2-8c-1-3 1-6 4-7z" stroke="#333" strokeWidth="2" fill="none"/>
                  <line x1="55" y1="54" x2="78" y2="42" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="82" cy="39" r="3" fill="#333"/>
                  <path d="M30 30c4-8 14-12 22-9" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>1. Emotional Check-In</h3>
              <p>Your child answers simple questions about how they feel at home, school, and with friends — no judgment, just honesty.</p>
            </div>

            <div className="package-item">
              <div className="package-icon">
                <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Clipboard with checklist */}
                  <rect x="25" y="12" width="50" height="62" rx="4" stroke="#333" strokeWidth="2" fill="none"/>
                  <rect x="38" y="6" width="24" height="10" rx="3" stroke="#333" strokeWidth="2" fill="none"/>
                  <line x1="35" y1="28" x2="65" y2="28" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="35" y1="38" x2="65" y2="38" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="35" y1="48" x2="58" y2="48" stroke="#ddd" strokeWidth="1.5"/>
                  <path d="M36 27l3 3 5-5" stroke="#888" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 37l3 3 5-5" stroke="#888" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 47l3 3 5-5" stroke="#888" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>2. Emotional Summary</h3>
              <p>You receive a clear summary of their emotional needs, stress points, and what they need most from you right now.</p>
            </div>

            <div className="package-item">
              <div className="package-icon">
                <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Person sitting at desk/tablet */}
                  <ellipse cx="50" cy="68" rx="32" ry="8" stroke="#ddd" strokeWidth="1.5" fill="none"/>
                  <rect x="34" y="44" width="32" height="22" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
                  <rect x="38" y="48" width="24" height="14" rx="1" stroke="#eee" strokeWidth="1" fill="none"/>
                  <circle cx="50" cy="28" r="10" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M40 40c0-5 4-10 10-10s10 5 10 10v4H40v-4z" stroke="#333" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>3. Parent Session</h3>
              <p>We walk you through the results together, helping you understand what your child is communicating and how to respond.</p>
            </div>

            <div className="package-item">
              <div className="package-icon">
                <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Notes/paper icon */}
                  <rect x="22" y="8" width="56" height="64" rx="3" stroke="#333" strokeWidth="2" fill="none"/>
                  <line x1="32" y1="22" x2="68" y2="22" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="32" y1="32" x2="68" y2="32" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="32" y1="42" x2="56" y2="42" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="32" y1="52" x2="60" y2="52" stroke="#ddd" strokeWidth="1.5"/>
                  <path d="M66 18l8 8" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M74 18l-8 8" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>4. Practical Ideas</h3>
              <p>You leave with real, doable steps to strengthen your bond and support your child's emotional wellbeing at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SAFEN Matters */}
      <section className="parents-why">
        <div className="parents-why-inner">
          <div className="why-text">
            <p className="why-label">WHAT WE UNDERSTAND SO WE CAN HELP.</p>
            <h2>Why SAFEN&reg; Matters</h2>
            <ul className="why-list">
              <li>It is about more than just your child's behaviour.</li>
              <li>It is about your home.</li>
              <li>It is about your peace.</li>
              <li>It is about helping you feel seen and supported as a parent, not judged or blamed for what you don't know yet.</li>
              <li>That is real change. That is healing.</li>
            </ul>
          </div>
          <div className="why-illustration">
            <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Puzzle pieces illustration - blue piece top-left */}
              <path d="M70 30
                c-8 0-15 6-15 14c0 5 3 9 7 12
                c-4 3-7 7-7 12c0 8 7 14 15 14
                h45c8 0 15-6 15-14c0-5-3-9-7-12
                c4-3 7-7 7-12c0-8-7-14-15-14z"
                stroke="#7db8cc" strokeWidth="2.5" fill="#b8dce8" opacity="0.7"/>

              {/* Puzzle piece - red/pink top-right */}
              <path d="M210 40
                c-7 0-13 5-13 12c0 4 2 8 6 10
                c-3 3-6 6-6 11c0 7 6 12 13 12
                h40c7 0 13-5 13-12c0-4-2-8-6-10
                c3-3 6-6 6-11c0-7-6-12-13-12z"
                stroke="#e07a7a" strokeWidth="2.5" fill="#f4b8b8" opacity="0.6"/>

              {/* Puzzle piece - yellow bottom center (largest) */}
              <path d="M130 140
                c-10 0-18 8-18 17c0 6 4 11 9 14
                c-5 4-9 9-9 15c0 10 8 18 18 18
                h60c10 0 18-8 18-18c0-6-4-11-9-14
                c5-4 9-9 9-15c0-10-8-18-18-18z"
                stroke="#d4a84b" strokeWidth="2.5" fill="#f0d87a" opacity="0.55"/>

              {/* Connector lines between pieces */}
              <path d="M115 82 Q140 110 148 140" stroke="#999" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
              <path d="M250 85 Q220 115 190 150" stroke="#999" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Summary Can Be Used To */}
      <section className="parents-uses">
        <div className="parents-uses-inner">
          <h2>Your Child's Summary Can Be Used To:</h2>
          <p className="uses-subtitle">The SAFEN&reg; Summary belongs to you. Sharing our findings allows us to work alongside professionals who already care for your child — so everyone is on the same page. Their voice matters. Their comfort comes first.</p>

          <div className="uses-grid">
            <div className="use-card">
              <div className="use-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="14" r="7" stroke="#888" strokeWidth="2" fill="none"/>
                  <path d="M12 42c0-7 5-13 12-13s12 6 12 13" stroke="#888" strokeWidth="2" fill="none"/>
                  <path d="M33 20l8-8M41 12l-8 8" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p>Use as part of a care plan when working with inclusive service providers</p>
            </div>

            <div className="use-card">
              <div className="use-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="8" width="28" height="32" rx="3" stroke="#888" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="16" x2="32" y2="16" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="16" y1="23" x2="32" y2="23" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="16" y1="30" x2="26" y2="30" stroke="#ddd" strokeWidth="1.5"/>
                </svg>
              </div>
              <p>Bring to a therapist or counsellor to help shape care</p>
            </div>

            <div className="use-card">
              <div className="use-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8c-8 0-14 6-14 14c0 5 3 10 7 13c-1 3-4 7-8 11c6-1 12-3 17-6c5 2 10 1 14-2c5-4 8-10 7-16C46 14 36 8 24 8z" stroke="#888" strokeWidth="2" fill="none"/>
                  <circle cx="18" cy="21" r="2" fill="#888"/>
                  <circle cx="24" cy="21" r="2" fill="#888"/>
                  <circle cx="30" cy="21" r="2" fill="#888"/>
                </svg>
              </div>
              <p>Inform your family doctor or paediatrician during check-ins</p>
            </div>

            <div className="use-card">
              <div className="use-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="18" r="8" stroke="#888" strokeWidth="2" fill="none"/>
                  <path d="M14 34c0-6 4-11 10-11s10 5 10 11" stroke="#888" strokeWidth="2" fill="none"/>
                  <circle cx="36" cy="14" r="5" stroke="#ccc" strokeWidth="1.5" fill="none"/>
                  <path d="M36 19v8" stroke="#ccc" strokeWidth="1.5"/>
                </svg>
              </div>
              <p>Guide conversations with your child at home</p>
            </div>

            <div className="use-card">
              <div className="use-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="#888" strokeWidth="2" fill="none"/>
                  <polyline points="8,18 24,26 40,18" stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>Share your child's teacher, principal, or other support team</p>
            </div>

            <div className="use-card">
              <div className="use-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="28" height="28" rx="3" stroke="#888" strokeWidth="2" fill="none"/>
                  <line x1="18" y1="18" x2="30" y2="18" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="18" y1="24" x2="30" y2="24" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="18" y1="30" x2="26" y2="30" stroke="#ddd" strokeWidth="1.5"/>
                </svg>
              </div>
              <p>other</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Conversation / Contact Form */}
      <section className="parents-contact" id="connect">
        <div className="parents-contact-inner">
          <div className="contact-left">
            <h2>Book a Conversation to Learn How SAFEN&reg; Can Support You and Your Child</h2>
            <p>The SAFEN&reg; Parent Insight Package offers a gentle, parent-friendly way to understand what's behind your child's behaviour — without blame, judgement, or labels. It gives you clarity, practical tools, and real support to help them feel seen, heard, and supported at home.</p>
            <div className="contact-ill">
              <svg viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Teal blob background left */}
                <ellipse cx="90" cy="240" rx="75" ry="110" fill="#a8d5d0" opacity="0.5"/>
                {/* Yellow/orange blob background right */}
                <ellipse cx="185" cy="250" rx="65" ry="95" fill="#f0c97a" opacity="0.45"/>
                {/* Person 1 - sitting left (parent) */}
                <circle cx="85" cy="170" r="22" stroke="#333" strokeWidth="2" fill="none"/>
                <path d="M63 198c0-12 10-22 22-22s22 10 22 22v18c0 8-7 14-15 14h-14c-8 0-15-6-15-14v-18z" stroke="#333" strokeWidth="2" fill="none"/>
                <path d="M63 205c-8 8-12 22-10 36" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M107 205c8 8 12 22 10 36" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Person 2 - sitting right (child) */}
                <circle cx="165" cy="185" r="18" stroke="#333" strokeWidth="2" fill="none"/>
                <path d="M147 208c0-10 8-18 18-18s18 8 18 18v14c0 7-6 12-13 12h-10c-7 0-13-5-13-12v-14z" stroke="#333" strokeWidth="2" fill="none"/>
                <path d="M147 214c-6 6-10 18-8 30" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M183 214c6 6 10 18 8 30" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">What's your name?</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" placeholder="+61" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us a bit about what's going on..."></textarea>
              </div>
              <p className="form-disclaimer">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
              <button type="submit" className="contact-submit">CONNECT</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ParentsPage
