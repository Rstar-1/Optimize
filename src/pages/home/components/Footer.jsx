import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section-premium">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">OPTIMIZE</h2>
            <p>
              Pioneering industrial excellence through precision engineering 
              and visionary technology since 1936.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Precision Milling</a></li>
              <li><a href="#">Robotic Automation</a></li>
              <li><a href="#">Supply Chain Opt.</a></li>
              <li><a href="#">Technical Support</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with the latest in industrial tech.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 OPTIMIZE INDUSTRIAL TECHNOLOGY. ALL RIGHTS RESERVED.</p>
          <div className="footer-social">
            <a href="#">LI</a>
            <a href="#">TW</a>
            <a href="#">FB</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
