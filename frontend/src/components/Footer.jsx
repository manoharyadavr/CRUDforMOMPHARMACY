import "./Footer.css";

export default function Footer() {
  // Update this with your actual resume download link
  const resumeLink = "../RavulaManohar.pdf"; // Replace with your resume PDF link
  
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About</h3>
          <a
            href="https://maniora.in/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Know about my experience
          </a>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <a
            href="https://www.linkedin.com/in/ravulamanohar/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Know more about me
          </a>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Resume</h3>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link resume-link"
            download
          >
            Download my resume
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Project Management Application. All rights reserved.</p>
      </div>
    </footer>
  );
}

