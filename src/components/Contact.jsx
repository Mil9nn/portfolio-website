function Contact() {
    return (
      <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required style={{marginLeft: "30px"}} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required style={{marginLeft: "31px"}} />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" style={{marginLeft: "15px"}} />
          </label>
          <label>
            Message:
            <textarea name="message" rows="5" required style={{marginLeft: "5px"}}></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
    );
  }
  
  export default Contact;
  