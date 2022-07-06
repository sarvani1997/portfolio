import "./ContactStyles.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div className="contact-links">
          <a
            id="profile-link"
            href="https://github.com/sarvani1997"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            href="mailto:sarvani.sanaboyina@gmail.com"
            className="btn contact-details"
          >
            <i className="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:7893321144" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
