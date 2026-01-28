export default function Home() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">BG</span>
            <span className="logo-text">Bayside Graphics</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:954-227-4010" className="nav-cta">Get Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Trusted Since 1994</div>
          <h1>Design. Print. <span className="gradient-text">Advertise.</span></h1>
          <p>South Florida's premier full-service print shop. From business cards to corporate branding, we deliver quality printing at competitive prices.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Request a Quote</a>
            <a href="#services" className="btn btn-secondary">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="print-stack">
            <div className="print-item card1">
              <div className="print-preview business-card">
                <span>Business Cards</span>
              </div>
            </div>
            <div className="print-item card2">
              <div className="print-preview brochure">
                <span>Brochures</span>
              </div>
            </div>
            <div className="print-item card3">
              <div className="print-preview poster">
                <span>Posters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Everything you need to make your business shine</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Design</h3>
            <ul>
              <li>Logo Creation</li>
              <li>Corporate Branding</li>
              <li>Form Design</li>
              <li>Layout & Formatting</li>
            </ul>
          </div>
          <div className="service-card featured">
            <div className="service-icon">🖨️</div>
            <h3>Print</h3>
            <ul>
              <li>Business Cards</li>
              <li>Brochures & Flyers</li>
              <li>Booklets & Catalogs</li>
              <li>Banners & Posters</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">📢</div>
            <h3>Advertise</h3>
            <ul>
              <li>Postcard Mailings</li>
              <li>Promotional Materials</li>
              <li>Custom T-Shirts</li>
              <li>Signage & Displays</li>
            </ul>
          </div>
        </div>
        <div className="products-showcase">
          <h3>Popular Products</h3>
          <div className="products-grid">
            <div className="product">Business Cards</div>
            <div className="product">Postcards</div>
            <div className="product">Brochures</div>
            <div className="product">Letterheads</div>
            <div className="product">Envelopes</div>
            <div className="product">Newsletters</div>
            <div className="product">NCR Forms</div>
            <div className="product">Folders</div>
            <div className="product">Rack Cards</div>
            <div className="product">Posters</div>
            <div className="product">Flyers</div>
            <div className="product">Labels</div>
            <div className="product">Stickers</div>
            <div className="product">Menus</div>
            <div className="product">Invitations</div>
            <div className="product">Calendars</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>Coral Springs' Trusted Print Partner</h2>
          <p className="lead">Since 1994, Bayside Graphics has been the go-to print shop for South Florida businesses and organizations.</p>
          <p>We're a full-service printing company that combines old-school craftsmanship with modern technology. Whether you need 50 business cards or 50,000 brochures, we treat every job with the same attention to detail.</p>
          <div className="about-features">
            <div className="feature">
              <span className="check">✓</span>
              <span>Competitive Pricing</span>
            </div>
            <div className="feature">
              <span className="check">✓</span>
              <span>Fast Turnaround</span>
            </div>
            <div className="feature">
              <span className="check">✓</span>
              <span>Quality Guaranteed</span>
            </div>
            <div className="feature">
              <span className="check">✓</span>
              <span>Free Design Consultation</span>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="years-badge">
            <span className="years">30+</span>
            <span className="years-text">Years in Business</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Get a free quote and see why businesses across South Florida trust Bayside Graphics for their printing needs.</p>
        <div className="cta-buttons">
          <a href="tel:954-227-4010" className="btn btn-white">📞 (954) 227-4010</a>
          <a href="#contact" className="btn btn-outline">Get Free Quote</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>4450 NW 126 Ave., Bay 106<br />Coral Springs, FL 33065</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:954-227-4010">(954) 227-4010</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📠</span>
              <div>
                <strong>Fax</strong>
                <p>(954) 227-4019</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Hours</strong>
                <p>Monday - Friday<br />9:00 AM - 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Request a Quote</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option value="">Select Service</option>
              <option value="business-cards">Business Cards</option>
              <option value="brochures">Brochures & Flyers</option>
              <option value="banners">Banners & Posters</option>
              <option value="custom">Custom Print Job</option>
              <option value="design">Design Services</option>
            </select>
            <textarea placeholder="Tell us about your project..." rows={4}></textarea>
            <button type="submit" className="btn btn-primary full-width">Submit Request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">BG</span>
              <span className="logo-text">Bayside Graphics</span>
            </div>
            <p>South Florida's trusted printing partner since 1994. Quality printing at competitive prices.</p>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <a href="#services">Business Cards</a>
            <a href="#services">Brochures</a>
            <a href="#services">Banners & Posters</a>
            <a href="#services">Custom Design</a>
          </div>
          <div className="footer-links">
            <h4>Serving</h4>
            <p>Coral Springs</p>
            <p>Parkland</p>
            <p>Coconut Creek</p>
            <p>Boca Raton</p>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <p>(954) 227-4010</p>
            <p>Mon-Fri: 9am-5:30pm</p>
            <a href="#contact">Get Quote</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Bayside Graphics. All rights reserved.</p>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #0066cc;
          --primary-dark: #0052a3;
          --secondary: #ff6b35;
          --dark: #1a1a2e;
          --gray: #f8f9fa;
          --text: #333;
          --text-light: #666;
        }

        body {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: var(--text);
          line-height: 1.6;
        }

        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--secondary);
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a { color: white; text-decoration: underline; }

        /* Navigation */
        nav {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 1rem 2rem;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--dark);
        }

        .logo-icon {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          font-weight: 800;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 1.25rem;
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.25rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-cta {
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.2s;
        }

        .nav-cta:hover {
          background: var(--primary-dark);
        }

        /* Hero Section */
        .hero {
          padding: 10rem 2rem 5rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
          min-height: 90vh;
        }

        .hero-badge {
          display: inline-block;
          background: var(--primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 1.25rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
          display: inline-block;
          text-align: center;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
          background: var(--primary);
          color: white;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-light);
        }

        .hero-visual {
          position: relative;
          height: 400px;
        }

        .print-stack {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .print-item {
          position: absolute;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          padding: 1.5rem;
          transition: transform 0.3s;
        }

        .print-item:hover {
          transform: translateY(-10px) rotate(0deg) !important;
        }

        .card1 {
          top: 20%;
          left: 10%;
          transform: rotate(-5deg);
          z-index: 3;
        }

        .card2 {
          top: 35%;
          left: 30%;
          transform: rotate(3deg);
          z-index: 2;
        }

        .card3 {
          top: 10%;
          right: 10%;
          transform: rotate(7deg);
          z-index: 1;
        }

        .print-preview {
          width: 150px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: white;
          border-radius: 8px;
        }

        .business-card {
          background: linear-gradient(135deg, var(--primary), #004d99);
        }

        .brochure {
          background: linear-gradient(135deg, var(--secondary), #e55a2b);
          width: 180px;
          height: 120px;
        }

        .poster {
          background: linear-gradient(135deg, #6c63ff, #4834d4);
          width: 200px;
          height: 150px;
        }

        /* Services Section */
        .services {
          padding: 5rem 2rem;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--text-light);
          font-size: 1.125rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto 4rem;
        }

        .service-card {
          background: var(--gray);
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .service-card.featured {
          background: var(--primary);
          color: white;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-card ul {
          list-style: none;
          text-align: left;
        }

        .service-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .service-card.featured li {
          border-color: rgba(255,255,255,0.2);
        }

        .products-showcase {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .products-showcase h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .products-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .product {
          background: var(--gray);
          padding: 0.75rem 1.25rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .product:hover {
          background: var(--primary);
          color: white;
        }

        /* About Section */
        .about {
          padding: 5rem 2rem;
          background: var(--gray);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }

        .about h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .about .lead {
          font-size: 1.25rem;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .check {
          background: var(--primary);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }

        .about-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .years-badge {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .years {
          font-size: 4rem;
          font-weight: 800;
        }

        .years-text {
          font-size: 1rem;
        }

        /* CTA Section */
        .cta {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          text-align: center;
        }

        .cta h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .cta p {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn-white {
          background: white;
          color: var(--primary);
        }

        .btn-white:hover {
          background: var(--gray);
        }

        .btn-outline {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-outline:hover {
          background: white;
          color: var(--primary);
        }

        /* Contact Section */
        .contact {
          padding: 5rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
        }

        .contact-icon {
          font-size: 1.5rem;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .contact-item a {
          color: var(--primary);
          text-decoration: none;
        }

        .contact-form {
          background: var(--gray);
          padding: 2rem;
          border-radius: 16px;
        }

        .contact-form h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--primary);
        }

        .full-width {
          width: 100%;
        }

        /* Footer */
        footer {
          background: var(--dark);
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        .footer-brand p {
          color: rgba(255,255,255,0.7);
          margin-top: 1rem;
        }

        .footer-brand .logo {
          color: white;
        }

        .footer-links h4 {
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-links a,
        .footer-links p {
          display: block;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: rgba(255,255,255,0.5);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }

          nav {
            top: 28px;
            padding: 0.75rem 1rem;
          }

          .logo-text {
            font-size: 1rem;
          }

          .logo-icon {
            padding: 0.4rem 0.6rem;
            font-size: 1rem;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 8rem 1.5rem 3rem;
            text-align: center;
            min-height: auto;
          }

          .hero h1 {
            font-size: 2.25rem;
          }

          .hero p {
            font-size: 1rem;
            max-width: 100%;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }

          .btn {
            padding: 0.875rem 1.5rem;
          }

          .hero-stats {
            justify-content: center;
            gap: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .hero-visual {
            display: none;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .about {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about h2 {
            font-size: 1.75rem;
          }

          .about-features {
            grid-template-columns: 1fr;
          }

          .feature {
            justify-content: center;
          }

          .cta h2 {
            font-size: 1.75rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .contact {
            grid-template-columns: 1fr;
          }

          .contact h2 {
            font-size: 1.75rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
