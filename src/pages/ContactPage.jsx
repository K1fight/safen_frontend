import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="page-contact">
      <Navbar />

      {/* Page Title */}
      <section className="contact-header">
        <h1>CONTACT US</h1>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-main-inner">
          {/* Left: Text */}
          <div className="contact-info">
            <h2>Every connection starts with listening.<br />Reach out anytime.</h2>

            <p>
              Have questions or looking to learn more? Whether you're a parent, educator, or community
              professional, we're here to listen. Our team is ready to support you and explore how SAFEN&reg;
              can help. Let's start the conversation.
            </p>

            <p>
              See below for our email or complete our form.
            </p>

            <p className="contact-email">
              Email: <a href="mailto:contact@safen.com">contact@safen.com</a>
            </p>

            <p>
              Every great change starts with a simple connection. Whether you're here for guidance,
              collaboration, or support, we're grateful you found us. Together, we can help every young
              person feel seen, heard, and understood.
            </p>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="how-can-help">How can we help?</label>
                <select id="how-can-help" name="inquiry_type" defaultValue="">
                  <option value="" disabled>Please Select</option>
                  <option value="parent">Parent / Guardian</option>
                  <option value="school">School / Educator</option>
                  <option value="clinician">Clinician / Therapist</option>
                  <option value="community">Community Organization</option>
                  <option value="corrections">Corrections / Youth Justice</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="first_name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="last_name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-group form-row-phone">
                <div className="phone-country">
                  <label htmlFor="country-code">Country</label>
                  <select id="country-code" name="country_code" defaultValue="CA">
                    <option value="CA">Canada</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <div className="phone-number">
                  <label htmlFor="phone">Phone number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>

              <p className="form-disclaimer">
                By submitting this form, you agree that SAFEN&reg; may use the information you provide to
                contact you about your request and share helpful updates about our tools, resources, or services.
                You can unsubscribe at any time using the link in our emails. Your information will be handled
                according to SAFEN&reg;'s privacy policy.
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

export default ContactPage
