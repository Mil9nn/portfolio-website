import Contact from "../components/Contact";

function ContactPage() {
    return (
      <div className="contact-page">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out via the form below or contact me directly via email or social media.
        </p>
        <div className="flexbox">
          <Contact/>
          <div className="additional-info">
            <h3>Contact Information</h3>
            <p>singhmilan314@gmail.com</p>
            <p>Phone: +123 456 7890</p>
            <p>
              Social: <a href="https://instagram.com/in/yourhandle"><i className="fa-brands fa-instagram"></i></a> | <a href="https://linkedin.com/in/yourhandle"><i className="fa-brands fa-linkedin-in"></i></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactPage;
  