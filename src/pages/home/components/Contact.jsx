import React from 'react';

const Contact = () => {
  return (
    <section className="contact section-premium">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="section-subtitle text-orange">Get In Touch</h3>
            <h2 className="section-title">Let's Build The Future Together</h2>
            <p>
              Ready to elevate your manufacturing capabilities? Our experts are 
              standing by to provide you with a customized industrial roadmap.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <span>Headquarters</span>
                <p>123 Engineering Way, Industrial District, Tech City</p>
              </div>
              <div className="detail-item">
                <span>Email Us</span>
                <p>solutions@optimize.tech</p>
              </div>
              <div className="detail-item">
                <span>Call Us</span>
                <p>+1 (800) OPT-TECH</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <select>
                  <option>Select Industry</option>
                  <option>Aerospace</option>
                  <option>Automotive</option>
                  <option>Defence</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
      <div className="large-typography">CONNECT</div>
    </section>
  );
};

export default Contact;
