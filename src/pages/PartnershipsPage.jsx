import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import partnerLogo from '../assets/people-illustration-group2.png'
import './PartnershipsPage.css'

function PartnershipsPage() {
  return (
    <div className="page-partnerships">
      <Navbar />

      {/* Hero: Our Partners */}
      <section className="partnerships-hero">
        <div className="partnerships-hero-inner">
          <div className="partnerships-hero-ill">
            {/* Handshake illustration - two people shaking hands */}
            <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="hero-ill-svg">
              {/* Person Left (partial) */}
              <circle cx="60" cy="80" r="34" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M25 62c-8-16-4-42 12-54s36-10 48 4" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M95 62c8-16 4-42-12-54s-36-10-48 4" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M26 115c0 20 12 38 34 38s34-18 34-38V95c0-18-15-32-34-32S26 77 26 95v20z" stroke="#333" strokeWidth="2.2" fill="none"/>
              {/* Left arm extending to handshake */}
              <path d="M94 130c15 5 40 8 58 6 8-1 14-4 18-9" stroke="#333" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
              <path d="M152 120c8-4 16-4 22 2l8 10c4 5 3 12-2 16l-6 5c-5 4-12 3-16-2l-8-10c-4-5-3-12 2-16z" stroke="#333" strokeWidth="2.2" fill="none"/>

              {/* Person Right */}
              <circle cx="340" cy="85" r="36" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M302 65c-6-18 2-44 20-56s40-8 52 8" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M345 62c10-16 28-26 46-22s28 18 30 34" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M304 125c0 22 15 42 36 42s36-20 36-42v-20c0-20-16-36-36-36s-36 16-36 36v20z" stroke="#333" strokeWidth="2.2" fill="none"/>
              {/* Long hair for right person */}
              <path d="M300 100c-12-18-8-48 8-64s36-16 52-4" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M370 98c8-14 24-26 40-22s24 18 26 32" stroke="#333" strokeWidth="2.2" fill="none"/>
              {/* Right arm extending to handshake */}
              <path d="M304 138c-18 6-42 8-60 5-10-2-17-7-21-13" stroke="#333" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
              <path d="M228 123c-8-5-17-4-23 2l-9 11c-4 5-3 13 3 17l7 5c5 4 13 3 17-3l9-11c5-5 4-13-2-17z" stroke="#333" strokeWidth="2.2" fill="none"/>

              {/* Hands clasped in center */}
              <ellipse cx="210" cy="148" rx="28" ry="18" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M195 142c-4-6 0-14 8-16s16 2 18 8" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M225 140c4-6 0-14-8-16s-16 2-18 8" stroke="#333" strokeWidth="2.2" fill="none"/>
              {/* Fingers interlocking detail */}
              <path d="M202 150 L218 150 M205 155 L215 155 M208 146 L214 146" stroke="#333" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

              {/* Bodies / torsos below */}
              <path d="M26 153c0 30 18 55 34 55s34-25 34-55v-18c0-26-15-45-34-45S26 109 26 135v18z" stroke="#333" strokeWidth="2.2" fill="none"/>
              <path d="M304 167c0 32 19 58 36 58s36-26 36-58v-20c0-28-16-48-36-48s-36 20-36 48v20z" stroke="#333" strokeWidth="2.2" fill="none"/>

              {/* Clothing details - left collar */}
              <path d="M40 158 L60 180 L80 158" stroke="#333" strokeWidth="2" fill="none"/>
              {/* Clothing details - right collar / neckline */}
              <path d="M318 172 L340 195 L362 172" stroke="#333" strokeWidth="2" fill="none"/>
              {/* Button details on right person's clothing */}
              <circle cx="340" cy="190" r="2" fill="#333"/>
              <circle cx="340" cy="205" r="2" fill="#333"/>
              <circle cx="340" cy="220" r="2" fill="#333"/>
            </svg>
          </div>
          <div className="partnerships-hero-text">
            <h1>Our Partners</h1>
            <p>
              We partner with schools, clinicians, and community organizations to
              promote emotional safety. Together, we help young people feel seen and
              supported through tools that foster trust, connection, and understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="partners-current">
        <div className="partners-current-inner">
          <h2>Current Partners</h2>
          <div className="partner-list">
            <div className="partner-item">
              <img src={partnerLogo} alt="Partner Logo" className="partner-logo-img" />
              <p className="partner-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="partner-link">Learn More</a>
            </div>

            <div className="partner-item">
              <img src={partnerLogo} alt="Partner Logo" className="partner-logo-img" />
              <p className="partner-desc">Morbi eleifend sapien at ipsum tincidunt.</p>
              <a href="#" className="partner-link">Learn More</a>
            </div>

            <div className="partner-item">
              <img src={partnerLogo} alt="Partner Logo" className="partner-logo-img" />
              <p className="partner-desc">Donec porttitor mauris turpis, id semper magna eleifend.</p>
              <a href="#" className="partner-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Working Together Section with Puzzle Background */}
      <section className="partners-together">
        <div className="partners-together-inner">
          <h2>Working Together for Emotional Safety</h2>
          <p className="together-intro">
            We seek partners who value dignity, emotional safety, and compassion—those committed
            to building understanding, not just managing behaviour. Together, we focus on prevention,
            trust, and lasting connection.
          </p>

          <div className="together-categories">
            <div className="together-card">
              <h3>Schools Boards & Education Programs</h3>
              <p>Help students feel seen and supported by integrating emotional needs assessments into school care plans.</p>
            </div>

            <div className="together-card">
              <h3>Youth & Family Organizations</h3>
              <p>Provide families with tools to understand and address emotional needs, fostering stronger home connections.</p>
            </div>

            <div className="together-card">
              <h3>Clinicians & Mental Health Providers</h3>
              <p>Enhance therapy and support services with emotional assessments that reveal what's beneath behaviour.</p>
            </div>

            <div className="together-card">
              <h3>Community Partners</h3>
              <p>Collaborate with us to promote emotional literacy, trauma-informed care, and prevention in your programs.</p>
            </div>
          </div>
        </div>

        {/* Puzzle piece decoration SVG background */}
        <svg className="puzzle-bg" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Left puzzle cluster */}
          <path d="M0 120
            C0 90 20 70 50 70
            C50 40 75 20 105 20
            C130 20 150 35 155 60
            C175 50 200 55 212 78
            C225 100 215 128 192 142
            C205 162 198 190 175 204
            C152 218 124 208 112 186
            C92 202 64 202 44 186
            C24 170 20 144 36 124
            C14 110 0 88 0 60
            Z"
            stroke="#333" strokeWidth="2.5" fill="none"/>
          {/* Bottom left puzzle piece */}
          <path d="M30 280
            C30 250 50 230 78 230
            C78 200 102 180 132 180
            C158 180 178 196 184 222
            C206 212 232 218 245 242
            C260 268 248 298 224 314
            C240 336 232 366 206 380
            C182 394 152 382 138 358
            C116 376 86 376 64 358
            C42 340 38 312 56 290
            C32 276 18 252 30 220
            Z"
            stroke="#333" strokeWidth="2.5" fill="none"/>
          {/* Right puzzle cluster */}
          <path d="M600 100
            C600 68 622 46 652 46
            C652 14 680-8 712 8
            C740 22 756 52 748 82
            C772 96 782 126 766 152
            C750 178 720 186 696 172
            C676 192 646 192 624 174
            C602 156 598 128 616 106
            C592 90 576 64 600 32
            Z"
            stroke="#333" strokeWidth="2.5" fill="none"/>
          {/* Bottom right puzzle piece */}
          <path d="M640 260
            C640 228 662 206 692 206
            C692 174 720 152 752 168
            C780 182 796 212 788 242
            C812 256 822 286 806 312
            C790 338 760 346 736 332
            C716 352 686 352 664 334
            C642 316 638 288 656 266
            C632 250 616 224 640 192
            Z"
            stroke="#333" strokeWidth="2.5" fill="none"/>
          {/* Small center-bottom piece */}
          <path d="M350 320
            C350 298 366 280 390 280
            C390 256 410 240 434 250
            C454 258 466 282 458 306
            C476 318 480 344 464 362
            C448 380 422 384 402 370
            C386 384 362 384 346 368
            C330 352 328 330 342 312
            C324 300 312 280 350 260
            Z"
            stroke="#333" strokeWidth="2.5" fill="none"/>
        </svg>
      </section>

      {/* Get In Touch / CTA Section */}
      <section className="partners-cta">
        <div className="partners-cta-inner">
          <span className="cta-label">GET IN TOUCH</span>
          <h2 className="cta-title">Partner with us today</h2>
          <p className="cta-desc">
            Personalized emotional needs assessments that help families see what's beneath behaviour.
          </p>
          <a href="/contact" className="cta-button">CONTACT US</a>
          <div className="cta-bell-ill">
            {/* Bell illustration */}
            <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M40 10
                C24 10 12 24 12 42
                L12 62
                L8 68
                L72 68
                L68 62
                L68 42
                C68 24 56 10 40 10Z"
                stroke="#333" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
              <circle cx="40" cy="78" r="7" stroke="#333" strokeWidth="2.5" fill="none"/>
              <line x1="40" y1="10" x2="40" y2="4" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Bell clapper */}
              <line x1="40" y1="68" x2="40" y2="58" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              {/* Sound waves */}
              <path d="M54 30C60 36 60 48 54 54" stroke="#333" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <path d="M62 24C72 34 72 52 62 60" stroke="#333" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PartnershipsPage
