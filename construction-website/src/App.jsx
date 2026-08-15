import './App.css'

function App() {
  return (
    <div>

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">

        <div className="logo">
  <img
    src="/mv-logo.png"
    alt="MV Construction & Builders"
  />

  <div className="logo-name">
    <strong>MV CONSTRUCTION & BUILDERS</strong>
    <small>CONSTRUCTION • QUALITY • TRUST</small>
  </div>
</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hero-small">
            20+ YEARS OF EXPERIENCE
          </p>

          <h1>
            Strong Foundations.
            <br />
            Quality Construction.
          </h1>

          <p className="hero-text">
            Professional construction services in Chennai.
          </p>

          <div className="hero-buttons">

            <a
              href="tel:9789905588"
              className="call-btn"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919789905588"
              className="whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}
      <section className="about" id="about">

        <div className="about-content">

          <div className="about-image">

            <img
              src="/about-construction.jpg"
              alt="MV Construction building project"
            />

          </div>


          <div className="about-text">

            <p className="section-small">
              ABOUT MV CONSTRUCTION
            </p>

            <h2>
              Built With <span>Experience.</span>
            </h2>


            <div className="owner-name">

              <span>
                FOUNDER & OWNER
              </span>

              <strong>
                M. Vijayakumar
              </strong>

            </div>


            <p>
              MV Construction is a Chennai-based construction
              service provider with over 20 years of experience
              in construction work.
            </p>


            <p>
              We focus on dependable workmanship, quality
              execution and delivering work that our customers
              can trust.
            </p>


            <div className="about-highlights">

              <div>
                <strong>20+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Core Expertise</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Commitment</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}
      <section className="services" id="services">

        <div className="section-heading">

          <p className="section-small">
            WHAT WE DO
          </p>

          <h2>
            Our Services
          </h2>

          <p>
            Reliable construction support and services for your building projects.
          </p>

        </div>


        <div className="service-container">


          {/* SERVICE 01 */}
          <div className="service-card">

            <div className="service-number">
              01
            </div>


<h3>Residential Construction</h3>
<p>
  Professional construction services for
  residential and building projects.
</p>

          </div>


          {/* SERVICE 02 */}
          <div className="service-card">

            <div className="service-number">
              02
            </div>

            <h3>
              Building Construction
            </h3>

            <p>
              Construction support for residential and
              building projects.
            </p>

          </div>


          {/* SERVICE 03 */}
          <div className="service-card">

            <div className="service-number">
              03
            </div>

            <h3>
              Construction Support
            </h3>

            <p>
              Experienced workmanship and reliable support
              throughout construction work.
            </p>

          </div>


        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}
      <section className="projects" id="projects">

        <div className="section-heading">

          <p className="section-small">
            OUR WORK
          </p>

          <h2>
            Recent Projects
          </h2>

          <p>
            A glimpse of our construction work.
          </p>

        </div>


        <div className="project-container">


          {/* PROJECT 01 */}
          <div className="project-card">

            <img
              src="/building-construction.jpg"
              alt="MV Construction building construction project"
            />

            <div className="project-overlay">

              <span>
                01
              </span>

              <h3>
                Building Construction
              </h3>

              <p>
                Residential Project • Chennai
              </p>

            </div>

          </div>


          {/* PROJECT 02 */}
          <div className="project-card">

            <img
              src="/centring-work.jpg"
              alt="MV Construction construction work"
            />

            <div className="project-overlay">

              <span>
                02
              </span>

              <h3>
                Construction Work
              </h3>

              <p>
                Structural Construction • Chennai
              </p>

            </div>

          </div>


          {/* PROJECT 03 */}
          <div className="project-card">

            <img
              src="/completed-project.jpg"
              alt="MV Construction completed residential project"
            />

            <div className="project-overlay">

              <span>
                03
              </span>

              <h3>
                Completed Project
              </h3>

              <p>
                Residential Construction • Chennai
              </p>

            </div>

          </div>


        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section className="contact" id="contact">

        <div className="contact-content">


          {/* CONTACT INTRO */}
          <div className="contact-heading">

            <p className="section-small">
              GET IN TOUCH
            </p>

            <h2>
              Let's Build
              <br />
              Something Strong.
            </h2>

            <p>
              Looking for reliable construction
              services in Chennai? Get in touch with us today.
            </p>

          </div>


          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <a
  href="mailto:mail-vk7892820@gmail.com"
  className="contact-item"
>
  <span>EMAIL</span>
  <strong>mail-vk7892820@gmail.com</strong>
</a>


            {/* PHONE 1 */}
            <a
              href="tel:9789905588"
              className="contact-item"
            >

              <span>
                CALL US
              </span>

              <strong>
                97899 05588
              </strong>

            </a>


            {/* PHONE 2 */}
            <a
              href="tel:9445271588"
              className="contact-item"
            >

              <span>
                CALL US
              </span>

              <strong>
                94452 71588
              </strong>

            </a>


            {/* WHATSAPP */}
            <a
              href="https://wa.me/919789905588"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >

              <span>
                WHATSAPP
              </span>

              <strong>
                Chat With Us
              </strong>

            </a>


            {/* LOCATION */}
            <div className="contact-item">

              <span>
                LOCATION
              </span>

              <strong>
                Chennai - 600100
              </strong>

            </div>


          </div>

        </div>

      </section>


      {/* =========================
          FLOATING WHATSAPP
      ========================= */}
      <a
        href="https://wa.me/919789905588"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >

        <i className="fa-brands fa-whatsapp"></i>

      </a>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">

        <div className="footer-content">


          {/* FOOTER BRAND */}
          <div className="footer-brand">

            {/* ORIGINAL FOOTER LOGO */}
            <div className="logo">

              <span>
                MV
              </span>

              <div>

                <strong>
                  CONSTRUCTION AND BUILDERS
                </strong>

                <small>CONSTRUCTION • QUALITY • TRUST</small>

              </div>

            </div>


            <p>
              Professional construction
              services with 20+ years of experience
              in Chennai.
            </p>

          </div>


          {/* FOOTER LINKS */}
          <div className="footer-links">

            <h4>
              QUICK LINKS
            </h4>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          {/* FOOTER CONTACT */}
          <div className="footer-contact">

            <h4>
              CONTACT
            </h4>

            <a href="tel:9789905588">
              97899 05588
            </a>

            <a href="tel:9445271588">
              94452 71588
            </a>
            <a href="mailto:mail-vk7892820@gmail.com">
  mail-vk7892820@gmail.com
</a>

            <p>
              Chennai - 600100
            </p>

          </div>


        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 MV Construction & Builders. All Rights Reserved.
          </p>

        </div>

      </footer>


    </div>
  )
}

export default App