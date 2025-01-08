import Contact from "../pages/Contact";
// src/pages/About.jsx
function About() {
  return (
    <section className="about content" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="about-description">
          I am an aspiring Full Stack Developer with a background in Mechanical Engineering. 
          In my prefinal year of Bachelor's degree, I discovered my passion for web development, and I'm now focused on building a career in the field. 
          I believe in continuous learning and enjoy solving problems through code.
        </p>
        
        <div className="education">
          <h3>Education</h3>
          <p><strong>B.E. in Mechanical Engineering</strong></p>
          <p>Government College of Engineering and Technology, Jammu</p>
          <p>August 2019 - February 2024</p>
          <p>CGPA: 7.6</p>
        </div>
      </div>
      <Contact/>
    </section>
  );
}

export default About;


